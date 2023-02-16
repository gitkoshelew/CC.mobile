import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {BlockAnswerBox} from '../ui/ReadyStyles/Boxes';
import {CustomTextInput} from '../ui/CustomTextInput';
import {CheckBox} from '../ui/CheckBox';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Color} from '@theme/colors';
import {useCallback, useEffect, useState} from 'react';
import {Control, Controller, useWatch} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {InputsFieldType} from '@src/screens/CreateQuiz/QuestionsSettings/CreateQuestion/index';

type AddingAnswerPropsType = {
  index: number;
  option: string;
  correctAnswer: string[];
  type: string;
  control: Control<InputsFieldType>;
  isDisabledDeleteBtn: boolean;
  onPressDelete: (index: number) => void;
  onPressCorrectAnswer: (index: number, checked: boolean, textOption: string) => void;
  isCheckingDuplicate: boolean;
};

export const AddingAnswer = ({
  index,
  onPressDelete,
  isDisabledDeleteBtn,
  onPressCorrectAnswer,
  isCheckingDuplicate,
  ...props
}: AddingAnswerPropsType) => {
  const isCurrentOptionText = useWatch({
    name: `options.${index}.option`,
    control: props.control,
  });
  const {t} = useTranslation(['validationFields']);
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

  const isDisabledDeleteOption = isDisabledDeleteBtn || isChecked;

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
            required: `${t('option.required')}`,
            maxLength: {
              value: 50,
              message: `${t('validationFields.option.minLength')}`,
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
          style={isDisabledDeleteOption && styles.disabled}
          onPress={onPressDeletePressed}
          disabled={isDisabledDeleteOption}>
          <AntDesign name="minuscircleo" size={30} color={Color.Red} />
        </TouchableOpacity>
      </View>
    </BlockAnswerBox>
  );
};
