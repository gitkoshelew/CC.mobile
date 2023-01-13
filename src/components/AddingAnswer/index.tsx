import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {BlockAnswerBox} from '../ui/ReadyStyles/Boxes';
import {CustomTextInput} from '../ui/CustomTextInput';
import {CheckBox} from '../ui/CheckBox';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Color} from 'theme/colors';
import {useCallback} from 'react';
import {correctAnswerType} from 'types/test-types';

type AddingAnswerPropsType = {
  item: string;
  index: number;
  correctAnswer: correctAnswerType;
  disabledDeleteBtn: boolean;
  onPressDelete: (index: number) => void;
  onPressCorrectAnswer: (
    index: number,
    answer: string,
    checked: boolean,
  ) => void;
};

export const AddingAnswer = ({
  item,
  index,
  onPressDelete,
  onPressCorrectAnswer,
  disabledDeleteBtn,
  ...props
}: AddingAnswerPropsType) => {
  const onPressDeleteHandler = () => {
    onPressDelete(index);
  };

  const onPressCorrectAnswerHandler = useCallback(
    (checked: boolean) => {
      onPressCorrectAnswer(index, item, checked);
    },
    [index, item, onPressCorrectAnswer],
  );

  const isCorrectAnswer = Array.isArray(props.correctAnswer)
    ? props.correctAnswer.includes(item)
    : props.correctAnswer === item;

  return (
    <BlockAnswerBox>
      <View style={styles.inputBox}>
        <CustomTextInput onChangeText={() => {}} value={item} />
      </View>
      <CheckBox
        onPress={onPressCorrectAnswerHandler}
        checked={isCorrectAnswer}
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
