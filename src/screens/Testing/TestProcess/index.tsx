import React, {useCallback, useState} from 'react';
import {Timer} from '@src/components/Timer';
import {
  ViewContainer,
  ViewFlexRight,
} from '@src/components/ui/ReadyStyles/Containers';
import {TimerBox, TextBox, ButtonsBox} from './styles';
import {MainTestingContainer} from '@src/components/ui/ReadyStyles/Containers';
import {AnswersOptions} from '@src/components/AnswersOptions';
import {AppButton} from '@src/components/ui/AppButton';
import {ViewFlexCenter, CountQuestionBox, ViewBlock} from './styles';
import {ProgressBar} from '@src/components/ProgressBar';
import {ProgressType} from '@src/components/ProgressBar/ProgressView';
import {useAppSelector} from '@hooks/hooks';

export const TestProcess = () => {
  const quizIdMocState = useAppSelector(state => state.processReducer);
  const [numAnswer, setNumAnswer] = useState<number>(1);
  const currentTest = quizIdMocState.questions.filter(e => e.id === numAnswer);
  const onPressRadioHandler = useCallback((value: number) => {
    console.log(value); // It's temporary
  }, []);
  const onPressNextAnswer = () => {
    if (numAnswer < quizIdMocState.questions.length) {
      setNumAnswer(numAnswer + 1);
    }
  };
  const onPressSkipAnswer = () => {
    if (numAnswer < quizIdMocState.questions.length) {
      setNumAnswer(numAnswer + 1);
    }
  };
  const progressData: ProgressType[] = [
    ...Array(quizIdMocState.questions.length),
  ].map((_, index) => ({
    id: index + 1,
    questionStatus: 'default',
  }));
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
  const arrAnswers = currentTest[0].content.options;
  const randomAnswers = [...arrAnswers].sort(() => Math.random() - 0.5);
  const answerType = currentTest[0].type;
  const question = currentTest[0].title;
  const titleQuiz = quizIdMocState.title;

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
            {numAnswer}/{quizIdMocState.questions.length}
          </CountQuestionBox>
        </ViewFlexRight>
        <ViewFlexCenter>
          <TextBox>{titleQuiz}</TextBox>
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
