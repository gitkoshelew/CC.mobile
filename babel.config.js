module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@theme': './src/theme',
          '@types': './src/types',
          '@hooks': './src/hooks',
          '@src': './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
