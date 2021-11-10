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
Windows 10 ✔ | Not Yet ❌ | Not Yet ❌ |

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
[windows]: https://user-images.githubusercontent.com/46329768/141021000-3fe223be-f648-4aaf-8a2a-3a5d84f95d50.png
[macos]: https://user-images.githubusercontent.com/46329768/141021007-c2075401-e0e0-4451-8668-77da557bbe9b.png
[linux]: https://user-images.githubusercontent.com/46329768/141096642-40524479-cc30-42e3-8a8e-c76c5c9b3f50.png
