import {QuestionTab} from './QuestionTab/index';
import {ScrollViewBlock, TabsBlock} from './styles';

export type QuestionsTabsPropsType = {
  activeTab: number;
  numberOfQuestions: number;
  amountFilledQuestion: number;
  onPressCurrentQuestion: (id: number) => void;
};

export const QuestionsTabs = (props: QuestionsTabsPropsType) => {
  const {numberOfQuestions, amountFilledQuestion, activeTab, onPressCurrentQuestion} = props;
  const listQuestionsTabs = [...Array(numberOfQuestions)].map((el, i) => i);

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
