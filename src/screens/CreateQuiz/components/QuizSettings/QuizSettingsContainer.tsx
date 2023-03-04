import {useAppDispatch, useAppNavigate, useAppSelector} from '@hooks/hooks';
import {ScreenLayout} from '@src/layout/ScreenLayout/index';
import {ScreenList} from '@src/navigation/navigation';
import {
  CreateQuizFieldType,
  QuizSettings,
} from '@src/screens/CreateQuiz/components/QuizSettings/QuizSettings';
import {createQuiz} from '@src/screens/CreateQuiz/services/services';
import {CustomText} from '@src/components/ui/ReadyStyles/Boxes/index';
import {Color} from '@theme/colors';
import {ViewDynamicFlex} from '@src/components/ui/ReadyStyles/Containers/index';
import {useTranslation} from 'react-i18next';

export const QuizSettingsContainer = () => {
  const isLoggedIn = useAppSelector(state => state.authReducer.isLoggedIn);
  const {t} = useTranslation('validationFields');
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
      {isLoggedIn ? (
        <QuizSettings onQuestionsSettings={handlerQuestionsSettings} />
      ) : (
        <ViewDynamicFlex flex={1} justifyC="center" alignI="center">
          <CustomText fs="22px" color={Color.GrayDark}>
            {t('Need to log in')}
          </CustomText>
        </ViewDynamicFlex>
      )}
    </ScreenLayout>
  );
};
