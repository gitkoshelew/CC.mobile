import 'react-native';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
// import App from '../App';

it('renders correctly', () => {
  // renderer.create(<App />);
});

jest.mock('react-native-splash-screen', () => {
  return {
    hide: jest.fn(),
    show: jest.fn(),
  };
});
