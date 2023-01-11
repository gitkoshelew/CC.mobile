import {render, screen} from '@testing-library/react-native';
import {QuestionsTabs} from '../index';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

const testReducerMok = () => ({
  test: {
    questions: [],
  },
});

const initialState = {
  reducer: {
    testReducer: testReducerMok,
  },
};
const mockStore = configureStore(initialState);
let store = mockStore;

test('Should render view block', async () => {
  render(
    <Provider store={store}>
      <QuestionsTabs onPressCurrentQuestion={() => {}} />
    </Provider>,
  );
  const scrollViewBlock = screen.getByTestId('ScrollViewBlock').props;

  expect(scrollViewBlock.horizontal).toBeTruthy();
  expect(scrollViewBlock.showsVerticalScrollIndicator).toBeFalsy();
  expect(scrollViewBlock.showsHorizontalScrollIndicator).toBeTruthy();
});
