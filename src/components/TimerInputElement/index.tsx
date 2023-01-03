import {useState} from 'react';
import {StyledInput} from './styles';

export const TimerInputElement = () => {
  const [time, setTime] = useState<string>('00');

  const onTimeChangeHandler = (value: string): void => {
    +value > 59 ? setTime('59') : setTime(value);
  };

  return (
    <StyledInput
      onChangeText={value => onTimeChangeHandler(value)}
      value={time}
      keyboardType={'numeric'}
      maxLength={2}
    />
  );
};
