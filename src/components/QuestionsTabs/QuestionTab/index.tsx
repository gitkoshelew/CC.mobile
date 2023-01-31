import {Button, TextButton} from './styles';

export type QuestionTabPropsType = {
  isActive: boolean;
  id: number;
  onPress: (id: number) => void;
  setIsActiveTab: (value: number) => void;
  isFilledQuestion: boolean;
};

export const QuestionTab = ({
  id,
  isActive,
  onPress,
  setIsActiveTab,
  isFilledQuestion,
}: QuestionTabPropsType) => {
  const onPressHandler = () => {
    onPress(id);
    setIsActiveTab(id);
  };

  return (
    <Button onPress={onPressHandler} isActive={isActive} isFilledQuestion={isFilledQuestion}>
      <TextButton isActive={isActive} testID={'textButton'}>
        {id + 1}
      </TextButton>
    </Button>
  );
};
