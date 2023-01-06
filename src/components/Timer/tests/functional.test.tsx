import {render} from '@testing-library/react-native';
import {Timer, IProps} from '../index';

const TimerProps = {
  timeInMinutes: '10',
  timeInSeconds: '00',
} as IProps;

describe('Timer component functionality', () => {
  it('Timer renders', () => {
    const {getByText} = render(<Timer {...TimerProps} />);
    expect(getByText('10')).toBeTruthy();
  });
});
