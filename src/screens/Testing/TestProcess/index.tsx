import React, {useCallback, useEffect, useMemo, useState} from 'react';
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
import {useAppDispatch, useAppNavigate, useAppSelector} from '@hooks/hooks';
import {ScreenList} from '@src/navigation/navigation';
import {clearStateResult, setStateResult} from '@src/bll/resultReducer';

export type ResultType = {
  id: number;
  questionStatus: 'default' | 'active' | 'right' | 'error';
  answer: string;
};

export const TestProcess = () => {
  const {navigate} = useAppNavigate();
  const dispatch = useAppDispatch();
  const resultData = useAppSelector(state => state.resultReducer.result);
  const checkData = useAppSelector(state => state.checkReducer.options);
  const quizIdMocState = useAppSelector(state => state.processReducer);
  const [numAnswer, setNumAnswer] = useState<number>(1);
  const [singleAnswer, setSingleAnswer] = useState<string[]>([]);
  const [isActiveRadio, setIsActiveRadio] = useState<number | undefined>(
    undefined,
  );
  const checkDataAnswers = checkData.filter(e => e.check);
  const checkAnswer = checkDataAnswers.map(e => e.label);
  const currentTest = quizIdMocState.questions.filter(e => e.id === numAnswer);
  const onPressRadioHandler = useCallback((label: string, value: number) => {
    setSingleAnswer([label]);
    setIsActiveRadio(value);
  }, []);
  const progressResult = () => {
    if (currentTest[0].type === 'single') {
      if (
        singleAnswer.join().toLowerCase() ===
        currentTest[0].content.correctAnswer.join().toLowerCase()
      ) {
        dispatch(
          setStateResult({
            id: currentTest[0].id,
            questionStatus: 'right',
            answer: singleAnswer.join(),
          }),
        );
      }
      if (
        singleAnswer.length > 0 &&
        singleAnswer.join().toLowerCase() !==
          currentTest[0].content.correctAnswer.join().toLowerCase()
      ) {
        dispatch(
          setStateResult({
            id: currentTest[0].id,
            questionStatus: 'error',
            answer: singleAnswer.join(),
          }),
        );
      }
      if (singleAnswer.length === 0) {
        dispatch(
          setStateResult({
            id: currentTest[0].id,
            questionStatus: 'default',
            answer: singleAnswer.join(),
          }),
        );
      }
    }
    if (currentTest[0].type === 'multi') {
      if (
        checkAnswer.sort().join('').toLowerCase() ===
        [...currentTest[0].content.correctAnswer].sort().join('').toLowerCase()
      ) {
        dispatch(
          setStateResult({
            id: currentTest[0].id,
            questionStatus: 'right',
            answer: checkAnswer.join(),
          }),
        );
        console.log(true);
      }
      if (
        checkAnswer.length > 0 &&
        checkAnswer.sort().join('').toLowerCase() !==
          [...currentTest[0].content.correctAnswer]
            .sort()
            .join('')
            .toLowerCase()
      ) {
        dispatch(
          setStateResult({
            id: currentTest[0].id,
            questionStatus: 'error',
            answer: checkAnswer.join(),
          }),
        );
        console.log(false);
      }
      if (checkAnswer.length === 0) {
        dispatch(
          setStateResult({
            id: currentTest[0].id,
            questionStatus: 'default',
            answer: checkAnswer.join(),
          }),
        );
      }
    }
  };
  const onPressNextAnswer = () => {
    if (
      numAnswer < quizIdMocState.questions.length &&
      resultData.length < quizIdMocState.questions.length
    ) {
      progressResult();
      setNumAnswer(numAnswer + 1);
      setSingleAnswer([]);
      setIsActiveRadio(undefined);
    }
    if (
      numAnswer === quizIdMocState.questions.length &&
      resultData.length < quizIdMocState.questions.length
    ) {
      navigate(ScreenList.TESTS, {screen: ScreenList.TEST_RESULT});
      progressResult();
      setSingleAnswer([]);
    }
  };
  const onPressSkipAnswer = () => {
    if (numAnswer < quizIdMocState.questions.length) {
      setNumAnswer(numAnswer + 1);
      setSingleAnswer([]);
      if (currentTest[0].type === 'single') {
        dispatch(
          setStateResult({
            id: currentTest[0].id,
            questionStatus: 'default',
            answer: singleAnswer.join(),
          }),
        );
      }
      if (currentTest[0].type === 'multi') {
        dispatch(
          setStateResult({
            id: currentTest[0].id,
            questionStatus: 'default',
            answer: checkAnswer.join(),
          }),
        );
      }
    }

    if (numAnswer === quizIdMocState.questions.length) {
      navigate(ScreenList.TESTS, {screen: ScreenList.TEST_RESULT});
      setSingleAnswer([]);

      dispatch(
        setStateResult({
          id: currentTest[0].id,
          questionStatus: 'default',
          answer: singleAnswer.join(),
        }),
      );
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
  const randomAnswers = useMemo(
    () => [...arrAnswers].sort(() => Math.random() - 0.5),
    [arrAnswers],
  );
  const answerType = currentTest[0].type;
  const question = currentTest[0].title;
  const titleQuiz = quizIdMocState.title;
  useEffect(() => {
    dispatch(clearStateResult());
  }, [dispatch]);
  return (
    <ViewContainer>
      <TimerBox>
        <Timer
          timeInMinutes={timeMinutes}
          timeInSeconds={timeSeconds}
          onClick={onPressNextAnswer}
        />
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
            selected={isActiveRadio}
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
