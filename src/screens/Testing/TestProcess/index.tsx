import React, {useCallback, useState} from 'react';
import {Timer} from '@src/components/Timer';
import {
  ViewContainer,
  ViewFlexRight,
} from '@src/components/ui/ReadyStyles/Containers';
import {TimerBox, TextBox, ButtonsBox} from './styles';
import {MainTestingContainer} from '@src/components/ui/ReadyStyles/Containers';
import {AnswersOptions} from '@src/components/AnswersOptions';
import {allTestOptionsMoc} from '@src/Mocs/Testing';
import {AppButton} from '@src/components/ui/AppButton';
import {ViewFlexCenter, CountQuestionBox, ViewBlock} from './styles';
import {ProgressBar} from '@src/components/ProgressBar';
import {ProgressType} from '@src/components/ProgressBar/ProgressView';

export const TestProcess = () => {
  const [numAnswer, setNumAnswer] = useState<number>(1);
  const currentTest = allTestOptionsMoc.filter(e => e.id === numAnswer);
  const onPressRadioHandler = useCallback((value: number) => {
    console.log(value); // It's temporary
  }, []);
  const onPressNextAnswer = () => {
    if (numAnswer < allTestOptionsMoc.length) {
      setNumAnswer(numAnswer + 1);
    }
  };
  const onPressSkipAnswer = () => {
    if (numAnswer < allTestOptionsMoc.length) {
      setNumAnswer(numAnswer + 1);
    }
  };
  const progressData: ProgressType[] = [...Array(allTestOptionsMoc.length)].map(
    (_, index) => ({
      id: index + 1,
      questionStatus: 'default',
    }),
  );
  const data: ProgressType[] = progressData.map(e =>
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
  const timeSeconds = (currentTest[0].timer % 60).toString();
  const timeMinutes = Math.floor(currentTest[0].timer / 60).toString();
  const strCorrect = currentTest[0].content.answers.correct.split('//');
  const strWrong = currentTest[0].content.answers.wrong.split('//');
  const arrAnswers = strCorrect.concat(strWrong);
  const randomAnswers = arrAnswers.sort(() => Math.random() - 0.5);
  const answerType = currentTest[0].type;
  const question = currentTest[0].content.question;
  const titleQuestions = currentTest[0].title;

  return (
    <ViewContainer>
      <TimerBox>
        <Timer timeInMinutes={timeMinutes} timeInSeconds={timeSeconds} />
      </TimerBox>
      <ViewBlock>
        <ProgressBar data={data} />
      </ViewBlock>
      <MainTestingContainer>
        <ViewFlexRight>
          <CountQuestionBox>
            {numAnswer}/{allTestOptionsMoc.length}
          </CountQuestionBox>
        </ViewFlexRight>
        <ViewFlexCenter>
          <TextBox>{titleQuestions}</TextBox>
          <TextBox fontWeight={true}>{question}</TextBox>
          <AnswersOptions
            data={randomAnswers}
            onPress={onPressRadioHandler}
            answerType={answerType}
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
