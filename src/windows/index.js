import { Service } from './lib/node-windows.js';

export { elevate } from './lib/node-windows.js';

export function install(options, installCB, alreadyInstalledCB) {
    const svc = new Service(options);

    svc.on('install', function() {
        svc.start();
        installCB();
    });

    svc.on('alreadyinstalled', function() {
        alreadyInstalledCB();
    });

    svc.install();
}
