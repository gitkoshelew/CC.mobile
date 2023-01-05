import {Text, TouchableOpacity, View} from 'react-native';
import {IAddButtonProps} from 'types/AddButton-types';
import {styles} from './styles';

export const AddButton = ({onPress, ...props}: IAddButtonProps) => {
  return (
    <View style={styles.box}>
      <TouchableOpacity {...props} onPress={onPress} style={styles.container}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
