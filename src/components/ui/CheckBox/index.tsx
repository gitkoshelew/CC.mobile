import {View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {styles} from '@src/components/ui/CheckBox/styles';
import {Color} from '@theme/colors';

type CheckBoxPropsType = {
  onPress: (value: boolean) => void;
  isChecked: boolean;
  disabled?: boolean;
  fillColor?: Color;
};

export const CheckBox = ({onPress, isChecked, disabled, fillColor}: CheckBoxPropsType) => {
  const onPressHandler = (checked: boolean) => {
    onPress(checked);
  };

  return (
    <View>
      <BouncyCheckbox
        disableText
        fillColor={fillColor ? fillColor : Color.Blue}
        size={30}
        style={disabled && styles.disabled}
        isChecked={isChecked}
        disableBuiltInState
        onPress={() => onPressHandler(!isChecked)}
        disabled={disabled}
      />
    </View>
  );
};
