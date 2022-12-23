import {View} from 'react-native';
import {ButtonTab, TitleTab} from './styles';

type TabPropsT = {
  item: string;
  index: number;
  isActive: boolean;
  setCurrentTab: (value: number) => void;
};

export const Tab = ({item, index, isActive, ...props}: TabPropsT) => {
  const addTabHandler = () => {
    props.setCurrentTab(index);
  };

  return (
    <ButtonTab onPress={addTabHandler} isActive={isActive}>
      <View>
        <TitleTab>{item}</TitleTab>
      </View>
    </ButtonTab>
  );
};
