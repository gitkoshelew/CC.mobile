import {FlatList} from 'react-native';
import {ProgressView, ProgressType} from './ProgressView';
import {renderItemType} from '@customTypes/common-types';
import {ViewBlock} from './styles';

const data: ProgressType[] = [...Array(25)].map((_, index) => ({
  id: String(index + 1),
  questionStatus: 'default',
})); // fake data for flat list
export const ProgressBar = () => {
  const renderItem = ({item}: renderItemType<ProgressType>) => {
    return <ProgressView id={item.id} questionStatus={item.questionStatus} />;
  };

  return (
    <ViewBlock>
      <FlatList
        data={data}
        numColumns={15}
        renderItem={renderItem}
        testID={'FlatListStatusColor'}
      />
    </ViewBlock>
  );
};
