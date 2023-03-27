import {FlatList, View} from 'react-native';
import {ProgressView, ProgressType} from './ProgressView';
import {renderItemType} from 'src/customTypes/common-types';

type IProgressBar = {
  data: ProgressType[];
};
export const ProgressBar = ({data}: IProgressBar) => {
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
