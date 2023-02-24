import {fireEvent, render, screen} from '@testing-library/react-native';
import {Tab, TabPropsType} from '../index';

const onPressMock = jest.fn();
const createTestProps = {
  item: 'test title',
  index: 1,
  isActive: true,
  onPress: onPressMock,
  setCurrentTab: onPressMock,
} as TabPropsType;

describe('Tab component functionality', () => {
  render(<Tab {...createTestProps} />);

  test('Should call method on press', async () => {
    fireEvent.press(screen.getByText('test title'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
