import {SmallTextBlack} from '../ui/ReadyStyles/Boxes';
import {ViewCenter} from '../ui/ReadyStyles/Containers';
import {AnswerBox, NumberBox, Wrapper} from './styles';

export interface IncorrectAnswer {
  number: number;
  answer: string;
}

interface IProps {
  data: IncorrectAnswer[];
}

export const IncorrectAnswers = ({data}: IProps) => {
  return (
    <ViewCenter>
      {data.map(({number, answer}) => {
        return (
          <Wrapper key={number}>
            <NumberBox>
              <SmallTextBlack>{number}</SmallTextBlack>
            </NumberBox>
            <AnswerBox>
              <SmallTextBlack>{answer.replaceAll(',', ', ')}</SmallTextBlack>
            </AnswerBox>
          </Wrapper>
        );
      })}
    </ViewCenter>
  );
};
