import {useCallback, useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Container, StyledText} from './styles';

interface IProps {
  time: number;
}

export const Timer = ({time}: IProps) => {
  const [timePeriod, setTimePeriod] = useState<number>(time);
  const [isCouting, setIsCouting] = useState<boolean>(false);

  const formatTime = (value: number): string =>
    value.toString().padStart(2, '0');

  const minutes = formatTime(Math.floor(timePeriod / 60));
  const seconds = formatTime(timePeriod - +minutes * 60);

  const handleStart = useCallback(() => {
    setIsCouting(true);
  }, []);

  const handleStop = useCallback(() => {
    setIsCouting(false);
  }, []);

  const handleReset = useCallback(() => {
    setIsCouting(false);
    setTimePeriod(time);
  }, [time]);

  useEffect(() => {
    const interval = setInterval(() => {
      isCouting && setTimePeriod(() => (timePeriod >= 1 ? timePeriod - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isCouting, timePeriod]);

  return (
    <>
      <Container>
        <StyledText>{minutes}</StyledText>
        <StyledText> : </StyledText>
        <StyledText>{seconds}</StyledText>
      </Container>
      <TouchableOpacity onPress={handleStart}>
        <Text>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleStop}>
        <Text>Stop</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleReset}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </>
  );
};
