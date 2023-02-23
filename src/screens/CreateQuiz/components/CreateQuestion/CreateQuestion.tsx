import {Platform, ScrollView, View} from 'react-native';
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
import {useAppNavigate} from '@hooks/hooks';
import {questionType, TypeOptions} from '@customTypes/quiz-types';
import {transformTime} from '@src/utils/transformTime';
import {optionsType, transformFormatOptions} from '@src/utils/transformFormatOptions';
import {Container, ContainerSaveButton, NextQuestionButton} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Color} from '@theme/colors';
import {ScreenList} from '@src/navigation/navigation';
import {TypeSwitchSelect} from '@customTypes/SwitchSelectjrs-types';
import {TypeAppButton} from '@customTypes/AppButtun-types';
import {useTranslation} from 'react-i18next';
import {SwitchSelectorsHookForm} from '@src/components/SwitchSelectorsHookForm/index';
import {AppSelectHookForm} from '@src/components/AppSelectHookForm/index';
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
  scrollRef: React.RefObject<ScrollView>;
  onSaveQuestion: (values: SaveQuestionValuesType) => void;
  currentQuestion: questionType;
  numberOfQuestions: number;
  currentQuestionIndex: number;
  onPressCurrentQuestionPressed: (value: number) => void;
};

const numberOfLines = Platform.OS === 'ios' ? undefined : 2;

export const CreateQuestion = (props: CreateQuestionPropsType) => {
  const {
    scrollRef,
    onSaveQuestion,
    currentQuestion,
    numberOfQuestions,
    currentQuestionIndex,
    onPressCurrentQuestionPressed,
  } = props;
  const dataAnswerType = [TypeOptions.single, TypeOptions.multi];
  const resetNavigate = useAppNavigate().reset;
  const {t} = useTranslation(['createQuestion', 'validationFields']);
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    setError,
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

  const onPressNextQuestion = useCallback(() => {
    onPressCurrentQuestionPressed(currentQuestionIndex + 1);
    scrollRef.current?.scrollTo({x: 0, y: 0, animated: true});
  }, [currentQuestionIndex, onPressCurrentQuestionPressed, scrollRef]);

  const onPressSaveQuestion = useCallback(
    (values: CreateQuestionFieldType) => {
      if (values.minutes + values.seconds === 0) {
        setError('minutes', {type: ' custom', message: 'Set the time'});
        return;
      }
      onSaveQuestion({valuesFields: values, correctAnswers: correctAnswers});
    },
    [correctAnswers, onSaveQuestion, setError],
  );

  const handlerAppSelectHookForm = useCallback(
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
      } else {
        setCorrectAnswers(state => state.filter(el => el !== textOption));
      }
    },
    [],
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

  const isQuestionsEnd = currentQuestionIndex + 1 === numberOfQuestions;

  return (
    <Container>
      <TextBox>{t('title')}</TextBox>
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
      <TextBox>{t('description')}</TextBox>
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
        label={t('difficulty')}
        name="difficulty"
        type={TypeSwitchSelect.LEVEL}
        control={control}
      />
      <BlockBox>
        <TextBox>Select or create your topic</TextBox>
        <SelectAndCreateTopicContainer control={control} setValue={setValue} />
      </BlockBox>
      <ViewFlexForTwoElements>
        <View>
          <BlockDynamicMargin m="0 30px 15px 0">
            <TextBox>{t('answerType')}</TextBox>
          </BlockDynamicMargin>
          <ContainerDynamicWidth width="117px">
            <AppSelectHookForm
              name="type"
              size="m"
              type="primary"
              control={control}
              data={dataAnswerType}
              onAppSelect={handlerAppSelectHookForm}
            />
          </ContainerDynamicWidth>
        </View>
        <ViewDynamicFlex alignI="center" justifyC="center">
          <CustomText fs="16px">{t('timer')}</CustomText>
          <TimePicker control={control} errors={errors.minutes?.message} />
        </ViewDynamicFlex>
      </ViewFlexForTwoElements>
      <CreateAnswer
        fields={fields}
        control={control}
        type={currentType}
        isCheckingDuplicate={isCheckingDuplicate}
        addNewOptionPressed={onPressAddNewOption}
        deleteOptionPressed={onPressDeleteOption}
        checkedCorrectOption={checkedCorrectOption}
        correctAnswer={correctAnswers}
      />
      <BlockBox>
        <ViewDynamicFlex justifyC="flex-end" alignI="center" flexD="row">
          <ContainerSaveButton>
            <AppButton
              title={t('saveQuestionBtn')}
              type={TypeAppButton.PRIMARY}
              onPress={handleSubmit(onPressSaveQuestion)}
              disabled={isCheckingDuplicate}
            />
          </ContainerSaveButton>
          {isQuestionsEnd ? (
            <AppButton
              title={t('exitBtn')}
              type={TypeAppButton.PRIMARY}
              onPress={() => {
                resetNavigate({
                  index: 0,
                  routes: [{name: ScreenList.HOME}],
                });
              }}
            />
          ) : (
            <NextQuestionButton
              onPress={onPressNextQuestion}
              disabled={!currentQuestion.title}>
              <AntDesign name="rightcircle" size={36} color={Color.DarkBlue} />
            </NextQuestionButton>
          )}
        </ViewDynamicFlex>
      </BlockBox>
      <ViewCenter />
    </Container>
  );
};
