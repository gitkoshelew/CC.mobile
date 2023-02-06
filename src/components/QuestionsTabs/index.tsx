import {QuestionTab} from './QuestionTab/index';
import {ScrollViewBlock, TabsBlock} from './styles';

export type QuestionsTabsPropsType = {
  onPressCurrentQuestion: (id: number) => void;
  listQuestionsTabs: number[];
  amountFilledQuestion: number;
  isActiveTab: number;
};

export const QuestionsTabs = ({
  listQuestionsTabs,
  amountFilledQuestion,
  isActiveTab,
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
            isActive={id === isActiveTab}
            onPress={props.onPressCurrentQuestion}
            isFilledQuestion={amountFilledQuestion > id}
          />
        ))}
      </TabsBlock>
    </ScrollViewBlock>
  );
};
