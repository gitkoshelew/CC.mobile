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

export type ResultType = {
  id: number;
  questionStatus: 'default' | 'active' | 'right' | 'error' | undefined;
  answer: string;
};

export const TestProcess = () => {
  const {navigate} = useAppNavigate();
  const dispatch = useAppDispatch();
  const resultData = useAppSelector(state => state.resultReducer.result);
  const checkedData = useAppSelector(state => state.checkReducer.options);
  const quizIdData = useAppSelector(state => state.processReducer);
  const [numAnswer, setNumAnswer] = useState<number>(1);
  const [singleAnswer, setSingleAnswer] = useState<string[]>([]);
  const [isActiveRadio, setIsActiveRadio] = useState<number | undefined>(undefined);
  const checkedAnswer = getCheckedAnswers(checkedData);
  const currentTest = quizIdData.questions.filter(e => e.id === numAnswer);
  const onPressRadioHandler = useCallback((label: string, value: number) => {
    setSingleAnswer([label]);
    setIsActiveRadio(value);
  }, []);
  const progressResult = () => {
    switch (currentTest[0].type) {
      case 'single': {
        if (
          singleAnswer.join().toLowerCase() ===
          currentTest[0].content.correctAnswer.join().toLowerCase()
        ) {
          return 'right';
        } else if (
          singleAnswer.length > 0 &&
          singleAnswer.join().toLowerCase() !==
            currentTest[0].content.correctAnswer.join().toLowerCase()
        ) {
          return 'error';
        } else if (singleAnswer.length === 0) {
          return 'default';
        }
        break;
      }
      case 'multi': {
        if (
          [...checkedAnswer].sort().join('').toLowerCase() ===
          [...currentTest[0].content.correctAnswer].sort().join('').toLowerCase()
        ) {
          return 'right';
        } else if (
          checkedAnswer.length > 0 &&
          checkedAnswer.sort().join('').toLowerCase() !==
            [...currentTest[0].content.correctAnswer].sort().join('').toLowerCase()
        ) {
          return 'error';
        } else if (checkedAnswer.length === 0) {
          return 'default';
        }
        break;
      }
      default:
        return 'active';
    }
  };
  const setNextResult = (
    questionStatus: 'default' | 'active' | 'right' | 'error' | undefined,
  ) => {
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
      numAnswer < quizIdData.questions.length &&
      resultData.length < quizIdData.questions.length
    ) {
      setNextResult(progressResult());
      setNumAnswer(numAnswer + 1);
      setSingleAnswer([]);
      setIsActiveRadio(undefined);
    }
    if (
      numAnswer === quizIdData.questions.length &&
      resultData.length < quizIdData.questions.length
    ) {
      navigate(ScreenList.TESTS, {screen: ScreenList.TEST_RESULT});
      setNextResult(progressResult());
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
    if (numAnswer < quizIdData.questions.length) {
      setNumAnswer(numAnswer + 1);
      setSingleAnswer([]);
      if (currentTest[0].type === 'single') {
        setSkipResult();
      } else if (currentTest[0].type === 'multi') {
        setSkipResult();
      }
    } else if (numAnswer === quizIdData.questions.length) {
      navigate(ScreenList.TESTS, {screen: ScreenList.TEST_RESULT});
      setSingleAnswer([]);
      setSkipResult();
    }
  };
  const progressData: ProgressType[] = [...Array(quizIdData.questions.length)].map(
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
        <Timer AllTimeInSeconds={currentTest[0].timer} onClick={onPressNextAnswer} />
      </TimerBox>
      <ViewBlock>
        <ProgressBar data={data} />
      </ViewBlock>
      <MainTestingContainer>
        <ViewFlexRight>
          <CountQuestionBox>
            {numAnswer}/{quizIdData.questions.length}
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
          <AppButton title="Skip" type="secondary" onPress={onPressSkipAnswer} />
          <AppButton title="Next" type="primary" onPress={onPressNextAnswer} />
        </ButtonsBox>
      </MainTestingContainer>
    </ViewContainer>
  );
};
