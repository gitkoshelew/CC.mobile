import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {BlockAnswerBox} from '../ui/ReadyStyles/Boxes';
import {CustomTextInput} from '../ui/CustomTextInput';
import {CheckBox} from '../ui/CheckBox';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Color} from '@theme/colors';
import {useCallback, useEffect, useState} from 'react';
import {Control, Controller, useWatch} from 'react-hook-form';
import {InputsFieldType} from '@src/screens/CreateTest/CreateQuestion';

type AddingAnswerPropsType = {
  index: number;
  option: string;
  correctAnswer: string[];
  type: string;
  control: Control<InputsFieldType>;
  disabledDeleteBtn: boolean;
  onPressDelete: (index: number) => void;
  onPressCorrectAnswer: (index: number, checked: boolean, textOption: string) => void;
  isCheckingDuplicate: boolean;
};

export const AddingAnswer = ({
  index,
  onPressDelete,
  disabledDeleteBtn,
  onPressCorrectAnswer,
  isCheckingDuplicate,
  ...props
}: AddingAnswerPropsType) => {
  const isCurrentOptionText = useWatch({
    name: `options.${index}.option`,
    control: props.control,
  });
  const [isChecked, setIsChecked] = useState(false);
  const [inputWhichCorrect, setInputWhichCorrect] = useState(props.option);
  const onPressCorrectAnswerHandler = useCallback(
    (checked: boolean) => {
      setIsChecked(checked);
      setInputWhichCorrect(isCurrentOptionText);
      onPressCorrectAnswer(index, checked, isCurrentOptionText);
    },
    [index, isCurrentOptionText, onPressCorrectAnswer],
  );
  const onPressDeletePressed = useCallback(() => {
    onPressDelete(index);
  }, [index, onPressDelete]);

  useEffect(() => {
    if (inputWhichCorrect !== isCurrentOptionText) {
      onPressCorrectAnswer(index, false, inputWhichCorrect);
      setIsChecked(false);
      setInputWhichCorrect('');
    }
  }, [index, inputWhichCorrect, isCurrentOptionText, onPressCorrectAnswer]);

  useEffect(() => {
    setIsChecked(props.correctAnswer.includes(isCurrentOptionText));
  }, [isCurrentOptionText, props.correctAnswer, props.option]);

  const disabledCheckbox =
    props.type === 'single'
      ? (!isChecked && props.correctAnswer.length) || !isCurrentOptionText
      : !isCurrentOptionText;

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
          fillColor={isCheckingDuplicate ? Color.Red : Color.GreenLight}
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
