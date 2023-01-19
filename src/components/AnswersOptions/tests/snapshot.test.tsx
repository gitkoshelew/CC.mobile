import {act, fireEvent, render, screen} from '@testing-library/react-native';
import {AnswersOptions} from '@src/components/AnswersOptions/index';
import {AnswersOptionsProps} from '@src/components/AnswersOptions/tests/functional.test';

test('Should render AnswersOptions and selected radio button', () => {
  const answersOptions = render(<AnswersOptions {...AnswersOptionsProps} />);

  expect(answersOptions).toMatchSnapshot();

  act(() => {
    fireEvent.press(screen.getByText('one'));
  });

  expect(answersOptions).toMatchSnapshot();
});
