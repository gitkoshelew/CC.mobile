import {useCallback, useEffect, useState} from 'react';
import {Container, StyledText} from './styles';

export interface IProps {
  allTimeInSeconds: number;
  onClick: () => void;
}

export const Timer = ({allTimeInSeconds, onClick}: IProps) => {
  const [timePeriod, setTimePeriod] = useState<number>(allTimeInSeconds);
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
    setTimePeriod(allTimeInSeconds);
  }, [allTimeInSeconds]);

  useEffect(() => {
    if (timePeriod === 0) {
      onClick();
      setTimePeriod(allTimeInSeconds);
    }
  }, [allTimeInSeconds, onClick, timePeriod]);

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
    setTimePeriod(allTimeInSeconds);

    return () => {
      handleStop(); // It's temporary
      handleReset(); // It's temporary
    };
  }, [allTimeInSeconds, handleReset, handleStart, handleStop]);

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
