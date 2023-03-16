import {SwitchSelectors} from '@src/components/SwitchSelectors';
import {StyleSheet, View} from 'react-native';
import {FilterBlock} from './styles';
import React, {useCallback, useContext, useEffect, useRef, useState} from 'react';
import {useAppDispatch, useAppNavigate, useAppSelector} from '@hooks/hooks';
import {ScreenList} from '@src/navigation/navigation';
import {deleteQuiz, getQuizQuestions, getQuizzes, setStateQuizzes} from '@src/bll/quizReducer';
import {TypeSwitchSelect} from '@customTypes/SwitchSelectjrs-types';
import {MyTestCards} from '@src/components/MyTestCards';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import {TestCard} from '@src/components/TestCard';
import {Loader} from '@src/components/ui/Loader';
import {getTopics} from '@src/screens/CreateQuiz/services/services';
import {getQuizResponseType, TopicType} from '@customTypes/quizzesAPI-types';
import {TabsQuestions} from '@src/screens/CreateQuiz/components/ListQuestions/TabsQuestions';
import {clearStateResult} from '@src/bll/resultReducer';
import {DefaultTheme} from 'styled-components';
import {ThemeContext} from 'styled-components/native';
import {CustomModal} from '@src/components/ui/Modal';
import {useTranslation} from 'react-i18next';

export const QuizList = () => {
  const {navigate} = useAppNavigate();
  const dispatch = useAppDispatch();
  const {t} = useTranslation('testList');
  const theme = useContext(ThemeContext);
  const isFetching = useAppSelector(state => state.app.isFetching);
  const isLoggedIn = useAppSelector(state => state.authReducer.isLoggedIn);
  const authorId = useAppSelector(state => state.authReducer.auth.id);
  const isScrollEnabled = useAppSelector(state => state.app.isScrollEnabled);
  const [quizzesData, setQuizzesData] = useState<getQuizResponseType[]>([]);
  const [filteredQuizzes, setFilteredQuizzes] = useState<getQuizResponseType[]>(quizzesData);
  const [topics, setTopics] = useState(['all']);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const quizzes = filteredQuizzes.map(quiz => ({
    id: quiz.id,
    title: quiz.title,
    authorId: quiz.authorId,
    topic: quiz.topic.title,
    questions: quiz.question.length,
  }));
  const myQuizzes = [...filteredQuizzes].filter(quiz => quiz.authorId === authorId);
  const onDismiss = useCallback(
    (id: number) => {
      dispatch(deleteQuiz(id))
        .unwrap()
        .then(() => {
          dispatch(getQuizzes());
        });
    },
    [dispatch],
  );
  const scrollRef = useRef(null);
  const handlerSwitchSelectors = (value: string) => {
    if (value === 'My' && authorId !== undefined) {
      dispatch(setStateQuizzes(myQuizzes));
    } else if (value === 'All') {
      dispatch(getQuizzes());
    }
  };
  const onPressStartTestingHandler = useCallback(
    (id: number, questions: number) => {
      dispatch(getQuizQuestions(id))
        .unwrap()
        .then(() => {
          if (questions === 0) {
            setIsModalVisible(true);
          } else {
            navigate(ScreenList.QUIZZES, {screen: ScreenList.QUIZ_PROCESS});
          }
        });
      dispatch(clearStateResult());
    },
    [dispatch, navigate],
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
    dispatch(getQuizzes())
      .unwrap()
      .then(res => {
        setQuizzesData(res);
      });
  }, [dispatch]);

  useEffect(() => {
    setFilteredQuizzes(quizzesData);
  }, [quizzesData]);

  useEffect(() => {
    dispatch(getTopics())
      .unwrap()
      .then(res => {
        setTopics(['All', ...res.map((el: TopicType) => el.title)]);
      });
  }, [dispatch]);

  return (
    <GestureHandlerRootView>
      {isFetching && <Loader />}
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
          {quizzes.map(test =>
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
};

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
