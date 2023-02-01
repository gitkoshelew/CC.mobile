import {QuestionTab} from './QuestionTab/index';
import {ScrollViewBlock, TabsBlock} from './styles';
import {useState} from 'react';

export type QuestionsTabsPropsType = {
  onPressCurrentQuestion: (id: number) => void;
  listQuestionsTabs: number[];
  amountFilledQuestion: number;
};

type renderTabsType = {
  id: number;
};

export const QuestionsTabs = ({
  listQuestionsTabs,
  amountFilledQuestion,
  ...props
}: QuestionsTabsPropsType) => {
  const [isActiveTab, setIsActiveTab] = useState(0);

  const onPressedActiveTab = (value: number) => {
    value <= amountFilledQuestion && setIsActiveTab(value);
  };

  const renderItem = ({id}: renderTabsType) => {
    return (
      <QuestionTab
        key={id}
        id={id}
        isActive={id === isActiveTab}
        onPress={props.onPressCurrentQuestion}
        setIsActiveTab={onPressedActiveTab}
        isFilledQuestion={amountFilledQuestion > id}
      />
    );
  };

  return (
    <ScrollViewBlock
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={true}
      testID="ScrollViewBlock">
      <TabsBlock flexDirection={listQuestionsTabs.length > 10 ? 'column' : 'row'}>
        {listQuestionsTabs.map(item =>
          renderItem({
            id: item,
          }),
        )}
      </TabsBlock>
    </ScrollViewBlock>
  );
};
