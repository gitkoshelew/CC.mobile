import {Tabs} from '../../../components/Tabs';
import {Sort} from '../../../components/Sort';
import {TestCard} from '../../../components/TestCard';
import {BlockBox} from '../../../components/ui/ReadyStyles/Boxes';
import {SwitchSelectors} from '../../../components/SwitchSelectors';
import {FlatList, StyleSheet, View} from 'react-native';
import {FilterBlock} from './styles';
import {useCallback} from 'react';
import {useAppNavigate} from '../../../hooks/hooks';
import {ScreenList} from '../../../navigation/navigation';

const data = [...Array(10)].map((_, index) => ({
  id: String(index + 1),
  name: 'Node.js',
  descriptions: 'General questions about Node.js',
})); // fake data for flat list

export const TestsList = () => {
  const {navigate} = useAppNavigate();

  const onPressStartTestingHandler = useCallback(() => {
    navigate(ScreenList.TESTS, {screen: ScreenList.TEST_PROCESS});
  }, [navigate]);

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
        data={data}
        renderItem={() => (
          <BlockBox>
            <TestCard onPress={onPressStartTestingHandler} />
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
