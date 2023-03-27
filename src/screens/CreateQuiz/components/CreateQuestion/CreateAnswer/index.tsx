import {View} from 'react-native';
import {ButtonAnswerBox, CustomText, TextBox} from '@src/components/ui/ReadyStyles/Boxes';
import {AddingAnswer} from '@src/components/AddingAnswer';
import {Control} from 'react-hook-form';
import {TextError} from '@src/components/ui/ReadyStyles/TextError';
import {useTranslation} from 'react-i18next';
import {CreateQuestionFieldType} from '@src/screens/CreateQuiz/components/CreateQuestion/CreateQuestion';
import {RoundButtonWrapper} from '@customTypes/RoundButtonWrapper';
import {Color} from '@theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

type CreateAnswerPropsType = {
  type: string;
  fields: {id: string; option: string}[];
  control: Control<CreateQuestionFieldType>;
  errors: string | undefined;
  correctAnswer: string[];
  isCheckingDuplicate: boolean;
  addNewOptionPressed: () => void;
  deleteOptionPressed: (index: number) => void;
  checkedCorrectOption: (index: number, checked: boolean, textOption: string) => void;
};

export const CreateAnswer = ({
  type,
  fields,
  control,
  errors,
  correctAnswer,
  isCheckingDuplicate,
  addNewOptionPressed,
  deleteOptionPressed,
  checkedCorrectOption,
}: CreateAnswerPropsType) => {
  const isDisabledDeleteBtn = fields.length <= 2;
  const {t} = useTranslation(['createQuestion', 'validationFields']);
  const errorsMessage = isCheckingDuplicate
    ? t('option.CheckingForDuplication', {ns: 'validationFields'})
    : errors;

  return (
    <View>
      <TextBox>{t('Answer choice')}</TextBox>
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
      {errorsMessage && <TextError>{errorsMessage}</TextError>}

      <ButtonAnswerBox>
        <RoundButtonWrapper onPress={addNewOptionPressed} disabled={fields.length > 6}>
          <Ionicons name="add-circle" color={Color.GrayMedium} size={40} />
        </RoundButtonWrapper>
        <CustomText fs="16px">{t('Add answer')}</CustomText>
      </ButtonAnswerBox>
    </View>
  );
};
