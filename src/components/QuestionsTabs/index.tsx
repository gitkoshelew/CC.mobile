import {useState} from 'react';
import {QuestionTab, questionType} from './QuestionTab/index';
import {ScrollViewBlock, TabsBlock} from './styles';
import {renderItemType} from 'types/common-types';

const data = [...Array(15)].map((_, index) => ({
  id: String(index + 1),
  questionStatus: Boolean(Math.round(Math.random())),
})); // fake data for flat list

export const QuestionsTabs = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const renderItem = ({item, index}: renderItemType<questionType>) => {
    return (
      <QuestionTab
        key={index}
        item={item}
        isActive={index === currentQuestion}
        index={index}
        onPress={setCurrentQuestion}
      />
    );
  };

  return (
    <ScrollViewBlock
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={true}
      testID={'ScrollViewBlock'}>
      <TabsBlock flexDirection={data.length > 10 ? 'column' : 'row'}>
        {data.map((item, index) => renderItem({item, index}))}
      </TabsBlock>
    </ScrollViewBlock>
  );
};
