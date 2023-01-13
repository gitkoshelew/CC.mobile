import {FlatList, View} from 'react-native';
import {ProgressView, ProgressType} from './ProgressView';
import {renderItemType} from 'src/customTypes/common-types';

const data: ProgressType[] = [...Array(10)].map((_, index) => ({
  id: String(index + 1),
  questionStatus: 'default',
})); // fake data for flat list
export const ProgressBar = () => {
  const renderItem = ({item}: renderItemType<ProgressType>) => {
    return <ProgressView id={item.id} questionStatus={item.questionStatus} />;
  };

  return (
    <View>
      <FlatList
        data={data}
        numColumns={15}
        renderItem={renderItem}
        testID={'FlatListStatusColor'}
      />
    </View>
  );
};
