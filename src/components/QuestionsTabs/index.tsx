import {QuestionTab} from './QuestionTab/index';
import {ScrollViewBlock, TabsBlock} from './styles';
import {questionType} from '@customTypes/test-types';

export type QuestionsTabsPropsType = {
  onPressCurrentQuestion: (id: number) => void;
  questions: questionType[];
  currentQuestionsId: number;
};

type renderTabsType = {
  id: number;
};

export const QuestionsTabs = ({
  questions,
  currentQuestionsId,
  ...props
}: QuestionsTabsPropsType) => {
  const renderItem = ({id}: renderTabsType) => {
    return (
      <QuestionTab
        key={id}
        id={id}
        isActive={id === currentQuestionsId}
        onPress={props.onPressCurrentQuestion}
      />
    );
  };

  return (
    <ScrollViewBlock
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={true}
      testID="ScrollViewBlock">
      <TabsBlock flexDirection={questions.length > 10 ? 'column' : 'row'}>
        {questions.map(item =>
          renderItem({
            id: item.id,
          }),
        )}
      </TabsBlock>
    </ScrollViewBlock>
  );
};
