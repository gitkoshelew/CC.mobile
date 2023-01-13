import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {BlockAnswerBox} from '../ui/ReadyStyles/Boxes';
import {CustomTextInput} from '../ui/CustomTextInput';
import {CheckBox} from '../ui/CheckBox';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Color} from '@theme/colors';
import {answerType} from '@types/test-types';
import {useCallback} from 'react';

type AddingAnswerPropsType = {
  item: answerType;
  disabledDeleteBtn: boolean;
  onPressDelete: (id: number) => void;
  onPressCorrectAnswer: (id: number, checked: boolean) => void;
};

export const AddingAnswer = ({
  item,
  onPressDelete,
  onPressCorrectAnswer,
  disabledDeleteBtn,
}: AddingAnswerPropsType) => {
  const onPressDeleteHandler = () => {
    onPressDelete(item.id);
  };
  const onPressCorrectAnswerHandler = useCallback(
    (checked: boolean) => {
      onPressCorrectAnswer(item.id, checked);
    },
    [item.id, onPressCorrectAnswer],
  );

  return (
    <BlockAnswerBox>
      <View style={styles.inputBox}>
        <CustomTextInput onChangeText={() => {}} value={item.answer} />
      </View>
      <CheckBox
        onPress={onPressCorrectAnswerHandler}
        checked={item.isCorrect}
      />
      <TouchableOpacity
        style={disabledDeleteBtn && styles.disabled}
        onPress={onPressDeleteHandler}
        disabled={disabledDeleteBtn}>
        <AntDesign name="minuscircleo" size={30} color={Color.Red} />
      </TouchableOpacity>
    </BlockAnswerBox>
  );
};
