import {ButtonTab, TitleTab} from './styles';

export type TabPropsType = {
  item: string;
  index: number;
  isActive: boolean;
  setCurrentTab: (value: number) => void;
};

export const Tab = ({item, index, isActive, ...props}: TabPropsType) => {
  const addTabHandler = () => {
    props.setCurrentTab(index);
  };

  return (
    <ButtonTab onPress={addTabHandler} isActive={isActive} testID="button">
      <TitleTab>{item}</TitleTab>
    </ButtonTab>
  );
};
