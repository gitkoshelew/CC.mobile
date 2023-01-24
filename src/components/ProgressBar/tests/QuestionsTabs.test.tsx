import {render, screen} from '@testing-library/react-native';
import {ProgressBar} from '../index';

test('Should render ProgressBar ', async () => {
  render(<ProgressBar />);
  const flatListPropsProgressBar = screen.getByTestId('FlatListStatusColor').props;
  expect(flatListPropsProgressBar.data[0].id).toEqual('1');
});
