// App entry. Registers dev-log filters before any module (incl. NativeWind's interop) loads,
// then hands off to Expo Router.
//
// Dependency noise (not app code): NativeWind's interop layer touches React Native's deprecated
// ImageBackground export at import time, and React Navigation's tab fade emits legacy Animated updates.
const { LogBox } = require('react-native');

LogBox.ignoreLogs(['ImageBackground is deprecated', 'Sending `onAnimatedValueUpdate` with no listeners registered']);

require('expo-router/entry');
