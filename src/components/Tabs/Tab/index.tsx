import {ButtonTab, TitleTab} from './styles';

export type TabPropsType = {
  item: string;
  index: number;
  onPress: (value: string) => void;
  isActive: boolean;
  setCurrentTab: (value: number) => void;
};

export const Tab = ({item, index, isActive, onPress, setCurrentTab}: TabPropsType) => {
  const addTabHandler = () => {
    setCurrentTab(index);
    onPress(item);
  };

  return (
    <ButtonTab onPress={addTabHandler} isActive={isActive} testID="button">
      <TitleTab>{item}</TitleTab>
    </ButtonTab>
  );
};
