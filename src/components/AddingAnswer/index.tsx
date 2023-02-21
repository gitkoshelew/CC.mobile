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
import {CreateQuestionFieldType} from '@src/screens/CreateQuiz/components/CreateQuestion/CreateQuestion';

type AddingAnswerPropsType = {
  type: string;
  index: number;
  option: string;
  control: Control<CreateQuestionFieldType>;
  correctAnswer: string[];
  onPressDelete: (index: number) => void;
  isCheckingDuplicate: boolean;
  isDisabledDeleteBtn: boolean;
  onPressCorrectAnswer: (index: number, checked: boolean, textOption: string) => void;
};

export const AddingAnswer = (props: AddingAnswerPropsType) => {
  const {
    type,
    index,
    option,
    control,
    onPressDelete,
    correctAnswer,
    isCheckingDuplicate,
    isDisabledDeleteBtn,
    onPressCorrectAnswer,
  } = props;
  const {t} = useTranslation(['validationFields']);
  const findCorrectInput = correctAnswer.find(el => el === option);
  const [isChecked, setIsChecked] = useState(false);
  const [correctInput, setCorrectInput] = useState(findCorrectInput);
  const isCurrentOptionText = useWatch({
    name: `options.${index}.option`,
    control,
  });

  const onPressCorrectAnswerHandler = useCallback(
    (checked: boolean) => {
      setIsChecked(checked);
      setCorrectInput(isCurrentOptionText);
      onPressCorrectAnswer(index, checked, isCurrentOptionText);
    },
    [index, isCurrentOptionText, onPressCorrectAnswer],
  );
  const onPressDeletePressed = useCallback(() => {
    onPressDelete(index);
  }, [index, onPressDelete]);

  useEffect(() => {
    if (correctInput !== isCurrentOptionText) {
      onPressCorrectAnswer(index, false, correctInput!);
      setIsChecked(false);
      setCorrectInput('');
    }
  }, [index, correctInput, isCurrentOptionText, onPressCorrectAnswer]);

  useEffect(() => {
    setIsChecked(correctAnswer.includes(isCurrentOptionText));
  }, [isCurrentOptionText, correctAnswer, option]);

  const isSingle = type === 'single';
  const isSingleDisabled = (!isChecked && correctAnswer.length) || !isCurrentOptionText;
  const isMultipleDisabled = !isCurrentOptionText;

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
      <View style={styles.picker}>
        <CheckBox
          onPress={onPressCorrectAnswerHandler}
          isChecked={isChecked}
          disabled={Boolean(isSingle ? isSingleDisabled : isMultipleDisabled)}
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
