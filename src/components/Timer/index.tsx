import {useEffect, useState} from 'react';
import {Container, StyledText} from './styles';

export interface IProps {
  timeInMinutes: string;
  timeInSeconds: string;
}

export const Timer = ({timeInMinutes, timeInSeconds}: IProps) => {
  const AllTimeInSeconds: number = +timeInMinutes * 60 + +timeInSeconds;
  const [timePeriod, setTimePeriod] = useState<number>(AllTimeInSeconds);
  //const [isCouting, setIsCouting] = useState<boolean>(true);

  const formatTime = (value: number): string =>
    value.toString().padStart(2, '0');

  const minutes = formatTime(Math.floor(timePeriod / 60));
  const seconds = formatTime(timePeriod - +minutes * 60);

  // const handleStart = useCallback(() => {
  //   setIsCouting(true);
  // }, []);
  //
  // const handleStop = useCallback(() => {
  //   setIsCouting(false);
  // }, []);
  //
  // const handleReset = useCallback(() => {
  //   setIsCouting(false);
  //   setTimePeriod(AllTimeInSeconds);
  // }, [AllTimeInSeconds]);

  useEffect(() => {
    const interval = setInterval(() => {
      //isCouting && setTimePeriod(() => (timePeriod >= 1 ? timePeriod - 1 : 0));
      setTimePeriod(() => (timePeriod >= 1 ? timePeriod - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timePeriod]);

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
