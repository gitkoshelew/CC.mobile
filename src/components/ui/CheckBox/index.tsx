import {View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {styles} from '@src/components/ui/CheckBox/styles';

type CheckBoxPropsType = {
  onPress: (value: boolean) => void;
  isChecked: boolean;
  disabled?: boolean;
};

export const CheckBox = ({onPress, isChecked, disabled}: CheckBoxPropsType) => {
  const onPressHandler = (checked: boolean) => {
    onPress(checked);
  };

  return (
    <View>
      <BouncyCheckbox
        disableText
        fillColor="#4287f5"
        size={30}
        style={disabled && styles.disabled}
        isChecked={isChecked}
        onPress={onPressHandler}
        disabled={disabled}
      />
    </View>
  );
};
