import React, {useCallback, useState} from 'react';
import {Timer} from '@src/components/Timer';
import {
  ViewContainer,
  ViewFlexRight,
} from '@src/components/ui/ReadyStyles/Containers';
import {TimerBox, TextBox, ButtonsBox} from './styles';
import {MainTestingContainer} from '@src/components/ui/ReadyStyles/Containers';
import {AnswersOptions} from '@src/components/AnswersOptions';
import {AllTestOptionsMoc} from '@src/Mocs/Testing';
import {AppButton} from '@src/components/ui/AppButton';
import {ViewFlexCenter, CountQuestionBox, ViewBlock} from './styles';
import {ProgressBar} from '@src/components/ProgressBar';
import {ProgressType} from '@src/components/ProgressBar/ProgressView';

export const TestProcess = () => {
  const onPressRadioHandler = useCallback((value: number) => {
    console.log(value); // It's temporary
  }, []);
  const [numAnswer, setNumAnswer] = useState<number>(1);
  const CurrentTest = AllTestOptionsMoc.filter(e => e.id === numAnswer);
  const onPressNextAnswer = () => {
    if (numAnswer < AllTestOptionsMoc.length) {
      setNumAnswer(numAnswer + 1);
    }
  };
  const onPressSkipAnswer = () => {
    if (numAnswer < AllTestOptionsMoc.length) {
      setNumAnswer(numAnswer + 1);
    }
  };
  const ProgressData: ProgressType[] = [...Array(AllTestOptionsMoc.length)].map(
    (_, index) => ({
      id: index + 1,
      questionStatus: 'default',
    }),
  );
  const data: ProgressType[] = ProgressData.map(e =>
    numAnswer >= e.id
      ? {
          id: e.id,
          questionStatus: 'active',
        }
      : {
          id: e.id,
          questionStatus: 'default',
        },
  );
  const timeSeconds = CurrentTest[0].timer % 60;
  const timeMinutes = CurrentTest[0].timer / 60;
  const strCorrect = CurrentTest[0].content.answers.correct.split('//');
  const strWrong = CurrentTest[0].content.answers.wrong.split('//');
  const arrAnswers = strCorrect.concat(strWrong);
  const randomAnswers = arrAnswers.sort(() => Math.random() - 0.5);

  return (
    <ViewContainer>
      <TimerBox>
        <Timer
          timeInMinutes={Math.floor(timeMinutes).toString()}
          timeInSeconds={timeSeconds.toString()}
        />
      </TimerBox>
      <ViewBlock>
        <ProgressBar data={data} />
      </ViewBlock>
      <MainTestingContainer>
        <ViewFlexRight>
          <CountQuestionBox>
            {numAnswer}/{AllTestOptionsMoc.length}
          </CountQuestionBox>
        </ViewFlexRight>
        <ViewFlexCenter>
          <TextBox>{CurrentTest[0].title}</TextBox>
          <TextBox fontWeight={true}>{CurrentTest[0].content.question}</TextBox>
          <AnswersOptions
            data={randomAnswers}
            onPress={onPressRadioHandler}
            ansswerType={CurrentTest[0].type}
          />
        </ViewFlexCenter>
        <ButtonsBox>
          <AppButton
            title="Skip"
            type="secondary"
            onPress={onPressSkipAnswer}
          />
          <AppButton title="Next" type="primary" onPress={onPressNextAnswer} />
        </ButtonsBox>
      </MainTestingContainer>
    </ViewContainer>
  );
};
