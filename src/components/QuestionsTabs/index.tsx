import {QuestionTab} from './QuestionTab/index';
import {ScrollViewBlock, TabsBlock} from './styles';

export type QuestionsTabsPropsType = {
  activeTab: number;
  numberOfQuestions: number;
  amountFilledQuestion: number;
  onPressCurrentQuestion: (id: number) => void;
};

export const QuestionsTabs = ({
  numberOfQuestions,
  amountFilledQuestion,
  activeTab,
  onPressCurrentQuestion,
}: QuestionsTabsPropsType) => {
  const listQuestionsTabs = [...Array(numberOfQuestions)].map((_, i) => i);

  return (
    <ScrollViewBlock
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={true}
      testID="ScrollViewBlock">
      <TabsBlock flexDirection={listQuestionsTabs.length > 10 ? 'column' : 'row'}>
        {listQuestionsTabs.map(id => (
          <QuestionTab
            id={id}
            key={id}
            onPress={onPressCurrentQuestion}
            isActive={id === activeTab}
            isFilledQuestion={amountFilledQuestion > id}
          />
        ))}
      </TabsBlock>
    </ScrollViewBlock>
  );
};
