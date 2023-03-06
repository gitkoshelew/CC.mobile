import {Platform} from 'react-native';
import {
  BlockBox,
  ContainerDynamicWidth,
  BlockDynamicMargin,
  TextBox,
  CustomText,
} from '@src/components/ui/ReadyStyles/Boxes';
import {
  ViewCenter,
  ViewDynamicFlex,
  ViewFlexForTwoElements,
} from '@src/components/ui/ReadyStyles/Containers';
import {CreateAnswer} from './CreateAnswer/index';
import {AppButton} from '@src/components/ui/AppButton';
import {TextInputHookForm} from '@src/components/TextInputHookForm';
import {useFieldArray, useForm, useWatch} from 'react-hook-form';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {questionType, TypeOptions} from '@customTypes/quiz-types';
import {transformTime} from '@src/utils/transformTime';
import {optionsType, transformFormatOptions} from '@src/utils/transformFormatOptions';
import {Container} from './styles';
import {TypeSwitchSelect} from '@customTypes/SwitchSelectjrs-types';
import {TypeAppButton} from '@customTypes/AppButtun-types';
import {useTranslation} from 'react-i18next';
import {SwitchSelectorsHookForm} from '@src/components/SwitchSelectorsHookForm/index';
import {SaveQuestionValuesType} from '@src/screens/CreateQuiz/components/CreateQuestion/CreateQuestionContainer';
import {TimePicker} from '@src/components/TimePicker/index';
import {SelectAndCreateTopicContainer} from '@src/components/SelectAndCreateTopic/SelectAndCreateTopicContainer';

export type CreateQuestionFieldType = {
  title: string;
  description: string;
  minutes: number;
  seconds: number;
  options: {option: string}[];
  topicId: number;
  difficulty: string;
  type: string;
};

export type CreateQuestionPropsType = {
  onSaveQuestion: (values: SaveQuestionValuesType) => void;
  currentQuestion: questionType;
  numberOfQuestions: number;
  currentQuestionIndex: number;
};

const numberOfLines = Platform.OS === 'ios' ? undefined : 2;

