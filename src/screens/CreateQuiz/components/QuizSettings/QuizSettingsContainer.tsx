import {useAppDispatch, useAppNavigate, useAppSelector} from '@hooks/hooks';

import {ScreenLayout} from '@src/layout/ScreenLayout/index';
import {createQuiz} from '@src/bll/quizReducer';
import {ScreenList} from '@src/navigation/navigation';
import {
  CreateQuizFieldType,
  QuizSettings,
} from '@src/screens/CreateQuiz/components/QuizSettings/QuizSettings';

export type QuestionsSettingsType = {
  valuesFields: CreateQuizFieldType;
  numberOfQuestions: number;
};

export const QuizSettingsContainer = () => {
  const isFetching = useAppSelector(state => state.app.isFetching);
  const dispatch = useAppDispatch();
  const {navigate} = useAppNavigate();

  const handlerQuestionsSettings = async ({
    valuesFields,
    numberOfQuestions,
  }: QuestionsSettingsType) => {
    try {
      const res = await dispatch(createQuiz(valuesFields)).unwrap();
      navigate(ScreenList.CREATE_QUIZ, {
        screen: ScreenList.QUESTIONS_SET,
        params: {
          numberQuestions: numberOfQuestions,
          idNewTest: res.id,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ScreenLayout isFetching={isFetching}>
      <QuizSettings onQuestionsSettings={handlerQuestionsSettings} />
    </ScreenLayout>
  );
};
