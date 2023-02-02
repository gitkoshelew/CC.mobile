import {useCallback, useEffect, useState} from 'react';
import {Container, StyledText} from './styles';

export interface IProps {
  AllTimeInSeconds: number;
  onClick: () => void;
}

export const Timer = ({AllTimeInSeconds, onClick}: IProps) => {
  const [timePeriod, setTimePeriod] = useState<number>(AllTimeInSeconds);
  const [isCouting, setIsCouting] = useState<boolean>(false);
  const formatTime = (value: number): string => value.toString().padStart(2, '0');
  const minutes = formatTime(Math.floor(timePeriod / 60));
  const seconds = formatTime(timePeriod - +minutes * 60);
  const handleStart = useCallback(() => {
    setIsCouting(true);
  }, []);

  const handleStop = useCallback(() => {
    setIsCouting(true);
  }, []);

  const handleReset = useCallback(() => {
    setIsCouting(false);
    setTimePeriod(AllTimeInSeconds);
  }, [AllTimeInSeconds]);

  useEffect(() => {
    if (timePeriod === 0) {
      onClick();
      setTimePeriod(AllTimeInSeconds);
    }
  }, [AllTimeInSeconds, onClick, timePeriod]);

  useEffect(() => {
    const interval = setInterval(() => {
      isCouting && setTimePeriod(() => (timePeriod >= 1 ? timePeriod - 1 : 0));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [isCouting, timePeriod]);

  useEffect(() => {
    handleStart();
    setTimePeriod(AllTimeInSeconds);

    return () => {
      handleStop(); // It's temporary
      handleReset(); // It's temporary
    };
  }, [AllTimeInSeconds, handleReset, handleStart, handleStop]);

  return (
    <>
      <Container>
        <StyledText>{minutes}</StyledText>
        <StyledText> : </StyledText>
        <StyledText>{seconds}</StyledText>
      </Container>
    </>
  );
};
