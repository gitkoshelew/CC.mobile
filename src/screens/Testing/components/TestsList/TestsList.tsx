import {SwitchSelectors} from '@src/components/SwitchSelectors';
import {StyleSheet, View} from 'react-native';
import {FilterBlock} from './styles';
import {useCallback, useEffect, useRef, useState} from 'react';
import {useAppDispatch, useAppNavigate, useAppSelector} from '@hooks/hooks';
import {ScreenList} from '@src/navigation/navigation';
import {deleteQuiz, getQuizQuestions, getQuizzes, setStateQuizzes} from '@src/bll/quizReducer';
import {TypeSwitchSelect} from '@customTypes/SwitchSelectjrs-types';
import {MyTestCards} from '@src/components/MyTestCards';
import {ScrollView} from 'react-native-gesture-handler';
import {TestCard} from '@src/components/TestCard';
import {Loader} from '@src/components/ui/Loader';
import {getTopics} from '@src/screens/CreateQuiz/services/services';
import {getQuizResponseType, TopicType} from '@customTypes/quizzesAPI-types';
import {TabsQuestions} from '@src/screens/CreateQuiz/components/ListQuestions/TabsQuestions';

export const TestsList = () => {
  const {navigate} = useAppNavigate();
  const dispatch = useAppDispatch();
  const isFetching = useAppSelector(state => state.app.isFetching);
  const isLoggedIn = useAppSelector(state => state.authReducer.isLoggedIn);
  const quizzesData = useAppSelector(state => state.quizReducer.quizzes);
  const authorId = useAppSelector(state => state.authReducer.auth.id);
  const [filteredQuizzes, setFilteredQuizzes] = useState<getQuizResponseType[]>(quizzesData);
  const [topics, setTopics] = useState(['all']);
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
    (id: number) => {
      dispatch(getQuizQuestions(id))
        .unwrap()
        .then(() => navigate(ScreenList.QUIZZES, {screen: ScreenList.QUIZ_PROCESS}));
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
    dispatch(getQuizzes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAuth());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTopics())
      .unwrap()
      .then(res => {
        setTopics(['All', ...res.map((el: TopicType) => el.title)]);
      });
  }, [dispatch]);

  return (
    <>
      {isFetching && <Loader />}
      <View>
        <TabsQuestions topics={topics} onPressTabs={handlerTabs} />
        <FilterBlock>
          <View style={styles.container}>
            <SwitchSelectors
              type={TypeSwitchSelect.FILTER}
              onPress={handlerSwitchSelectors}
              disabled={!isLoggedIn}
            />
          </View>
        </FilterBlock>
        <ScrollView style={styles.scroll}>
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
  },
  scroll: {
    height: '75%',
  },
});
