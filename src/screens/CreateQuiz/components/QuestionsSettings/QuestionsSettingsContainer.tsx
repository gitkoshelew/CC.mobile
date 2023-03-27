import {useCallback, useEffect, useState} from 'react';
import {ScreenLayout} from '@src/layout/ScreenLayout';
import {QuestionsSettings} from '@src/screens/CreateQuiz/components/QuestionsSettings/QuestionsSettings';
import {useAppNavigate, useAppSelector} from '@hooks/hooks';
import {ScreenList} from '@src/navigation/navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootCreateQuizParamsList} from '@customTypes/navigation-types';
import {Difficulty, questionType, TypeOptions} from '@customTypes/quiz-types';
import {useFocusEffect} from '@react-navigation/native';

export const initialQuestion = {
  id: 1,
  title: '',
  description: '',
  content: {
    options: ['', ''],
    correctAnswer: [],
  },
  difficulty: Difficulty.Easy,
  timer: 0,
  type: TypeOptions.single,
  topicId: 0,
  moderationId: null,
};

export const QuestionsSettingsContainer = ({
  route,
}: NativeStackScreenProps<RootCreateQuizParamsList, ScreenList.QUESTIONS_SET>) => {
  const {numberOfQuestions, idNewQuiz, topicId} = route.params;
  const navigate = useAppNavigate();
  const isFetching = useAppSelector(state => state.app.isFetching);
  const isLoggedIn = useAppSelector(state => state.authReducer.isLoggedIn);
  const [questions, setQuestions] = useState<questionType[]>([{...initialQuestion, topicId}]);

  useFocusEffect(
    useCallback(() => {
      return () => {
        navigate.goBack();
      };
    }, [navigate]),
  );

  useEffect(() => {
    if (!isLoggedIn) {
      navigate.reset({
        index: 0,
        routes: [{name: ScreenList.HOME}],
      });
    }
  }, [isLoggedIn, navigate]);

  return (
    <ScreenLayout isFetching={isFetching}>
      <QuestionsSettings
        topicId={topicId}
        idNewQuiz={idNewQuiz}
        questions={questions}
        changeQuestions={setQuestions}
        numberOfQuestions={numberOfQuestions}
      />
    </ScreenLayout>
  );
};
