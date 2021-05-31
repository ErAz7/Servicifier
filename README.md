# Servicifier [![version-shield]][release] 
> Script to install any file as a service with a single click

- [Download](#download)
- [Platforms](#platforms)
- [Setup & Usage](#setup--usage)
- [Installation Config](#installation-config)
- [Dependencies](#dependencies)


# [Download][release]
You can download latest release from [here][release]

# Platforms

![windows] | ![macos] | ![linux] |
--- | --- | --- |
Tested on Windows 10 ✔ | Not Supported Yet  | Not Supported Yet  |

# Setup & Usage

To setup Servicifier, you only need to: 

- Downlaod the __[release][release]__ and extract it or [build it yourself](#build-yourself) using the source code
- Put files that you want to install inside `/files` folder
- create an [installation config file](#installation-config) in path `config/installation-config.json`, which will tell Servicifier where to copy your script taken from `/files` and also details like service name. You can do this without config file by manually entering details after running Servicifier, but this of course won't be a single click
- that's it, now you can install your scripts as service with a single click

# Build Yourself
To generate executable files, run:
```bash
npm run release
```
then copy binary assets from `src/windows/bin` to `release/bin`. Also you'll need to create `release/files` folder to put you scripts there to be used as service files

# Installation Config
To automate service installation process, you can create a config file in path `config/installation-config.json`:

```jsonc
{
    // directory to host service files
    "destDir": "c:/ServiceFolder",

    // name of service
    "name": "Service Name",

    // service description
    "description": "Service description",

    // name of entry point file of your script inside /files
    "serviceFile": "script.exe"
}
```

# Dependencies
This script uses [node-windows][node-windows] (maybe [node-mac][node-mac] and [node-linux][node-linux] later) internally but with some changes to work with [PKG][pkg]

[version-shield]: https://img.shields.io/badge/Version-1.0.0-blue
[release]: https://github.com/ErAz7/servicifier/releases
[node-windows]: https://github.com/coreybutler/node-windows#readme
[node-mac]: https://github.com/coreybutler/node-mac
[node-linux]: https://github.com/coreybutler/node-linux
[pkg]: https://github.com/vercel/pkg#readme
[windows]: https://user-images.githubusercontent.com/46329768/120122894-fa2bfb00-c1c0-11eb-9700-8a55d43f1e01.png
[macos]: https://user-images.githubusercontent.com/46329768/120122895-fbf5be80-c1c0-11eb-92c4-fba52ce104cc.png
[linux]: https://user-images.githubusercontent.com/46329768/120122893-f7c9a100-c1c0-11eb-8c7b-405c73691113.png
