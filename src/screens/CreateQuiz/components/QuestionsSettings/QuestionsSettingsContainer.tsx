import React, {useEffect, useState} from 'react';
import {ScreenLayout} from '@src/layout/ScreenLayout/index';
import {QuestionsSettings} from '@src/screens/CreateQuiz/components/QuestionsSettings/QuestionsSettings';
import {useAppDispatch, useAppSelector} from '@hooks/hooks';
import {ScreenList} from '@src/navigation/navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootCreateQuizParamsList} from '@customTypes/navigation-types';
import {questionType} from '@customTypes/quiz-types';
import {getNewQuestion} from '@src/screens/CreateQuiz/utils/getNewQuestion';
import {getQuizQuestions} from '@src/bll/quizReducer';

export const QuestionsSettingsContainer = ({
  route,
}: NativeStackScreenProps<RootCreateQuizParamsList, ScreenList.QUESTIONS_SET>) => {
  const dispatch = useAppDispatch();
  const isFetching = useAppSelector(state => state.app.isFetching);
  const [questions, setQuestions] = useState<questionType[]>([getNewQuestion()]);
  const {numberOfQuestions, idNewQuiz} = route.params;

  useEffect(() => {
    dispatch(getQuizQuestions(idNewQuiz))
      .unwrap()
      .then(res => {
        res.question.length && setQuestions(res.question);
      });
  }, [dispatch, idNewQuiz]);

  return (
    <ScreenLayout isFetching={isFetching}>
      <QuestionsSettings
        idNewQuiz={idNewQuiz}
        questions={questions}
        changeQuestions={setQuestions}
        numberOfQuestions={numberOfQuestions}
      />
    </ScreenLayout>
  );
};
