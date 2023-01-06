import {Button, TextButton} from './styles';

export type questionType = {
  id: string;
  questionStatus: boolean;
};

export type QuestionTabPropsType = {
  item: questionType;
  isActive: boolean;
  index: number;
  onPress: (value: number) => void;
};

export const QuestionTab = ({
  item,
  isActive,
  index,
  onPress,
}: QuestionTabPropsType) => {
  const onPressHandler = () => {
    onPress(index);
  };

  return (
    <Button
      onPress={onPressHandler}
      isActive={isActive}
      questionStatus={item.questionStatus}>
      <TextButton isActive={isActive}>{item.id}</TextButton>
    </Button>
  );
};
