import React, {useCallback} from 'react';
import {Timer} from '@src/components/Timer/index';
import {
  ViewContainer,
  ViewFlexRight,
} from '@src/components/ui/ReadyStyles/Containers/index';
import {TimerBox, TextBox, ButtonsBox} from './styles';
import {MainTestingContainer} from '../../../components/ui/ReadyStyles/Containers';
import {AnswersOptions} from '@src/components/AnswersOptions/index';
import {TestOptionsMoc} from '@src/Mocs/Testing';
import {AppButton} from '@src/components/ui/AppButton/index';
import {ViewFlexCenter, CountQuestionBox, ViewBlock} from './styles';
import {ProgressBar} from '@src/components/ProgressBar/index';

export const TestProcess = () => {
  const onPressRadioHandler = useCallback((value: number) => {
    console.log(value); // It's temporary
  }, []);

  return (
    <ViewContainer>
      <TimerBox>
        <Timer timeInMinutes="60" timeInSeconds="60" />
      </TimerBox>
      <ViewBlock>
        <ProgressBar />
      </ViewBlock>
      <MainTestingContainer>
        <ViewFlexRight>
          <CountQuestionBox>5/10</CountQuestionBox>
        </ViewFlexRight>
        <ViewFlexCenter>
          <TextBox>"Node.js" question</TextBox>
          <TextBox fontWeight={true}>
            Which core module in Node can you use for testing?
          </TextBox>
          <AnswersOptions data={TestOptionsMoc} onPress={onPressRadioHandler} />
        </ViewFlexCenter>
        <ButtonsBox>
          <AppButton title="Skip" type="secondary" onPress={() => {}} />
          <AppButton title="Next" type="primary" onPress={() => {}} />
        </ButtonsBox>
      </MainTestingContainer>
    </ViewContainer>
  );
};
