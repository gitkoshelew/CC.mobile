import {View} from 'react-native';
import {ButtonAnswerBox, TextBox} from '@src/components/ui/ReadyStyles/Boxes';
import {AddingAnswer} from '@src/components/AddingAnswer';
import {AddButton} from '@src/components/ui/AddButton';
import {Control} from 'react-hook-form';
import {TextError} from '@src/components/ui/ReadyStyles/TextError';
import {useTranslation} from 'react-i18next';
import {CreateQuestionFieldType} from '@src/screens/CreateQuiz/components/CreateQuestion/CreateQuestion';

type CreateAnswerPropsType = {
  control: Control<CreateQuestionFieldType>;
  fields: {id: string; option: string}[];
  isCheckingDuplicate: boolean;
  type: string;
  correctAnswer: string[];
  addNewOptionPressed: () => void;
  deleteOptionPressed: (index: number) => void;
  checkedCorrectOption: (index: number, checked: boolean, textOption: string) => void;
};

export const CreateAnswer = ({
  fields,
  isCheckingDuplicate,
  correctAnswer,
  control,
  type,
  addNewOptionPressed,
  deleteOptionPressed,
  checkedCorrectOption,
}: CreateAnswerPropsType) => {
  const isDisabledDeleteBtn = fields.length <= 2;
  const {t} = useTranslation('validationFields');

  return (
    <View>
      <TextBox>Answer choice</TextBox>
      {fields.map((item, index) => (
        <AddingAnswer
          key={item.id}
          option={item.option}
          index={index}
          type={type}
          control={control}
          correctAnswer={correctAnswer}
          isDisabledDeleteBtn={isDisabledDeleteBtn}
          onPressDelete={deleteOptionPressed}
          onPressCorrectAnswer={checkedCorrectOption}
          isCheckingDuplicate={isCheckingDuplicate}
        />
      ))}
      {isCheckingDuplicate && <TextError>{t('option.CheckingForDuplication')}</TextError>}
      <ButtonAnswerBox>
        <AddButton onPress={addNewOptionPressed} disabled={fields.length > 6} />
        <TextBox>Add answer</TextBox>
      </ButtonAnswerBox>
    </View>
  );
};
