import {Platform} from 'react-native';
import {BlockBox, TextBox} from '@src/components/ui/ReadyStyles/Boxes';
import {ViewCenter, ViewContainer} from '@src/components/ui/ReadyStyles/Containers';
import {AppButton} from '@src/components/ui/AppButton';
import {useForm} from 'react-hook-form';
import {TypeSwitchSelect} from '@customTypes/SwitchSelectjrs-types';
import {TypeAppButton} from '@customTypes/AppButtun-types';
import {useTranslation} from 'react-i18next';
import {TextInputWithLabel} from '@src/components/TextInputWithLabel/index';
import {SwitchSelectorsHookForm} from '@src/components/SwitchSelectorsHookForm/index';
import {SelectAndCreateTopicContainer} from '@src/components/SelectAndCreateTopic/SelectAndCreateTopicContainer';
import {TextError} from '@src/components/ui/ReadyStyles/TextError';
import {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

export type CreateQuizFieldType = {
  title: string;
  description: string;
  numberOfQuestions: string;
  topicId: number;
};

type QuizSettingsPropsType = {
  onQuestionsSettings: (value: CreateQuizFieldType) => {};
};

const numberOfLines = Platform.OS === 'ios' ? undefined : 4;

export const QuizSettings = ({onQuestionsSettings}: QuizSettingsPropsType) => {
  const {t} = useTranslation(['createQuiz', 'validationFields']);

  const {
    control,
    handleSubmit,
    setValue,
    clearErrors,
    reset,
    formState: {errors},
  } = useForm<CreateQuizFieldType>({
    defaultValues: {
      numberOfQuestions: '10',
      topicId: 0,
    },
  });

  const handleQuestionsSettings = async (valuesField: CreateQuizFieldType) => {
    onQuestionsSettings(valuesField);
  };

  const disabledQuestionsSettings = Object.keys(errors).length === 0;

  useFocusEffect(
    useCallback(() => {
      return () => reset();
    }, [reset]),
  );

  return (
    <ViewContainer>
      <TextInputWithLabel
        name="title"
        label={t('Test title')}
        control={control}
        rules={{
          required: `${t('title.required', {ns: 'validationFields'})}`,
          minLength: {
            value: 3,
            message: `${t('title.minLength', {ns: 'validationFields'})}`,
          },
          maxLength: {
            value: 20,
            message: `${t('title.maxLength', {ns: 'validationFields'})}`,
          },
        }}
      />
      <TextInputWithLabel
        name="description"
        label={t('Description')}
        control={control}
        rules={{
          required: `${t('description.required', {ns: 'validationFields'})}`,
          maxLength: {
            value: 50,
            message: `${t('description.maxLength', {ns: 'validationFields'})}`,
          },
        }}
        multiline
        textAlignVertical={'top'}
        numberOfLines={numberOfLines}
        height={Platform.OS === 'ios' ? '100px' : undefined}
      />
      <BlockBox>
        <TextBox>{t('Select or create topic')}</TextBox>
        <SelectAndCreateTopicContainer
          control={control}
          setValue={setValue}
          clearErrors={clearErrors}
        />
      </BlockBox>
      {errors.topicId && (
        <BlockBox>
          <TextError>{errors.topicId.message}</TextError>
        </BlockBox>
      )}
      <BlockBox>
        <SwitchSelectorsHookForm
          label={t('Number of questions')}
          name="numberOfQuestions"
          control={control}
          type={TypeSwitchSelect.NUMBER}
        />
      </BlockBox>
      <ViewCenter>
        <AppButton
          title={t('Question settings')}
          type={TypeAppButton.PRIMARY}
          onPress={handleSubmit(handleQuestionsSettings)}
          disabled={!disabledQuestionsSettings}
        />
      </ViewCenter>
    </ViewContainer>
  );
};
