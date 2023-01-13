import {QuestionTab} from './QuestionTab/index';
import {ScrollViewBlock, TabsBlock} from './styles';
import {useAppSelector} from '../../hooks/hooks';

export type QuestionsTabsPropsType = {
  onPressCurrentQuestion: (idQuestion: number) => void;
};

type renderTabsType = {
  id: number;
  index: number;
  questionStatus: boolean;
};

export const QuestionsTabs = (props: QuestionsTabsPropsType) => {
  const questions = useAppSelector(state => state.testReducer.test.questions);
  const currentQuestion = useAppSelector(
    state => state.testReducer.currentQuestion,
  );

  const renderItem = ({id, questionStatus, index}: renderTabsType) => {
    return (
      <QuestionTab
        key={id}
        id={id}
        questionStatus={questionStatus}
        isActive={id === currentQuestion}
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
            questionStatus: item.content.options.length > 2,
            index,
          }),
        )}
      </TabsBlock>
    </ScrollViewBlock>
  );
};
