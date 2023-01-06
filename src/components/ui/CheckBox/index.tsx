import {View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {styles} from './styles';

export const CheckBox = () => {
  return (
    <View>
      <BouncyCheckbox
        disableText
        fillColor="#4287f5"
        size={30}
        iconImageStyle={styles.iconImageStyle}
        iconStyle={styles.iconStyle}
        onPress={() => {}}
      />
    </View>
  );
};
