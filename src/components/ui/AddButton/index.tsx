import {TouchableOpacity, View} from 'react-native';
import {IAddButtonProps} from 'src/customTypes/AddButton-types';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Color} from '@theme/colors';

export const AddButton = ({onPress, disabled, ...props}: IAddButtonProps) => {
  return (
    <View style={styles.box}>
      <TouchableOpacity
        {...props}
        onPress={onPress}
        style={disabled && styles.disabled}
        disabled={disabled}>
        <Ionicons name="add-circle" color={Color.GrayMedium} size={40} />
      </TouchableOpacity>
    </View>
  );
};
