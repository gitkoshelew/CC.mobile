import {View} from 'react-native';
import {styles} from './styles';
import {BlockAnswerBox} from '../ui/ReadyStyles/Boxes';
import {CustomTextInput} from '../ui/CustomTextInput';
import {CheckBox} from '../ui/CheckBox';

export const AddingAnswer = () => {
  return (
    <BlockAnswerBox>
      <View style={styles.inputBox}>
        <CustomTextInput onChangeText={() => {}} />
      </View>
      <CheckBox />
    </BlockAnswerBox>
  );
};
