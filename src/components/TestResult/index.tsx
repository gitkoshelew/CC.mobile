import {CircularResultBar} from '../CircularResultBar';
import {IncorrectAnswer, IncorrectAnswers} from '../Incorrectanswers';
import {AppButton} from '../ui/AppButton';
import {
  BlockBoxMarginLeft,
  BlockBoxMarginRight,
  SmallTitleBlack,
} from '../ui/ReadyStyles/Boxes';
import {ViewCenter, ViewFlexCenter} from '../ui/ReadyStyles/Containers';
import {SmallButton} from '../ui/SmallButton';
import {Box, ButtonBox, Container, Group, StyledText} from './styles';

export const TestResult = () => {
  const incorrectAnswers: IncorrectAnswer[] = [
    {number: 1, answer: 'i am incorrect'},
    {number: 5, answer: 'i am incorrect'},
    {number: 10, answer: 'i am incorrect'},
  ];

  return (
    <Container>
      <ButtonBox>
        <BlockBoxMarginRight>
          <SmallButton type="check" onPress={() => {}} />
        </BlockBoxMarginRight>
        <BlockBoxMarginRight>
          <SmallButton type="edit" onPress={() => {}} />
        </BlockBoxMarginRight>
        <SmallButton type="delete" onPress={() => {}} />
      </ButtonBox>
      <ViewCenter>
        <SmallTitleBlack>Your result</SmallTitleBlack>
        <CircularResultBar result={85} />
        <Group>
          <Box>
            <StyledText>Question</StyledText>
          </Box>
          <StyledText>Incorrect answer</StyledText>
        </Group>
      </ViewCenter>

      <IncorrectAnswers data={incorrectAnswers} />
      <ViewFlexCenter>
        <BlockBoxMarginLeft>
          <AppButton title="Try again" type="primary" />
        </BlockBoxMarginLeft>
        <BlockBoxMarginLeft>
          <AppButton title="Close" type="secondary" />
        </BlockBoxMarginLeft>
      </ViewFlexCenter>
    </Container>
  );
};
