import React, {useCallback} from 'react';
import {Timer} from '../../../components/Timer/index';
import {
  ContentContainer,
  ViewContainer,
  ViewFlexRight,
} from '../../../components/ui/ReadyStyles/Containers/index';
import {TimerBox, TextBox, ButtonsBox} from './styles';
import {MainTestingContainer} from '../../../components/ui/ReadyStyles/Containers';
import {AnswersOptions} from '../../../components/AnswersOptions/index';
import {TestOptionsMoc} from '../../../Mocs/Testing';
import {AppButton} from '../../../components/ui/AppButton/index';
import {ViewFlexCenter, CountQuestionBox} from './styles';
import {DraggableBottomSheet} from '../../../components/DraggableBottomSheet';

export const TestProcess = () => {
  const onPressRadioHandler = useCallback((value: number) => {
    console.log(value); // It's temporary
  }, []);

  return (
    <>
      <ViewContainer>
        <ContentContainer>
          <TimerBox>
            <Timer timeInMinutes="60" timeInSeconds="60" />
          </TimerBox>
          <MainTestingContainer>
            <ViewFlexRight>
              <CountQuestionBox>5/10</CountQuestionBox>
            </ViewFlexRight>
            <ViewFlexCenter>
              <TextBox>"Node.js" question</TextBox>
              <TextBox fontWeight={true}>
                Which core module in Node can you use for testing?
              </TextBox>
              <AnswersOptions
                data={TestOptionsMoc}
                onPress={onPressRadioHandler}
              />
            </ViewFlexCenter>
            <ButtonsBox>
              <AppButton title="Skip" type="secondary" onPress={() => {}} />
              <AppButton title="Next" type="primary" onPress={() => {}} />
            </ButtonsBox>
          </MainTestingContainer>
        </ContentContainer>
      </ViewContainer>
      <DraggableBottomSheet />
    </>
  );
};
