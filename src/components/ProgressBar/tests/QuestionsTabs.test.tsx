import {render, screen} from '@testing-library/react-native';
import {ProgressBar} from '../index';
import {ProgressType} from '@src/components/ProgressBar/ProgressView';
const createTestProps = [{id: 1, questionStatus: 'default'} as ProgressType];
test('Should render ProgressBar ', async () => {
  render(<ProgressBar data={createTestProps} />);
  const flatListPropsProgressBar = screen.getByTestId('FlatListStatusColor').props;
  expect(flatListPropsProgressBar.data[0].id).toEqual(1);
});
