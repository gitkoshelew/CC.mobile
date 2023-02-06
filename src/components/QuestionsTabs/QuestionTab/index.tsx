import {Button, TextButton} from './styles';

export type QuestionTabPropsType = {
  isActive: boolean;
  id: number;
  onPress: (id: number) => void;
  isFilledQuestion: boolean;
};

export const QuestionTab = ({
  id,
  isActive,
  onPress,
  isFilledQuestion,
}: QuestionTabPropsType) => {
  const onPressHandler = () => {
    onPress(id);
  };

  return (
    <Button onPress={onPressHandler} isActive={isActive} isFilledQuestion={isFilledQuestion}>
      <TextButton isActive={isActive} testID={'textButton'}>
        {id + 1}
      </TextButton>
    </Button>
  );
};
