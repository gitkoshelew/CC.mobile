import {Button, TextButton} from './styles';

export type QuestionTabPropsType = {
  isActive: boolean;
  id: number;
  onPress: (id: number) => void;
  setIsActiveTab: (value: number) => void;
};

export const QuestionTab = ({id, isActive, onPress, setIsActiveTab}: QuestionTabPropsType) => {
  const onPressHandler = () => {
    onPress(id);
    setIsActiveTab(id);
  };

  return (
    <Button onPress={onPressHandler} isActive={isActive} questionStatus={false}>
      <TextButton isActive={isActive} testID={'textButton'}>
        {id + 1}
      </TextButton>
    </Button>
  );
};
