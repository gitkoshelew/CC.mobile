import {Button, TextButton} from './styles';

export type QuestionTabPropsType = {
  questionStatus: boolean;
  isActive: boolean;
  index: number;
  id: number;
  onPress: (idQuestion: number) => void;
};

export const QuestionTab = ({
  id,
  questionStatus,
  isActive,
  index,
  onPress,
}: QuestionTabPropsType) => {
  const onPressHandler = () => {
    onPress(id);
  };

  return (
    <Button
      onPress={onPressHandler}
      isActive={isActive}
      questionStatus={questionStatus}>
      <TextButton isActive={isActive} testID={'textButton'}>
        {index + 1}
      </TextButton>
    </Button>
  );
};
