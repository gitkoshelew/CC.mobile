import {fireEvent, render, screen} from '@testing-library/react-native';
import {AnswersOptions} from '@src/components/AnswersOptions/index';

const onPressMock = jest.fn();
const AnswersOptionsProps = {
  onPress: onPressMock,
  data: ['one', 'two', 'thee'],
};

test('Should render view block, correct operation of btn', async () => {
  render(<AnswersOptions {...AnswersOptionsProps} />);

  fireEvent.press(screen.getByText('two'));
  expect(onPressMock).toHaveBeenCalledTimes(1);
  expect(screen.getByText('one')).toBeVisible();
});
