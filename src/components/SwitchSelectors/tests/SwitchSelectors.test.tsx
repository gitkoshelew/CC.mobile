import {fireEvent, render} from '@testing-library/react-native';
import {SwitchSelectors} from '../index';

test('Should render switchSelectors list', async () => {
  const {getByText} = render(<SwitchSelectors type="level" />);
  const text = getByText('Easy');
  fireEvent.changeText(text);
});
