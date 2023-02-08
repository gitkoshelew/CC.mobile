import {Platform} from 'react-native';
import {BlockBox, TextBox} from '@src/components/ui/ReadyStyles/Boxes';
import {ViewCenter, ViewContainer} from '@src/components/ui/ReadyStyles/Containers';
import {AppButton} from '@src/components/ui/AppButton';
import {useAppDispatch, useAppNavigate} from '@hooks/hooks';
import {ScreenList} from '@src/navigation/navigation';
import {AppSelect} from '@src/components/ui/AppSelect';
import {SwitchSelectors} from '@src/components/SwitchSelectors';
import {useCallback, useState} from 'react';
import {useForm} from 'react-hook-form';
import {TextInputHookForm} from '@src/components/TextInputHookForm';
import {createQuiz} from '@src/bll/quizReducer';
import {TypeSwitchSelect} from '@customTypes/SwitchSelectjrs-types';
import {TypeAppButton} from '@customTypes/AppButtun-types';
import {useTranslation} from 'react-i18next';

export type SelectorsType = {
  theme: string;
  numberQuestions: number;
};

type inputsFieldType = {
  title: string;
  description: string;
};

const numberOfLines = Platform.OS === 'ios' ? undefined : 4;

export const TestSettings = () => {
  const data = ['Verify', 'Date', 'Popularity', 'Something else'];
  const dispatch = useAppDispatch();
  const {navigate} = useAppNavigate();
  const {t} = useTranslation(['createQuiz', 'validationFields']);
  const [selectorsData, setSelectorsData] = useState<SelectorsType>({
    theme: 'Verify',
    numberQuestions: 10,
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<inputsFieldType>();
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
  const onPressQuestionsSettings = async (values: inputsFieldType) => {
    try {
      await dispatch(
        createQuiz({
          ...values,
        }),
      )
        .unwrap()
        .then(res => {
          navigate(ScreenList.CREATE_TEST, {
            screen: ScreenList.QUESTIONS_SET,
            params: {
              numberQuestions: selectorsData.numberQuestions,
              idNewTest: res.id,
            },
          });
        });
    } catch (e) {
      console.error(e);
    }
  };

  const disabledQuestionsSettings = Object.keys(errors).length === 0;

  return (
    <ViewContainer>
      <TextBox>{t('title')}</TextBox>
      <BlockBox>
        <TextInputHookForm
          name="title"
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
      </BlockBox>
      <TextBox>{t('description')}</TextBox>
      <BlockBox>
        <TextInputHookForm
          name="description"
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
      </BlockBox>
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
