import {render} from '@testing-library/react-native';
import {Timer, IProps} from '../index';

const TimerProps = {
  AllTimeInSeconds: 10,
} as IProps;

describe('Timer component functionality', () => {
  it('Timer renders', () => {
    const {getByText} = render(<Timer {...TimerProps} />);
    expect(getByText('10')).toBeTruthy();
  });
});
