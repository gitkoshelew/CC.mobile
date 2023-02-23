import {useAppDispatch, useAppNavigate, useAppSelector} from '@hooks/hooks';
import {ScreenLayout} from '@src/layout/ScreenLayout/index';
import {ScreenList} from '@src/navigation/navigation';
import {
  CreateQuizFieldType,
  QuizSettings,
} from '@src/screens/CreateQuiz/components/QuizSettings/QuizSettings';
import {createQuiz} from '@src/screens/CreateQuiz/services/services';

export const QuizSettingsContainer = () => {
  const isFetching = useAppSelector(state => state.app.isFetching);
  const dispatch = useAppDispatch();
  const {navigate} = useAppNavigate();

  const handlerQuestionsSettings = async (valuesField: CreateQuizFieldType) => {
    const {numberOfQuestions, ...restValues} = valuesField;
    try {
      const res = await dispatch(createQuiz(restValues)).unwrap();
      navigate(ScreenList.CREATE_QUIZ, {
        screen: ScreenList.QUESTIONS_SET,
        params: {
          numberOfQuestions: +numberOfQuestions,
          idNewQuiz: res.id,
          topicId: restValues.topicId,
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
