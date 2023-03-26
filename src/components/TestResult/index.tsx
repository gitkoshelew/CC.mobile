import {IncorrectAnswer, IncorrectAnswers} from '@src/components/IncorrectAnswers';
import {ViewCenter, ViewFlexCenter} from '../ui/ReadyStyles/Containers';
import {Box, ButtonBox, Container, Group, StyledText} from './styles';
import {AppButton} from '@src/components/ui/AppButton';
import {SmallButton} from '@src/components/ui/SmallButton';
import {CircularResultBar} from '@src/components/CircularResultBar';
import {
  BlockBoxMarginLeft,
  BlockDynamicMargin,
  SmallTitleBlack,
} from '../ui/ReadyStyles/Boxes';
import {TypeAppButton} from '@customTypes/AppButtun-types';
import {useTranslation} from 'react-i18next';
import {SmallButtonType} from '@customTypes/SmallButton-types';

type ITestResult = {
  onClickTry: () => void;
  onClickClose: () => void;
  incorrectAnswers: IncorrectAnswer[];
  result: number;
};

const controlButtons: SmallButtonType[] = ['check', 'edit', 'delete'];

export const TestResult = ({
  onClickTry,
  onClickClose,
  incorrectAnswers,
  result,
}: ITestResult) => {
  const {t} = useTranslation('testResult');

  return (
    <Container>
      <ButtonBox>
        {controlButtons.map(el => (
          <BlockDynamicMargin m="0 15px 0 0">
            <SmallButton type={el} onPress={() => {}} />
          </BlockDynamicMargin>
        ))}
      </ButtonBox>
      <ViewCenter>
        <SmallTitleBlack>{t('Your result')}</SmallTitleBlack>
        <CircularResultBar result={result} />
        <Group>
          <Box>
            <StyledText>{t('Question')}</StyledText>
          </Box>
          <StyledText>{t('Incorrect answer')}</StyledText>
        </Group>
      </ViewCenter>

      <IncorrectAnswers data={incorrectAnswers} />
      <ViewFlexCenter>
        <BlockBoxMarginLeft>
          <AppButton
            title={t('Try again')}
            type={TypeAppButton.PRIMARY}
            onPress={onClickTry}
          />
        </BlockBoxMarginLeft>
        <BlockBoxMarginLeft>
          <AppButton
            title={t('Close')}
            type={TypeAppButton.SECONDARY}
            onPress={onClickClose}
          />
        </BlockBoxMarginLeft>
      </ViewFlexCenter>
    </Container>
  );
};
