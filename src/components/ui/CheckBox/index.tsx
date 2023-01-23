import {View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {styles} from '@src/components/ui/CheckBox/styles';

type CheckBoxPropsType = {
  onPress: (value: boolean) => void;
  checked: boolean;
  disabled?: boolean;
};

export const CheckBox = ({onPress, checked, disabled}: CheckBoxPropsType) => {
  const onPressHandler = (isChecked: boolean) => {
    onPress(isChecked);
  };
  return (
    <View>
      <BouncyCheckbox
        disableText
        fillColor="#4287f5"
        size={30}
        style={disabled && styles.disabled}
        isChecked={checked}
        onPress={onPressHandler}
        disabled={disabled}
      />
    </View>
  );
};
