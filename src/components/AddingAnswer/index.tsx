import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {BlockAnswerBox} from '../ui/ReadyStyles/Boxes';
import {CustomTextInput} from '../ui/CustomTextInput';
import {CheckBox} from '../ui/CheckBox';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Color} from '@theme/colors';
import {useCallback} from 'react';
import {Control, Controller} from 'react-hook-form';
import {inputsFieldType} from '@src/screens/CreateTest/CreateQuestion';

type AddingAnswerPropsType = {
  item: {
    id: string;
    option: string;
  };
  index: number;
  control: Control<inputsFieldType>;
  correctAnswer: string[];
  disabledDeleteBtn: boolean;
  onPressDelete: (index: number) => void;
  onPressCorrectAnswer: (answer: string, checked: boolean) => void;
};

export const AddingAnswer = ({
  item,
  index,
  onPressDelete,
  onPressCorrectAnswer,
  disabledDeleteBtn,
  ...props
}: AddingAnswerPropsType) => {
  const onPressCorrectAnswerHandler = useCallback(
    (checked: boolean) => {
      onPressCorrectAnswer(item.option, checked);
    },
    [item.option, onPressCorrectAnswer],
  );

  const onPressDeletePressed = () => {
    onPressDelete(index);
  };

  const isCorrectAnswer = props.correctAnswer.includes(item.option);

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
          checked={isCorrectAnswer}
        />
        <TouchableOpacity
          style={disabledDeleteBtn && styles.disabled}
          onPress={onPressDeletePressed}
          disabled={disabledDeleteBtn}>
          <AntDesign name="minuscircleo" size={30} color={Color.Red} />
        </TouchableOpacity>
      </View>
    </BlockAnswerBox>
  );
};
