import {TimerInputElement} from '../TimerInputElement';
import {Colon, Container} from './styles';

export const TimerInput = () => {
  return (
    <Container>
      <TimerInputElement />
      <Colon>:</Colon>
      <TimerInputElement />
    </Container>
  );
};
