import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Timer} from '@src/components/Timer';
import {ViewContainer, ViewFlexRight} from '@src/components/ui/ReadyStyles/Containers';
import {TimerBox, TextBox, ButtonsBox} from './styles';
import {MainTestingContainer} from '@src/components/ui/ReadyStyles/Containers';
import {AnswersOptions} from '@src/components/AnswersOptions';
import {AppButton} from '@src/components/ui/AppButton';
import {ViewFlexCenter, CountQuestionBox, ViewBlock} from './styles';
import {ProgressBar} from '@src/components/ProgressBar';
import {ProgressType} from '@src/components/ProgressBar/ProgressView';
import {useAppDispatch, useAppNavigate, useAppSelector} from '@hooks/hooks';
import {ScreenList} from '@src/navigation/navigation';
import {clearStateResult, setStateResult} from '@src/bll/resultReducer';
import {getCheckedAnswers} from '@src/utils/getCheckedAnswers';
import {progressResult} from '@src/utils/progressResult';
import {TypeAppButton} from '@customTypes/AppButtun-types';

export type ResultType = {
  id: number;
  questionStatus: 'default' | 'active' | 'right' | 'error';
  answer: string;
};

export const TestProcess = () => {
  const {navigate} = useAppNavigate();
  const dispatch = useAppDispatch();
  const resultData = useAppSelector(state => state.resultReducer.result);
  const checkedData = useAppSelector(state => state.checkReducer.options);
  const quizIdData = useAppSelector(state => state.processReducer.quiz);
  const [numAnswer, setNumAnswer] = useState<number>(1);
  const [singleAnswer, setSingleAnswer] = useState<string[]>([]);
  const [isActiveRadio, setIsActiveRadio] = useState<number | undefined>(undefined);
  const checkedAnswer = getCheckedAnswers(checkedData);
  const currentTest = [...quizIdData.question].filter((e, index) => index + 1 === numAnswer);
  const onPressRadioHandler = useCallback((label: string, value: number) => {
    setSingleAnswer([label]);
    setIsActiveRadio(value);
  }, []);
  const answer = currentTest[0].type === 'single' ? singleAnswer : checkedAnswer;
  const correctAnswer = currentTest[0].content.correctAnswer;
  const type = currentTest[0].type;
  const setNextResult = (questionStatus: ResultType['questionStatus'] = 'default') => {
    dispatch(
      setStateResult({
        id: currentTest[0].id,
        questionStatus,
        answer: currentTest[0].type === 'single' ? singleAnswer.join() : checkedAnswer.join(),
      }),
    );
  };
  const onPressNextAnswer = () => {
    if (
      numAnswer < quizIdData.question.length &&
      resultData.length < quizIdData.question.length
    ) {
      setNextResult(progressResult({type, answer, correctAnswer}));
      setNumAnswer(numAnswer + 1);
      setSingleAnswer([]);
      setIsActiveRadio(undefined);
    }
    if (
      numAnswer === quizIdData.question.length &&
      resultData.length < quizIdData.question.length
    ) {
      navigate(ScreenList.QUIZZES, {screen: ScreenList.QUIZ_RESULT});
      setNextResult(progressResult({type, answer, correctAnswer}));
      setSingleAnswer([]);
    }
  };
  const setSkipResult = () => {
    dispatch(
      setStateResult({
        id: currentTest[0].id,
        questionStatus: 'default',
        answer: currentTest[0].type === 'single' ? singleAnswer.join() : checkedAnswer.join(),
      }),
    );
  };
  const onPressSkipAnswer = () => {
    if (numAnswer < quizIdData.question.length) {
      setNumAnswer(numAnswer + 1);
      setSingleAnswer([]);
      if (currentTest[0].type === 'single') {
      } else if (currentTest[0].type === 'multi') {
      }
    } else if (numAnswer === quizIdData.question.length) {
      navigate(ScreenList.QUIZZES, {screen: ScreenList.QUIZ_RESULT});
      setSingleAnswer([]);
    }
    setSkipResult();
  };
  const progressData: ProgressType[] = [...Array(quizIdData.question.length)].map(
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
  const arrAnswers = currentTest[0].content.options;
  const randomAnswers = useMemo(
    () => [...arrAnswers].sort(() => Math.random() - 0.5),
    [arrAnswers],
  );
  const answerType = currentTest[0].type;
  const question = currentTest[0].title;
  const titleQuiz = quizIdData.title;
  useEffect(() => {
    dispatch(clearStateResult());
  }, [dispatch]);
  return (
    <ViewContainer>
      <TimerBox>
        <Timer allTimeInSeconds={currentTest[0].timer} onClick={onPressNextAnswer} />
      </TimerBox>
      <ViewBlock>
        <ProgressBar data={data} />
      </ViewBlock>
      <MainTestingContainer>
        <ViewFlexRight>
          <CountQuestionBox>
            {numAnswer}/{quizIdData.question.length}
          </CountQuestionBox>
        </ViewFlexRight>
        <ViewFlexCenter>
          <TextBox>{titleQuiz}</TextBox>
          <TextBox fontWeight={true}>{question}</TextBox>
          <AnswersOptions
            data={randomAnswers}
            onPress={onPressRadioHandler}
            answerType={answerType}
            selected={isActiveRadio}
          />
        </ViewFlexCenter>
        <ButtonsBox>
          <AppButton title="Skip" type={TypeAppButton.PRIMARY} onPress={onPressSkipAnswer} />
          <AppButton title="Next" type={TypeAppButton.PRIMARY} onPress={onPressNextAnswer} />
        </ButtonsBox>
      </MainTestingContainer>
    </ViewContainer>
  );
};
