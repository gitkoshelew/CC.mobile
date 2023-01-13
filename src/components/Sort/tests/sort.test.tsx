import {fireEvent, render} from '@testing-library/react-native';
import {Sort} from '../index';

test('Should render sort list', async () => {
  const {getByText} = render(<Sort />);
  const text = getByText('Sorting');
  fireEvent.changeText(text);
});
