# react-native-multibundler

The configuration based on the reactive native metro bundler handles subcontracting, supports iOS and Android, and the metro bundler is an official packaged tool. The official subcontracting method is more flexible and stable, and is more practical and reliable than some methods on the Internet.

Metro official：https://facebook.github.io/metro/

Support for react native 0.57~0.58, 0.59 pre-release version is also supported, and then 0.59 is released after the official release, the same applies to the 0.56 version, but because the 0.55 version of the package configuration is not perfect, temporarily does not support version 0.55

Both iOS and Android have loaded multiple bundle instances, which are tested and stable.

### Demo instructions：

     1. Enter project folder：yarn

     2. android：Open android project with android studio iOS: Open iOS project with xcode

     3. Run the android or iOS project directly, the jsbundle package has been pre-made

### js project structure:

```
.
├── App.js               Mini App 1
├── App2.js              Mini App 2
├── App3.js              Mini App 3
├── LICENSE
├── README.md
├── android              android directory
├── app.json
├── buz59.config.js      business package configuration
├── buz-ui.config.js     UI package configuration
├── index.js             business app 1
├── index2.js            business app 2
├── index3.js            business app 3
├── ios                  ios directory
├── package.json
├── platform-ui.config.js           UI platform configuration
├── platformDep-ui.js               UI basic entry
├── platform59.config.js            base package
├── platformDep.js                  base package entry
└── platformEmptyDefaultExport.js   basic package patch
```

### android structure:

```
.
├── AndroidManifest.xml
├── assets
│   ├── index.android.bundle                    bundled app 1
│   ├── index2.android.bundle                   bundled app 2
│   └── platform.android.bundle                 bundled platform 1
└── java
    └── com
        ├── facebook
        │   └── react
        │       ├── AsyncReactActivity.java     load bundle asynchronous
        │       ├── ReactUtil.java
        │       └── bridge
        └── reactnative_multibundler
            ├── FileUtils.java
            ├── ScriptLoadUtil.java
            └── demo                            demo app, can be delete and modify
                ├── Buz1Activity.java
                ├── Buz2Activity.java
                ├── MainActivity.java
                └── MainApplication.java
```

### How to run：

## android

### base package

`yarn platform-android`

### business package

```
yarn app-android
yarn app2-android
yarn app3-android
```

## iOS

### base package

`yarn platform-ios`

### business package

```
yarn app-ios
yarn app2-ios
yarn app3-ios
```
