import React from 'react';
import 'react-native';
import App from '../App';
import {render} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

it('renders correctly', () => {
  render(<App />);
});

jest.mock('react-native-splash-screen', () => {
  return {
    hide: jest.fn(),
    show: jest.fn(),
  };
});
