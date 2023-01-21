import {Button, TextButton} from './styles';

export type QuestionTabPropsType = {
  isActive: boolean;
  index: number;
  id: number;
  onPress: (idQuestion: number) => void;
};

export const QuestionTab = ({
  id,
  isActive,
  index,
  onPress,
}: QuestionTabPropsType) => {
  const onPressHandler = () => {
    onPress(id);
  };

  return (
    <Button onPress={onPressHandler} isActive={isActive} questionStatus={false}>
      <TextButton isActive={isActive} testID={'textButton'}>
        {index + 1}
      </TextButton>
    </Button>
  );
};
