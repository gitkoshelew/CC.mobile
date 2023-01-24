import {fireEvent, render, screen} from '@testing-library/react-native';
import {AnswersOptions} from '@src/components/AnswersOptions';

const onPressMock = jest.fn();
export const AnswersOptionsProps = {
  onPress: onPressMock,
  data: ['one', 'two', 'three'],
  answerType: 'single',
};

test('Should be displayed elements', () => {
  render(<AnswersOptions {...AnswersOptionsProps} />);

  expect(screen.getByText('one')).toBeVisible();
  expect(screen.getByText('three')).toBeVisible();
});

test('Should call method on press', () => {
  render(<AnswersOptions {...AnswersOptionsProps} />);

  fireEvent.press(screen.getByText('two'));

  expect(onPressMock).toHaveBeenCalledTimes(1);
});
