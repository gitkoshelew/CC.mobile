import {QuestionTab} from './QuestionTab/index';
import {ScrollViewBlock, TabsBlock} from './styles';

export type QuestionsTabsPropsType = {
  onPressCurrentQuestion: (idQuestion: number) => void;
  questions: {id: number}[];
  currentQuestionsId: number;
};

type renderTabsType = {
  id: number;
  index: number;
};

export const QuestionsTabs = ({
  questions,
  currentQuestionsId,
  ...props
}: QuestionsTabsPropsType) => {
  const renderItem = ({id, index}: renderTabsType) => {
    return (
      <QuestionTab
        key={id}
        id={id}
        isActive={id === currentQuestionsId}
        index={index}
        onPress={props.onPressCurrentQuestion}
      />
    );
  };
  return (
    <ScrollViewBlock
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={true}
      testID={'ScrollViewBlock'}>
      <TabsBlock flexDirection={questions.length > 10 ? 'column' : 'row'}>
        {questions.map((item, index) =>
          renderItem({
            id: item.id,
            index,
          }),
        )}
      </TabsBlock>
    </ScrollViewBlock>
  );
};
