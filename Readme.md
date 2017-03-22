# React Native Appshow

The slides / app I made to accompany my talk on [React Native](https://facebook.github.io/react-native/)

![Pan responder example](cat-pan-responder.gif)

## Running
- Follow the instructions at [https://facebook.github.io/react-native/docs/getting-started.html] for your platform of choice
- `npm install`
- `npm run ios` or `npm run android`

### Note
I haven't attempted to run this on anything but an iPhone 7, it builds for android so should run fine.

Devices with lower resolution screens are likely to have content which runs off the visible screen but is non-scrollable. This can be remedied by changing the relevant slides to use `ScrollView` rather than `View`
