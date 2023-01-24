import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {BlockAnswerBox} from '../ui/ReadyStyles/Boxes';
import {CustomTextInput} from '../ui/CustomTextInput';
import {CheckBox} from '../ui/CheckBox';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Color} from '@theme/colors';
import {useCallback} from 'react';
import {Control, Controller, useWatch} from 'react-hook-form';
import {InputsFieldType} from '@src/screens/CreateTest/CreateQuestion/index';

type AddingAnswerPropsType = {
  index: number;
  correctAnswer: string[];
  type: string;
  control: Control<InputsFieldType>;
  disabledDeleteBtn: boolean;
  onPressDelete: (index: number) => void;
  onPressCorrectAnswer: (index: number, checked: boolean) => void;
};

export const AddingAnswer = ({
  index,
  onPressDelete,
  onPressCorrectAnswer,
  disabledDeleteBtn,
  ...props
}: AddingAnswerPropsType) => {
  const isCurrentAnswer = useWatch({
    name: `options.${index}.option`,
    control: props.control,
  });

  const onPressCorrectAnswerHandler = useCallback(
    (checked: boolean) => {
      onPressCorrectAnswer(index, checked);
    },
    [index, onPressCorrectAnswer],
  );

  const onPressDeletePressed = () => {
    onPressDelete(index);
  };

  const isChecked = props.correctAnswer.includes(isCurrentAnswer);

  const disabledCheckbox =
    props.type === 'Single'
      ? (!isChecked && props.correctAnswer.length) || !isCurrentAnswer
      : !isCurrentAnswer;

  const disabledDeleteOption = disabledDeleteBtn || isChecked;

  return (
    <BlockAnswerBox>
      <View style={styles.inputBox}>
        <Controller
          render={({field: {onChange, value, onBlur}, fieldState: {error}}) => (
            <CustomTextInput
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              error={error}
            />
          )}
          rules={{
            required: 'option is required',
            maxLength: {
              value: 50,
              message: 'option should be maximum 50 characters long',
            },
          }}
          name={`options.${index}.option`}
          control={props.control}
        />
      </View>
      <View style={styles.inner}>
        <CheckBox
          onPress={onPressCorrectAnswerHandler}
          isChecked={isChecked}
          disabled={!!disabledCheckbox}
        />
        <TouchableOpacity
          style={disabledDeleteOption && styles.disabled}
          onPress={onPressDeletePressed}
          disabled={disabledDeleteOption}>
          <AntDesign name="minuscircleo" size={30} color={Color.Red} />
        </TouchableOpacity>
      </View>
    </BlockAnswerBox>
  );
};
