import {Tabs} from '@src/components/Tabs';
import {Sort} from '@src/components/Sort';
import {SwitchSelectors} from '@src/components/SwitchSelectors';
import {StyleSheet, View} from 'react-native';
import {FilterBlock} from './styles';
import {useCallback, useEffect, useRef} from 'react';
import {useAppDispatch, useAppNavigate, useAppSelector} from '@hooks/hooks';
import {ScreenList} from '@src/navigation/navigation';
import {deleteQuiz, getQuizQuestions, getQuizzes, setStateQuizzes} from '@src/bll/quizReducer';
import {TypeSwitchSelect} from '@customTypes/SwitchSelectjrs-types';
import {MyTestCards} from '@src/components/MyTestCards';
import {ScrollView} from 'react-native-gesture-handler';
import {TestCard} from '@src/components/TestCard';
import {getAuth} from '@src/bll/authReducer';
import {Loader} from '@src/components/ui/Loader';

export const TestsList = () => {
  const {navigate} = useAppNavigate();
  const dispatch = useAppDispatch();
  const isFetching = useAppSelector(state => state.app.isFetching);
  const quizzesData = useAppSelector(state => state.quizReducer.quizzes);
  const authorId = useAppSelector(state => state.authReducer.auth.id);
  const quizzes = quizzesData.map(quiz => ({
    id: quiz.id,
    title: quiz.title,
    authorId: quiz.authorId,
  }));
  const myQuizzes = [...quizzesData].filter(quiz => quiz.authorId === authorId);
  const onDismiss = useCallback(
    (id: number) => {
      dispatch(deleteQuiz(id));
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
        .then(() => navigate(ScreenList.TESTS, {screen: ScreenList.TEST_PROCESS}));
    },
    [dispatch, navigate],
  );
  useEffect(() => {
    dispatch(getQuizzes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAuth());
  }, [dispatch]);

  return (
    <>
      {isFetching && <Loader />}
      <View>
        <Tabs />
        <FilterBlock>
          <View style={styles.container}>
            <SwitchSelectors type={TypeSwitchSelect.FILTER} onPress={handlerSwitchSelectors} />
          </View>
          <Sort />
        </FilterBlock>
        <ScrollView style={styles.scroll}>
          {quizzes.map(test => {
            if (authorId !== undefined) {
              if (test.authorId === authorId) {
                return (
                  <MyTestCards
                    key={test.id}
                    onPress={onPressStartTestingHandler}
                    title={test.title}
                    id={test.id}
                    onDismiss={onDismiss}
                    simultaneousHandlers={scrollRef}
                  />
                );
              } else {
                return (
                  <TestCard
                    key={test.id}
                    onPress={onPressStartTestingHandler}
                    title={test.title}
                    id={test.id}
                  />
                );
              }
            } else {
              return (
                <TestCard
                  key={test.id}
                  onPress={onPressStartTestingHandler}
                  title={test.title}
                  id={test.id}
                />
              );
            }
          })}
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
