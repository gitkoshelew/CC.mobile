import {View} from 'react-native';
import {ButtonAnswerBox, TextBox} from '@src/components/ui/ReadyStyles/Boxes';
import {AddingAnswer} from '@src/components/AddingAnswer';
import {AddButton} from '@src/components/ui/AddButton';
import {Control} from 'react-hook-form';
import {inputsFieldType} from '@src/screens/CreateTest/CreateQuestion';

type CreateAnswerPropsType = {
  control: Control<inputsFieldType>;
  fields: {id: string; option: string}[];
  correctAnswer: string[];
  addNewOptionPressed: () => void;
  deleteOptionPressed: (index: number) => void;
  checkedCorrectOption: (option: string, checked: boolean) => void;
};

export const CreateAnswer = ({
  fields,
  correctAnswer,
  ...props
}: CreateAnswerPropsType) => {
  const disabledDeleteBtn = fields.length <= 2;

  return (
    <View>
      <TextBox>Answer choice</TextBox>
      {fields.map((item, index) => (
        <AddingAnswer
          key={index}
          index={index}
          item={item}
          control={props.control}
          correctAnswer={correctAnswer}
          disabledDeleteBtn={disabledDeleteBtn}
          onPressDelete={props.deleteOptionPressed}
          onPressCorrectAnswer={props.checkedCorrectOption}
        />
      ))}
      <ButtonAnswerBox>
        <AddButton
          onPress={props.addNewOptionPressed}
          disabled={fields.length > 6}
        />
        <TextBox>Add answer</TextBox>
      </ButtonAnswerBox>
    </View>
  );
};
