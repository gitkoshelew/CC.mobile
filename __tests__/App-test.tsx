import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('@react-navigation/native/lib/commonjs/useLinking.native', () => ({
  default: () => ({getInitialState: {then: jest.fn()}}),
  __esModule: true,
}));
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

it('renders correctly', () => {
  renderer.create(<App />);
});

jest.mock('react-native-splash-screen', () => {
  return {
    hide: jest.fn(),
    show: jest.fn(),
  };
});
