import {fireEvent, render, screen} from '@testing-library/react-native';
import {QuestionTab, QuestionTabPropsType} from '../index';

const onPressMock = jest.fn();
const createTestProps = {
  questionStatus: true,
  id: 1,
  index: 1,
  isActive: true,
  onPress: onPressMock,
} as QuestionTabPropsType;

describe('Tab component functionality', () => {
  render(<QuestionTab {...createTestProps} />);
  console.log();
  test('Should call method on press', async () => {
    fireEvent.press(screen.getByTestId('textButton'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
