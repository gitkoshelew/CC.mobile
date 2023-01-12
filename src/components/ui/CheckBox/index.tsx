import {View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type CheckBoxPropsType = {
  onPress: (value: boolean) => void;
  checked: boolean;
};

export const CheckBox = ({onPress, checked}: CheckBoxPropsType) => {
  const onPressHandler = (isChecked: boolean) => {
    onPress(isChecked);
  };
  return (
    <View>
      <BouncyCheckbox
        disableText
        fillColor="#4287f5"
        size={30}
        isChecked={checked}
        onPress={onPressHandler}
      />
    </View>
  );
};
