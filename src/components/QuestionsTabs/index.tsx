import {useState} from 'react';
import {FlatList, View} from 'react-native';
import {QuestionTab, questionType} from './QuestionTab/index';
import {ScrollViewBlock} from './styles';
import {renderItemType} from 'types/common-types';

const data = [...Array(25)].map((_, index) => ({
  id: String(index + 1),
  questionStatus: Boolean(Math.round(Math.random())),
})); // fake data for flat list

export const QuestionsTabs = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const numColumns = Math.ceil(data.length / 2);

  const renderItem = ({item, index}: renderItemType<questionType>) => {
    return (
      <QuestionTab
        item={item}
        isActive={index === currentQuestion}
        index={index}
        onPress={setCurrentQuestion}
      />
    );
  };

  return (
    <View>
      <ScrollViewBlock
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={true}
        testID={'ScrollViewBlock'}>
        <FlatList
          data={data}
          numColumns={numColumns}
          renderItem={renderItem}
          testID={'FlatList'}
        />
      </ScrollViewBlock>
    </View>
  );
};
