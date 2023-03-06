import {fireEvent, render, screen} from '@testing-library/react-native';
import {AnswersOptions} from '@src/components/AnswersOptions';
import {Provider} from 'react-redux';
import store from '@src/bll/store/store';

const onPressMock = jest.fn();
export const AnswersOptionsProps = {
  onPress: onPressMock,
  onPressCheck: onPressMock,
  data: ['one', 'two', 'three'],
  answerType: 'single',
  dataOptions: [
    {label: 'one', value: 0, isChecked: false},
    {label: 'two', value: 1, isChecked: false},
    {label: 'three', value: 2, isChecked: false},
  ],
};

test('Should be displayed elements', () => {
  render(
    <Provider store={store}>
      render(
      <AnswersOptions {...AnswersOptionsProps} />
      );
    </Provider>,
  );

  expect(screen.getByText('one')).toBeVisible();
  expect(screen.getByText('three')).toBeVisible();
});

test('Should call method on press', () => {
  render(
    <Provider store={store}>
      render(
      <AnswersOptions {...AnswersOptionsProps} />
      );
    </Provider>,
  );

  fireEvent.press(screen.getByText('two'));

  expect(onPressMock).toHaveBeenCalledTimes(1);
});
