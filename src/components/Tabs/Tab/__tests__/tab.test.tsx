import {fireEvent, render, screen} from '@testing-library/react-native';
import {Tab, TabPropsT} from '../index';

const onPressMock = jest.fn();
const createTestProps = (): TabPropsT => ({
  item: 'test title',
  index: 1,
  isActive: true,
  setCurrentTab: onPressMock,
});

describe('Tab component', () => {
  const props = createTestProps();
  render(<Tab {...props} />);

  test('click Tab', async () => {
    fireEvent.press(screen.getByText('test title'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
