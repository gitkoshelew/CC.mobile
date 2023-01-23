import {Button, TextButton} from './styles';

export type QuestionTabPropsType = {
  isActive: boolean;
  id: number;
  onPress: (id: number) => void;
};

export const QuestionTab = ({id, isActive, onPress}: QuestionTabPropsType) => {
  const onPressHandler = () => {
    onPress(id);
  };

  return (
    <Button onPress={onPressHandler} isActive={isActive} questionStatus={false}>
      <TextButton isActive={isActive} testID={'textButton'}>
        {id}
      </TextButton>
    </Button>
  );
};
