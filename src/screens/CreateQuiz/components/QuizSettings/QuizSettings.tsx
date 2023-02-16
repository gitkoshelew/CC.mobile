import {Platform} from 'react-native';
import {BlockBox, TextBox} from '@src/components/ui/ReadyStyles/Boxes';
import {ViewCenter, ViewContainer} from '@src/components/ui/ReadyStyles/Containers';
import {AppButton} from '@src/components/ui/AppButton';
import {AppSelect} from '@src/components/ui/AppSelect';
import {SwitchSelectors} from '@src/components/SwitchSelectors';
import {useCallback, useState} from 'react';
import {useForm} from 'react-hook-form';
import {TypeSwitchSelect} from '@customTypes/SwitchSelectjrs-types';
import {TypeAppButton} from '@customTypes/AppButtun-types';
import {useTranslation} from 'react-i18next';
import {TextInputWithLabel} from '@src/components/TextInputWithLabel/index';
import {QuestionsSettingsType} from '@src/screens/CreateQuiz/components/QuizSettings/QuizSettingsContainer';

export type SelectorsType = {
  theme: string;
  numberQuestions: number;
};

export type CreateQuizFieldType = {
  title: string;
  description: string;
};

type QuizSettingsPropsType = {
  onQuestionsSettings: (value: QuestionsSettingsType) => {};
};

const numberOfLines = Platform.OS === 'ios' ? undefined : 4;

export const QuizSettings = ({onQuestionsSettings}: QuizSettingsPropsType) => {
  const data = ['Verify', 'Date', 'Popularity', 'Something else'];
  const {t} = useTranslation(['createQuiz', 'validationFields']);
  const [selectorsData, setSelectorsData] = useState<SelectorsType>({
    theme: 'Verify',
    numberQuestions: 10,
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<CreateQuizFieldType>();

  const selectsThemePressed = useCallback(
    (value: string) => {
      setSelectorsData({...selectorsData, theme: value});
    },
    [selectorsData],
  );

  const selectsNumberQuestionsPressed = useCallback(
    (value: string) => {
      setSelectorsData({...selectorsData, numberQuestions: Number(value)});
    },
    [selectorsData],
  );
  const onPressQuestionsSettings = async (values: CreateQuizFieldType) => {
    onQuestionsSettings({
      valuesFields: values,
      numberOfQuestions: selectorsData.numberQuestions,
    });
  };

  const disabledQuestionsSettings = Object.keys(errors).length === 0;

  return (
    <ViewContainer>
      <TextInputWithLabel
        name="title"
        label={t('title')}
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
        label={t('description')}
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
      <TextBox>{t('topic')}</TextBox>
      <BlockBox>
        <AppSelect size="m" data={data} type="primary" onSelect={selectsThemePressed} />
      </BlockBox>
      <TextBox>{t('numberOfQuestions')}</TextBox>
      <BlockBox>
        <SwitchSelectors
          type={TypeSwitchSelect.NUMBER}
          onPress={selectsNumberQuestionsPressed}
        />
      </BlockBox>
      <ViewCenter>
        <AppButton
          title={t('questionSettings')}
          type={TypeAppButton.PRIMARY}
          onPress={handleSubmit(onPressQuestionsSettings)}
          disabled={!disabledQuestionsSettings}
        />
      </ViewCenter>
    </ViewContainer>
  );
};
