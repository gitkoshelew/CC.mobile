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
type ITestResult = {
  onClickTry: () => void;
  onClickClose: () => void;
  incorrectAnswers: IncorrectAnswer[];
  result: number;
};

export const TestResult = ({
  onClickTry,
  onClickClose,
  incorrectAnswers,
  result,
}: ITestResult) => {
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
        <CircularResultBar result={result} />
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
          <AppButton title="Try again" type="primary" onPress={onClickTry} />
        </BlockBoxMarginLeft>
        <BlockBoxMarginLeft>
          <AppButton title="Close" type="secondary" onPress={onClickClose} />
        </BlockBoxMarginLeft>
      </ViewFlexCenter>
    </Container>
  );
};
