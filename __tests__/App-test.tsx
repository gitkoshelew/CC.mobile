import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// import {render} from '@testing-library/react-native';

it('renders correctly', () => {
  renderer.create(<App />);
});

jest.mock('react-native-splash-screen', () => {
  return {
    hide: jest.fn(),
    show: jest.fn(),
  };
});

// describe(App, () => {
//   it('should render React Native image', function () {
//     const {getByTestId} = render(<App />);
//     const image = getByTestId('image');
//     expect(image).toBeTruthy();
//   });
// });
