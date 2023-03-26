import {SwitchSelectors} from '@src/components/SwitchSelectors';
import {StyleSheet, View} from 'react-native';
import {FilterBlock} from './styles';
import {memo, useCallback, useContext, useEffect, useRef, useState} from 'react';
import {useAppDispatch, useAppSelector} from '@hooks/hooks';
import {deleteQuiz, getQuizzes, setStateQuizzes} from '@src/bll/quizReducer';
import {TypeSwitchSelect} from '@customTypes/SwitchSelectjrs-types';
import {MyTestCards} from '@src/components/MyTestCards';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import {TestCard} from '@src/components/TestCard';
import {getQuizResponseType} from '@customTypes/quizzesAPI-types';
import {TabsQuestions} from '@src/screens/CreateQuiz/components/ListQuestions/TabsQuestions';
import {DefaultTheme} from 'styled-components';
import {ThemeContext} from 'styled-components/native';
import {CustomModal} from '@src/components/ui/Modal';
import {useTranslation} from 'react-i18next';

type QuizListPropsType = {
  topics: string[];
  quizzesData: getQuizResponseType[];
  isModalVisible: boolean;
  setIsModalVisible: (value: boolean) => void;
  onPressStartTesting: (id: number) => void;
};

export const QuizList = memo(
  ({
    topics,
    quizzesData,
    isModalVisible,
    setIsModalVisible,
    onPressStartTesting,
  }: QuizListPropsType) => {
    const dispatch = useAppDispatch();
    const {t} = useTranslation('testList');
    const theme = useContext(ThemeContext);
    const isLoggedIn = useAppSelector(state => state.authReducer.isLoggedIn);
    const authorId = useAppSelector(state => state.authReducer.auth.id);
    const isScrollEnabled = useAppSelector(state => state.app.isScrollEnabled);
    const [filteredQuizzes, setFilteredQuizzes] = useState<getQuizResponseType[]>(quizzesData);
    const quizzes = filteredQuizzes.map(quiz => ({
      id: quiz.id,
      title: quiz.title,
      authorId: quiz.authorId,
      topic: quiz.topic.title,
      questions: quiz.question.length,
    }));
    const myQuizzes = [...filteredQuizzes].filter(quiz => quiz.authorId === authorId);
    const onDismiss = useCallback(
      async (id: number) => {
        await dispatch(deleteQuiz(id));
        await dispatch(getQuizzes());
      },
      [dispatch],
    );
    const scrollRef = useRef(null);

    const handlerSwitchSelectors = useCallback(
      async (value: string) => {
        if (value === 'My' && authorId !== undefined) {
          dispatch(setStateQuizzes(myQuizzes));
        }
        if (value === 'All') {
          await dispatch(getQuizzes());
        }
      },
      [authorId, dispatch, myQuizzes],
    );
    const onPressStartTestingHandler = useCallback(
      (id: number) => {
        onPressStartTesting(id);
      },
      [onPressStartTesting],
    );

    const handlerTabs = useCallback(
      (value: string) => {
        if (value === 'All') {
          setFilteredQuizzes(quizzesData);
          return;
        }
        setFilteredQuizzes(quizzesData.filter(el => el.topic.title === value));
      },
      [quizzesData],
    );

    useEffect(() => {
      setFilteredQuizzes(quizzesData);
    }, [quizzesData]);

    return (
      <GestureHandlerRootView>
        <View style={styles(theme).wrapper}>
          <CustomModal
            isModalVisible={isModalVisible}
            onPress={setIsModalVisible}
            text={t('The quiz contains no questions')}
          />
          <TabsQuestions topics={topics} onPressTabs={handlerTabs} />
          <FilterBlock>
            <View style={styles().container}>
              <SwitchSelectors
                type={TypeSwitchSelect.FILTER}
                onPress={handlerSwitchSelectors}
                disabled={!isLoggedIn}
              />
            </View>
          </FilterBlock>
          <ScrollView style={styles().scroll} scrollEnabled={isScrollEnabled}>
            {quizzes
              .reverse()
              .map(test =>
                test.authorId === authorId ? (
                  <MyTestCards
                    questions={test.questions}
                    topic={test.topic}
                    key={test.id}
                    onPress={onPressStartTestingHandler}
                    title={test.title}
                    id={test.id}
                    onDismiss={onDismiss}
                    simultaneousHandlers={scrollRef}
                  />
                ) : (
                  <TestCard
                    questions={test.questions}
                    topic={test.topic}
                    key={test.id}
                    onPress={onPressStartTestingHandler}
                    title={test.title}
                    id={test.id}
                  />
                ),
              )}
          </ScrollView>
        </View>
      </GestureHandlerRootView>
    );
  },
);

const styles = StyleSheet.create((theme?: DefaultTheme) => ({
  wrapper: {
    backgroundColor: theme?.layout,
    height: '100%',
    paddingBottom: 40,
  },
  container: {
    width: 100,
  },
  scroll: {
    height: '75%',
  },
}));
