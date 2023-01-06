import {fireEvent, render, screen} from '@testing-library/react-native';
import {QuestionTab, QuestionTabPropsType} from '../index';

const onPressMock = jest.fn();
const createTestProps = {
  item: {id: '1', questionStatus: true},
  index: 1,
  isActive: true,
  onPress: onPressMock,
} as QuestionTabPropsType;

describe('Tab component functionality', () => {
  render(<QuestionTab {...createTestProps} />);

  test('Should call method on press', async () => {
    fireEvent.press(screen.getByText('1'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
