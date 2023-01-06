import {render, screen} from '@testing-library/react-native';
import {QuestionsTabs} from '../index';

test('Should render questions tabs list', async () => {
  render(<QuestionsTabs />);
  const flatListPropsTabs = screen.getByTestId('FlatList').props;
  expect(flatListPropsTabs.data[0].id).toEqual('1');
});

test('Should render view block', async () => {
  render(<QuestionsTabs />);
  const scrollViewBlock = screen.getByTestId('ScrollViewBlock').props;

  expect(scrollViewBlock.horizontal).toBeTruthy();
  expect(scrollViewBlock.showsVerticalScrollIndicator).toBeFalsy();
  expect(scrollViewBlock.showsHorizontalScrollIndicator).toBeTruthy();
});
