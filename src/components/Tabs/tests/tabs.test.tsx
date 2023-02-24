import {render, screen} from '@testing-library/react-native';
import {Tabs} from '../index';

test('Should render tabs list', async () => {
  render(<Tabs onPress={() => {}} data={['All', 'One']} />);
  const flatListPropsTabs = screen.getByTestId('FlatList').props;

  expect(flatListPropsTabs.data[0]).toEqual('All');
  expect(flatListPropsTabs.horizontal).toBeTruthy();
  expect(flatListPropsTabs.showsHorizontalScrollIndicator).toBeFalsy();
});
