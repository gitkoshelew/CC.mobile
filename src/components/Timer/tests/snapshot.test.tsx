import {render} from '@testing-library/react-native';
import {Timer, IProps} from '../index';

const TimerProps = {
  timeInMinutes: '10',
  timeInSeconds: '00',
} as IProps;

it('timer snapshot', (): void => {
  const timer = render(<Timer {...TimerProps} />);

  expect(timer).toMatchSnapshot();
});
