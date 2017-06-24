![alt text](http://i.imgur.com/oGTBJ7J.png) ![alt text](http://i.imgur.com/5KZhgRy.png) ![alt text](http://i.imgur.com/xp4gEMX.png)


# Safer

Allows users to see at a glance and give them the peace of mind that their loved ones are safe using labeled geolocation fencing.


## Team

  - Dario Artega
  - Kyle Bradford
  - Raphael Feliciano
  - Tiffany Lin

## Tech Stack

- React-Native
- MySQL
- NodeJS/ExpressJS
- Firebase

## Features

- creating a geofence
- google sign in
- google autocomplete
- creating custom groups
- friend notifications/firebase notificatons/native notifications
- add friends via contact list

# Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)
    1. [Setup](#setup)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Roadamp](#roadmap)
1. [Contributing](#contributing)
1. [Troubleshooting](#troubleshooting)
1. [Credits](#credits)

## Requirements

Globally install these dependencies

- [node > 7.6.0](https://nodejs.org)
- [react-native-cli](https://www.npmjs.com/package/react-native-cli)

## Development


### Setup

To use app, clone down the apk repo.
If working on own dev copy of the safer-server, clone the repo [here](https://github.com/blink672/safer-server) and follow the setup instructions for the server.

If working on local dev server, follow directions at [endpoint.example.js](app/endpoint.example.js) to setup your endpoint.
If you want to connect to production server, set endpoint to https://safer-prod.herokuapp.com/.

Follow the installation instructions [here](https://facebook.github.io/react-native/docs/getting-started.html) to setup React-Native. Be sure to select the proper MobileOS and DevOS.

Folow instructions [here](https://facebook.github.io/react-native/docs/running-on-device.html) to run the app on your device.

Follow only steps 1 - 2 [here](https://github.com/devfd/react-native-google-signin/blob/master/android-guide.md) to setup google-signin.
After step 2, in your "google-services.json" file ,copy and paste the "client_id" under "oauth_client" with the "client_type" of 3 "googleAuthWebClientId" to endpoint.js

### Installing Dependencies

From within the root directory:

```sh
npm install
```

## Development


### Setup

To use app, clone down the apk repo.
If working on own dev copy of the safer-server, clone the repo [here](https://github.com/blink672/safer-server) and follow the setup instructions for the server.

If working on local dev server, follow directions at [endpoint.example.js](app/endpoint.example.js) to setup your endpoint.
If you want to connect to production server, set endpoint to https://safer-prod.herokuapp.com/.

Follow the installation instructions [here](https://facebook.github.io/react-native/docs/getting-started.html) to setup React-Native. Be sure to select the proper MobileOS and DevOS.

Folow instructions [here](https://facebook.github.io/react-native/docs/running-on-device.html) to run the app on your device.

Follow only steps 1 - 2 [here](https://github.com/devfd/react-native-google-signin/blob/master/android-guide.md) to setup google-signin.
After step 2, in your "google-services.json" file ,copy and paste the "client_id" under "oauth_client" with the "client_type" of 3 "googleAuthWebClientId" to endpoint.js

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Roadmap

View the project roadmap [here](https://drive.google.com/open?id=1zswwIFLl2TnROUIvWz_xeiKi4R1QUJyWA1xDT4M54XY)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## Troubleshooting

### If you get something similar to this error, specifically with 'default' not found:
```sh
A problem occurred configuring project ':app'.
> Could not resolve all dependencies for configuration ':app:_debugApk'.
   > Configuration with name 'default' not found.
```
then you should check your android/settings.gradle file for a node_module that is not installed. All react native modules that are listed there should look something like this:
```sh
project(':react-native-fcm').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-fcm/android')
```
follow the path listed as the last argument to new File and make sure it's installed for every project in settings.gradle.

### If you get an error about naming collisions, similar to this:
```sh
Failed to build DependencyGraph: @providesModule naming collision:
  Duplicate module name: react-native-vector-icons
  Paths: /Users/chandlervdw/Repos/Relay/mobile/node_modules/react-native/local-cli/rnpm/core/test/fixtures/files/package.json collides with /Users/chandlervdw/Repos/Relay/mobile/node_modules/react-native/Libraries/Animated/release/package.json

This error is caused by a @providesModule declaration with the same name accross two different files.
Error: @providesModule naming collision:
  Duplicate module name: react-native-vector-icons
  Paths: /Users/chandlervdw/Repos/Relay/mobile/node_modules/react-native/local-cli/rnpm/core/test/fixtures/files/package.json collides with /Users/chandlervdw/Repos/Relay/mobile/node_modules/react-native/Libraries/Animated/release/package.json

This error is caused by a @providesModule declaration with the same name accross two different files.
    at HasteMap._updateHasteMap (/Users/chandlervdw/Repos/Relay/mobile/node_modules/node-haste/lib/DependencyGraph/HasteMap.js:162:15)
    at /Users/chandlervdw/Repos/Relay/mobile/node_modules/node-haste/lib/DependencyGraph/HasteMap.js:140:25
```
Then you need to delete your npm cache inside your home directory:
```sh
rm -rf ~/.npm
```
Then run React Native's packager with the --reset-cache option:
```sh
npm start --reset-cache
```

### Try deleting node_modules and reinstalling:
```sh
rm -rf node_modules && npm install
```
### If you're not using an emulator, make sure wifi is on and you're connected to the same network.

### Turn it off and back on again. Turn off your emulator, unplug your phone, close your terminals, and if that doesn't work, restart your computer.

## Credits

Icons made by 
- [Freepick](http://www.freepik.com) from [Flaticon](http://www.flaticon.com) is licensed by [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/).
- [Bogdan Rosu](http://www.flaticon.com/authors/bogdan-rosu) from [Flaticon](http://www.flaticon.com) is licensed by [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/).
- [Alfredo Hernandez](http://www.flaticon.com/authors/alfredo-hernandez) from [Flaticon](http://www.flaticon.com) is licensed by [Creative Commons BY 3.0](http://creativecommons.org/licenses/by/3.0/).
