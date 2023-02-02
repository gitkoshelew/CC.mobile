import {IncorrectAnswer, IncorrectAnswers} from '@src/components/Incorrectanswers';
import {ViewCenter, ViewFlexCenter} from '../ui/ReadyStyles/Containers';
import {Box, ButtonBox, Container, Group, StyledText} from './styles';
import {AppButton} from '@src/components/ui/AppButton';
import {SmallButton} from '@src/components/ui/SmallButton';
import {CircularResultBar} from '@src/components/CircularResultBar';
import {BlockBoxMarginLeft, SmallTitleBlack} from '../ui/ReadyStyles/Boxes';

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
        <SmallButton type="check" onPress={() => {}} />
        <SmallButton type="edit" onPress={() => {}} />
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
