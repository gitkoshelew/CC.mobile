import {QuestionTab} from './QuestionTab/index';
import {ScrollViewBlock, TabsBlock} from './styles';

export type QuestionsTabsPropsType = {
  onPressCurrentQuestion: (id: number) => void;
  listQuestionsTabs: number[];
  amountFilledQuestion: number;
  activeTab: number;
};

export const QuestionsTabs = ({
  listQuestionsTabs,
  amountFilledQuestion,
  activeTab,
  ...props
}: QuestionsTabsPropsType) => {
  return (
    <ScrollViewBlock
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={true}
      testID="ScrollViewBlock">
      <TabsBlock flexDirection={listQuestionsTabs.length > 10 ? 'column' : 'row'}>
        {listQuestionsTabs.map(id => (
          <QuestionTab
            key={id}
            id={id}
            isActive={id === activeTab}
            onPress={props.onPressCurrentQuestion}
            isFilledQuestion={amountFilledQuestion > id}
          />
        ))}
      </TabsBlock>
    </ScrollViewBlock>
  );
};
