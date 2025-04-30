module.exports = {
  presets: ['module:@react-native/babel-preset'],
  // presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    ['module:react-native-dotenv', {
      moduleName: '@env', // Allows importing as @env
      path: '.env',
      allowUndefined: false,
    }],
  ],
};
