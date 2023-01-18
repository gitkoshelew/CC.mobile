import {fireEvent, render} from '@testing-library/react-native';
import {TestCard} from '../index';

test('Should render testCard list', async () => {
  const {getByText, toJSON} = render(<TestCard onPress={() => {}} />);
  const button = getByText('Start');
  fireEvent.press(button);
  expect(toJSON()).toMatchSnapshot();
});