import {Platform, View} from 'react-native';
import {
  BlockBox,
  BlockBoxMarginLeft,
  TextBox,
  ContainerDynamicWidth,
} from '@src/components/ui/ReadyStyles/Boxes';
import {ViewCenter, ViewFlexForTwoElements} from '@src/components/ui/ReadyStyles/Containers';
import {AppSelect} from '@src/components/ui/AppSelect';
import {TimerInput} from '@src/components/TimerInput';
import {CreateAnswer} from './CreateAnswer/index';
import {AppButton} from '@src/components/ui/AppButton';
import {TextInputHookForm} from '@src/components/TextInputHookForm';
import {useFieldArray, useForm} from 'react-hook-form';
import React, {useCallback, useEffect, useState} from 'react';
import {useAppDispatch} from '@hooks/hooks';
import {SwitchSelectors} from '@src/components/SwitchSelectors';
import {Difficulty, questionType, TypeOptions} from '@customTypes/quiz-types';
import {transformTime} from '@src/utils/transformTime';
import {createQuestion, getQuizQuestions} from '@src/bll/quizReducer';
import {optionsType, transformFormatOptions} from '@src/utils/transformFormatOptions';

export type InputsFieldType = {
  title: string;
  descriptions: string;
  minutes: string;
  seconds: string;
  options: {option: string}[];
};

export type CreateQuestionPropsType = {
  currentQuestion: questionType;
  setQuestions: (value: questionType[]) => void;
  quizId: number;
};

const numberOfLines = Platform.OS === 'ios' ? undefined : 2;

export const CreateQuestion = ({
  currentQuestion,
  setQuestions,
  quizId,
}: CreateQuestionPropsType) => {
  const dataAnswerType = [TypeOptions.single, TypeOptions.multi];

  const dispatch = useAppDispatch();
  const {control, handleSubmit, reset} = useForm<InputsFieldType>({
    defaultValues: {
      title: currentQuestion.title,
      descriptions: currentQuestion.description,
    },
  });

  const {fields, append, remove} = useFieldArray({name: 'options', control});

  const [selectorsData, setSelectorsData] = useState<{
    difficulty: string;
    type: string;
    correctAnswers: string[];
  }>({
    difficulty: currentQuestion.difficulty,
    type: currentQuestion.type,
    correctAnswers: currentQuestion.content.correctAnswer,
  });

  const onPressSaveQuestionHandler = (values: InputsFieldType) => {
    const isTime = transformTime({
      format: 'onlySeconds',
      isMinutes: values.minutes,
      isSeconds: values.seconds,
    });
    const isOptions = transformFormatOptions(values.options);
    dispatch(
      createQuestion({
        title: values.title,
        description: values.descriptions,
        timer: isTime as number,
        content: {options: isOptions as string[], correctAnswer: selectorsData.correctAnswers},
        difficulty: selectorsData.difficulty as unknown as Difficulty,
        type: TypeOptions[selectorsData.type as keyof typeof TypeOptions],
        topicId: 1,
        quizId,
      }),
    ).then(() => {
      dispatch(getQuizQuestions(quizId))
        .unwrap()
        .then(res => {
          setQuestions(res.question);
        });
    });
  };

  const addNewOptionPressed = useCallback(() => {
    append([{option: ''}]);
  }, [append]);

  const deleteOptionPressed = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove],
  );

  const checkedCorrectOption = useCallback(
    (index: number, checked: boolean, textOption: string) => {
      if (textOption !== '' && checked) {
        setSelectorsData(state => ({
          ...state,
          correctAnswers: [...state.correctAnswers, textOption],
        }));
      } else {
        setSelectorsData(state => ({
          ...state,
          correctAnswers: state.correctAnswers.filter(el => el !== textOption),
        }));
      }
    },
    [],
  );

  const selectQuestionDifficult = useCallback(
    (value: string) => {
      setSelectorsData({...selectorsData, difficulty: value});
    },
    [selectorsData],
  );

  const selectQuestionType = useCallback(
    (value: string) => {
      setSelectorsData({...selectorsData, type: value, correctAnswers: []});
    },
    [selectorsData],
  );

  useEffect(() => {
    reset({
      title: currentQuestion.title,
      descriptions: currentQuestion.description,
      options: transformFormatOptions(currentQuestion.content.options) as optionsType,
      ...(transformTime({
        format: 'default',
        totalSeconds: currentQuestion.timer,
      }) as object),
    });
  }, [
    currentQuestion.content.options,
    currentQuestion.description,
    currentQuestion.timer,
    currentQuestion.title,
    reset,
  ]);

  useEffect(() => {
    setSelectorsData(state => ({
      ...state,
      difficulty: currentQuestion.difficulty,
      type: currentQuestion.type,
      correctAnswers: currentQuestion.content.correctAnswer,
    }));
  }, [
    currentQuestion.content.correctAnswer,
    currentQuestion.difficulty,
    currentQuestion.type,
  ]);

  return (
    <View>
      <TextBox>Question title</TextBox>
      <BlockBox>
        <TextInputHookForm
          name="title"
          control={control}
          rules={{
            required: 'Description is required',
            maxLength: {
              value: 50,
              message: 'Description should be maximum 50 characters long',
            },
          }}
        />
      </BlockBox>
      <TextBox>Description</TextBox>
      <BlockBox>
        <TextInputHookForm
          name="descriptions"
          control={control}
          rules={{
            maxLength: {
              value: 50,
              message: 'Description should be maximum 50 characters long',
            },
          }}
          multiline
          textAlignVertical={'top'}
          numberOfLines={numberOfLines}
          height={Platform.OS === 'ios' ? '100px' : undefined}
        />
      </BlockBox>
      <BlockBox>
        <TextBox>Question difficulty</TextBox>
        <SwitchSelectors
          type="level"
          onPress={selectQuestionDifficult}
          value={selectorsData.difficulty}
        />
      </BlockBox>
      <ViewFlexForTwoElements>
        <BlockBox>
          <TextBox>Answer type</TextBox>
          <ContainerDynamicWidth width="117px">
            <AppSelect
              value={selectorsData.type}
              size="m"
              data={dataAnswerType}
              type="primary"
              onSelect={selectQuestionType}
            />
          </ContainerDynamicWidth>
        </BlockBox>
        <BlockBoxMarginLeft>
          <TextBox>Timer</TextBox>
          <TimerInput control={control} />
        </BlockBoxMarginLeft>
      </ViewFlexForTwoElements>
      <CreateAnswer
        fields={fields}
        control={control}
        type={selectorsData.type}
        correctAnswer={selectorsData.correctAnswers}
        addNewOptionPressed={addNewOptionPressed}
        deleteOptionPressed={deleteOptionPressed}
        checkedCorrectOption={checkedCorrectOption}
      />
      <ViewCenter>
        <AppButton
          title="Save question"
          type="primary"
          onPress={handleSubmit(onPressSaveQuestionHandler)}
        />
      </ViewCenter>
      <ViewCenter>
        <AppButton title="Save test" type="primary" onPress={() => {}} disabled={true} />
      </ViewCenter>
    </View>
  );
};
