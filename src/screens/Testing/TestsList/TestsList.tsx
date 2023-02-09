import {Tabs} from '@src/components/Tabs';
import {Sort} from '@src/components/Sort';
import {TestCard} from '@src/components/TestCard';
import {BlockBox} from '@src/components/ui/ReadyStyles/Boxes';
import {SwitchSelectors} from '@src/components/SwitchSelectors';
import {FlatList, StyleSheet, View} from 'react-native';
import {FilterBlock} from './styles';
import {useCallback, useEffect} from 'react';
import {useAppDispatch, useAppNavigate, useAppSelector} from '@hooks/hooks';
import {ScreenList} from '@src/navigation/navigation';
import {getQuizQuestions, getQuizzes} from '@src/bll/quizReducer';

export const TestsList = () => {
  const {navigate} = useAppNavigate();
  const dispatch = useAppDispatch();
  const quizzesData = useAppSelector(state => state.quizReducer.quizzes);
  const quizzes = quizzesData.map(quiz => ({
    id: quiz.id,
    title: quiz.title,
  }));

  const onPressStartTestingHandler = useCallback(
    (id: number) => {
      navigate(ScreenList.TESTS, {screen: ScreenList.TEST_PROCESS});
      dispatch(getQuizQuestions(id));
    },
    [dispatch, navigate],
  );
  useEffect(() => {
    dispatch(getQuizzes());
  }, [dispatch]);
  return (
    <View>
      <Tabs />
      <FilterBlock>
        <View style={styles.container}>
          <SwitchSelectors type="filter" onPress={() => {}} />
        </View>
        <Sort />
      </FilterBlock>
      <FlatList
        data={quizzes}
        renderItem={({item}) => (
          <BlockBox>
            <TestCard onPress={onPressStartTestingHandler} title={item.title} id={item.id} />
          </BlockBox>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
  },
});
