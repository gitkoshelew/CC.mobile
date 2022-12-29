import React from 'react';
import {TimerInputElement} from '../TimerInputElement';
import {Colon, Container, StyledText} from './styles';

export const TimerInput = () => {
  return (
    <>
      <StyledText>Timer</StyledText>
      <Container>
        <TimerInputElement />
        <Colon>:</Colon>
        <TimerInputElement />
      </Container>
    </>
  );
};
