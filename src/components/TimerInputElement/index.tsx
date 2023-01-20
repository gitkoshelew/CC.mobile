import {useState} from 'react';
import {StyledInput} from './styles';

type TimerInputElementPropsType = {
  onChange: (value: string) => void;
};

export const TimerInputElement = ({onChange}: TimerInputElementPropsType) => {
  const [time, setTime] = useState<string>('01');
  const timeLimit = 59;

  const onTimeChangeHandler = (value: string): void => {
    if (+value > timeLimit) {
      setTime('59');
      onChange('59');
      return;
    }
    setTime(value);
    onChange(value);
  };

  return (
    <StyledInput
      onChangeText={value => onTimeChangeHandler(value)}
      value={time}
      keyboardType={'numeric'}
      maxLength={2}
      placeholder="00"
    />
  );
};
