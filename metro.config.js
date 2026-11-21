const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Ignore editor/seed temp files (e.g '12!.tsx') so they never reach Expo Router's route context.
const tempFiles = /[/\\]\.![^/\\]*$/;
const existing = config.resolver.blockList;
config.resolver.blockList = existing
    ? [...(Array.isArray(existing) ? existing : [existing]), tempFiles]
    : [tempFiles];

module.exports = withNativeWind(config, { input: './src/global.css'});