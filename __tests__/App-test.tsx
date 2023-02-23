import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import i18n from '../i18n';
import AppWrapper from '../AppWrapper';

// Note: test renderer must be required after react-native.
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper'); // fix warning "Animated useNativeDriver" do not delete
jest.mock('@storybook/react-native', () => ({
  getStorybookUI: jest.fn(),
  configure: jest.fn(),
  clearDecorators: jest.fn(),
  addParameters: jest.fn(),
}));
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

beforeEach(() => {
  i18n.init();
});

it('renders correctly', () => {
  render(<AppWrapper />);
});

jest.mock('react-native-splash-screen', () => {
  return {
    hide: jest.fn(),
    show: jest.fn(),
  };
});
