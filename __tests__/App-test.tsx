import React from 'react';
import 'react-native';
import App from '../App';
import {render} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.

jest.mock('@storybook/react-native', () => ({
  getStorybookUI: jest.fn(),
  configure: jest.fn(),
  clearDecorators: jest.fn(),
  addParameters: jest.fn(),
}));
jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);

it('renders correctly', () => {
  render(<App />);
});

jest.mock('react-native-splash-screen', () => {
  return {
    hide: jest.fn(),
    show: jest.fn(),
  };
});
