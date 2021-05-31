import 'colors';
import { exec } from 'child_process';
import { VERSION } from './config/constants';
import fs from 'fs';
import path from 'path';
import readline from 'readline';
import * as Windows from './windows/index.js';

const CONFIG_PATH = './config/installation-config.json';
const ASSETS_DIR = './files';

// ----------------------------logs-----------------------------
console.log(`v${VERSION}\n\n`.magenta.bold);
// ----------------------------main-----------------------------
start();
// -------------------------------------------------------------

function checkIsAdmin(callback) {
    exec('NET SESSION', (err, so, se) => {
        callback(se.length === 0);
    });
}

function start() {
    const configExists = fs.existsSync(CONFIG_PATH);

    if (configExists) {
        checkIsAdmin(isAdmin => {
            if (!isAdmin) {
                elevate();

                return;
            }

            let configData;

            try {
                configData = JSON.parse(fs.readFileSync(CONFIG_PATH));
            } catch (err) {
                config();

                return;
            }

            configData.isTmp && fs.unlinkSync(CONFIG_PATH);

            run(
                configData.destDir,
                configData.serviceFile,
                configData.name,
                configData.description
            );
        });
    } else {
        config();
    }
}

function elevate() {
    Windows.elevate(`"${process.execPath}"`);
}

function mkdirSync(dir) {
    const folders = dir.split(path.sep);

    for (let i = 1; i <= folders.length; i++) {
        const folderPath = folders.slice(0, i).join(path.sep);

        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
        }
    }
}

function copyDir(dir, dest) {
    const items = fs.readdirSync(dir);

    for (const item of items) {
        const itemPath = path.join(dir, item);
        const destPath = path.join(dest, item);

        if (fs.statSync(itemPath).isFile()) {
            fs.copyFileSync(itemPath, destPath);
        } else {
            fs.mkdirSync(destPath);
            copyDir(itemPath, destPath);
        }
    }
}

function run(destDir, serviceFile, name, description) {
    const destDirResolved = path.resolve(destDir);

    mkdirSync(destDirResolved);
    copyDir(ASSETS_DIR, destDirResolved);

    const serviceFilePath = path.join(destDirResolved, serviceFile);

    installService(name, description, serviceFilePath);
}

function config() {
    const rl = readline.createInterface(process.stdin, process.stdout);

    rl.question('Destination Directory: ', destDir => {
        rl.question('Service File Name: ', serviceFile => {
            rl.question('Service Name: ', name => {
                rl.question('Service Description: ', description => {
                    checkIsAdmin(isAdmin => {
                        if (isAdmin) {
                            run(destDir, serviceFile, name, description);
                        } else {
                            const configDir = path.dirname(CONFIG_PATH);

                            if (!fs.existsSync(configDir)) {
                                fs.mkdirSync(configDir);
                            }

                            fs.writeFileSync(CONFIG_PATH, JSON.stringify({
                                destDir,
                                name,
                                description,
                                serviceFile,
                                isTmp: true
                            }));
                            elevate();
                        }
                    });
                });
            });
        });
    });
}

function installService(name, description, script) {
    Windows.install(
        {
            name,
            description,
            execPath: script,
            script,
            workingdirectory: path.dirname(script)
        },
        () => console.log('Installed Successfully!'.green.bold),
        () => console.log('Already Installed'.yellow.bold)
    );
}