export const CreateQuestion = (props: CreateQuestionPropsType) => {
  const {t} = useTranslation(['createQuestion', 'AppSelect', 'validationFields']);
  const {onSaveQuestion, currentQuestion} = props;

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    setError,
    clearErrors,
    formState: {errors},
  } = useForm<CreateQuestionFieldType>({
    defaultValues: {
      title: currentQuestion.title,
      description: currentQuestion.description,
      difficulty: currentQuestion.difficulty,
      type: currentQuestion.type,
      topicId: currentQuestion.topicId,
    },
  });
  const {fields, append, remove} = useFieldArray({name: 'options', control});
  const [correctAnswers, setCorrectAnswers] = useState<string[]>(
    currentQuestion.content.correctAnswer,
  );

  const currentArrayOptions = useWatch({
    control,
    name: 'options',
  });
  const currentType = useWatch({
    control,
    name: 'type',
  });

  const arrayOptions = useMemo(() => {
    return currentArrayOptions
      ? currentArrayOptions.map(el => el.option).filter(el => el !== '')
      : [];
  }, [currentArrayOptions]);
  const isCheckingDuplicate = new Set(arrayOptions).size !== arrayOptions.length;

  const onPressSaveQuestion = useCallback(
    (values: CreateQuestionFieldType) => {
      if (values.minutes + values.seconds === 0) {
        setError('minutes', {
          type: ' custom',
          message: t('timer.Set the time', {ns: 'validationFields'})!,
        });
        return;
      }
      if (correctAnswers.length < 2 && values.type === TypeOptions.multi) {
        setError('options', {
          type: 'custom',
          message: t('validationFields.Choose at least 2 correct answers')!,
        });
        return;
      }
      if (correctAnswers.length === 0 && values.type === TypeOptions.single) {
        setError('options', {
          type: 'custom',
          message: t('validationFields.Choose 1 correct answer')!,
        });
        return;
      }

      onSaveQuestion({valuesFields: values, correctAnswers: correctAnswers});
    },
    [correctAnswers, onSaveQuestion, setError, t],
  );

  const handlerSwitchSelectHookForm = useCallback(
    (value: string, onPress: (value: string) => void) => {
      setCorrectAnswers([]);
      onPress(value);
    },
    [],
  );

  const onPressAddNewOption = useCallback(() => {
    append([{option: ''}]);
  }, [append]);

  const onPressDeleteOption = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove],
  );

  const checkedCorrectOption = useCallback(
    (index: number, checked: boolean, textOption: string) => {
      if (textOption !== '' && checked) {
        setCorrectAnswers(state => [...state, textOption]);
        clearErrors('options');
      } else {
        setCorrectAnswers(state => state.filter(el => el !== textOption));
      }
    },
    [clearErrors],
  );

  useEffect(() => {
    reset({
      title: currentQuestion.title,
      description: currentQuestion.description,
      options: transformFormatOptions(currentQuestion.content.options) as optionsType,
      ...(transformTime({
        format: 'default',
        totalSeconds: currentQuestion.timer,
      }) as object),
      difficulty: currentQuestion.difficulty,
      type: currentQuestion.type,
      topicId: currentQuestion.topicId,
    });
  }, [
    currentQuestion.content.options,
    currentQuestion.description,
    currentQuestion.difficulty,
    currentQuestion.timer,
    currentQuestion.title,
    currentQuestion.topicId,
    currentQuestion.type,
    reset,
  ]);

  useEffect(() => {
    setCorrectAnswers(currentQuestion.content.correctAnswer);
  }, [currentQuestion.content.correctAnswer]);

  return (
    <Container>
      <TextBox>{t('Title question')}</TextBox>
      <BlockBox>
        <TextInputHookForm
          name="title"
          control={control}
          rules={{
            required: `${t('title.required', {ns: 'validationFields'})}`,
            maxLength: {
              value: 20,
              message: `${t('title.maxLength', {ns: 'validationFields'})}`,
            },
          }}
        />
      </BlockBox>
      <TextBox>{t('Description')}</TextBox>
      <BlockBox>
        <TextInputHookForm
          name="description"
          control={control}
          rules={{
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
      <SwitchSelectorsHookForm
        label={t('Difficulty')}
        name="difficulty"
        type={TypeSwitchSelect.LEVEL}
        control={control}
      />
      <BlockBox>
        <TextBox>{t('Select or create topic')}</TextBox>
        <SelectAndCreateTopicContainer control={control} setValue={setValue} />
      </BlockBox>
      <ViewFlexForTwoElements>
        <BlockDynamicMargin m="0 10px 0 0">
          <BlockDynamicMargin m="0 0 15px 0">
            <TextBox>{t('Answer type')}</TextBox>
          </BlockDynamicMargin>
          <ContainerDynamicWidth width="117px">
            <SwitchSelectorsHookForm
              name="type"
              type={TypeSwitchSelect.TYPE_ANSWER}
              control={control}
              onPressSwitchSelect={handlerSwitchSelectHookForm}
            />
          </ContainerDynamicWidth>
        </BlockDynamicMargin>
        <ViewDynamicFlex alignI="center" justifyC="center">
          <CustomText fs="16px">{t('Timer')}</CustomText>
          <TimePicker control={control} errors={errors.minutes?.message} />
        </ViewDynamicFlex>
      </ViewFlexForTwoElements>
      <CreateAnswer
        fields={fields}
        control={control}
        type={currentType}
        errors={errors.options?.message}
        isCheckingDuplicate={isCheckingDuplicate}
        addNewOptionPressed={onPressAddNewOption}
        deleteOptionPressed={onPressDeleteOption}
        checkedCorrectOption={checkedCorrectOption}
        correctAnswer={correctAnswers}
      />
      <BlockBox>
        <ViewDynamicFlex justifyC="center" alignI="center" flexD="row">
          <AppButton
            title={t('Save question')}
            type={TypeAppButton.PRIMARY}
            onPress={handleSubmit(onPressSaveQuestion)}
            disabled={isCheckingDuplicate}
          />
        </ViewDynamicFlex>
      </BlockBox>
      <ViewCenter />
    </Container>
  );
};
