import {Tabs} from '../../components/Tabs/index';
import {Sort} from '../../components/Sort/index';
import {TestCard} from '../../components/TestCard/index';
import {BlockBox} from '../../components/ui/ReadyStyles/Boxes/index';
import {SwitchSelectors} from '../../components/SwitchSelector/index';
import {FlatList, StyleSheet, View} from 'react-native';
import {FilterBlock} from './styles';

const data = [...Array(10)].map((_, index) => ({
  id: String(index + 1),
  name: 'Node.js',
  descriptions: 'General questions about Node.js',
})); // fake data for flat list

export const TestsList = () => {
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
            <TestCard onPress={() => {}} />
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
