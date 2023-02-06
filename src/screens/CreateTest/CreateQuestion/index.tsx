import {Platform, ScrollView} from 'react-native';
import {
  BlockBox,
  BlockBoxMarginLeft,
  TextBox,
  ContainerDynamicWidth,
} from '@src/components/ui/ReadyStyles/Boxes';
import {
  ViewCenter,
  ViewDynamicFlex,
  ViewFlexForTwoElements,
} from '@src/components/ui/ReadyStyles/Containers';
import {AppSelect} from '@src/components/ui/AppSelect';
import {TimerInput} from '@src/components/TimerInput';
import {CreateAnswer} from './CreateAnswer/index';
import {AppButton} from '@src/components/ui/AppButton';
import {TextInputHookForm} from '@src/components/TextInputHookForm';
import {useFieldArray, useForm, useWatch} from 'react-hook-form';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useAppDispatch, useAppNavigate} from '@hooks/hooks';
import {SwitchSelectors} from '@src/components/SwitchSelectors';
import {Difficulty, questionType, TypeOptions} from '@customTypes/quiz-types';
import {transformTime} from '@src/utils/transformTime';
import {createQuestion, getQuizQuestions} from '@src/bll/quizReducer';
import {optionsType, transformFormatOptions} from '@src/utils/transformFormatOptions';
import {TopicQuestion} from '@src/screens/CreateTest/CreateQuestion/TopicQuestion/index';
import {Container} from '@src/screens/CreateTest/CreateQuestion/styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Color} from '@theme/colors';
import {ScreenList} from '@src/navigation/navigation';
import {
  ContainerSaveButton,
  NextQuestionButton,
} from '@src/screens/CreateTest/CreateQuestion/styles';
import {TypeSwitchSelect} from '@customTypes/SwitchSelectjrs-types';
import {TypeAppButton} from '@customTypes/AppButtun-types';

export type InputsFieldType = {
  title: string;
  descriptions: string;
  minutes: string;
  seconds: string;
  options: {option: string}[];
  topicId: number;
};

export type CreateQuestionPropsType = {
  currentQuestion: questionType;
  setCurrentQuestion: (values: questionType) => void;
  setQuestions: (value: questionType[]) => void;
  quizId: number;
  activeTab: number;
  onPressCurrentQuestionPressed: (value: number) => void;
  scrollRef: React.RefObject<ScrollView>;
  numberQuestions: number;
};

const numberOfLines = Platform.OS === 'ios' ? undefined : 2;

export const CreateQuestion = ({
  currentQuestion,
  setCurrentQuestion,
  setQuestions,
  quizId,
  ...props
}: CreateQuestionPropsType) => {
  const dataAnswerType = [TypeOptions.single, TypeOptions.multi];
  const resetNavigate = useAppNavigate().reset;
  const dispatch = useAppDispatch();
  const {control, handleSubmit, reset, setValue} = useForm<InputsFieldType>({
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

  const watchFieldArray = useWatch({
    control,
    name: 'options',
  });

  const arrayOptions = useMemo(() => {
    return watchFieldArray ? watchFieldArray.map(el => el.option).filter(el => el !== '') : [];
  }, [watchFieldArray]);
  const isCheckingDuplicate = new Set(arrayOptions).size !== arrayOptions.length;

  const nextQuestionPressed = useCallback(() => {
    props.onPressCurrentQuestionPressed(props.activeTab + 1);
    props.scrollRef.current?.scrollTo({x: 0, y: 0, animated: true});
  }, [props]);

  const onPressSaveQuestionHandler = async (values: InputsFieldType) => {
    const time = transformTime({
      format: 'onlySeconds',
      isMinutes: values.minutes,
      isSeconds: values.seconds,
    });
    const options = transformFormatOptions(values.options);
    const newQuestion = {
      title: values.title,
      description: values.descriptions,
      timer: time as number,
      content: {options: options as string[], correctAnswer: selectorsData.correctAnswers},
      difficulty: selectorsData.difficulty as unknown as Difficulty,
      type: TypeOptions[selectorsData.type as keyof typeof TypeOptions],
      topicId: values.topicId,
      quizId,
    };
    const createdQuestion = await dispatch(createQuestion(newQuestion)).unwrap();
    setCurrentQuestion(createdQuestion);
    const questions = await dispatch(getQuizQuestions(quizId)).unwrap();
    setQuestions(questions.question);
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

  const isQuestionsEnd = props.activeTab + 1 === props.numberQuestions;

  return (
    <Container>
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
          type={TypeSwitchSelect.LEVEL}
          onPress={selectQuestionDifficult}
          value={selectorsData.difficulty}
        />
      </BlockBox>
      <BlockBox>
        <TextBox>Select or create your topic</TextBox>
        <TopicQuestion setValue={setValue} />
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
        isCheckingDuplicate={isCheckingDuplicate}
        control={control}
        type={selectorsData.type}
        correctAnswer={selectorsData.correctAnswers}
        addNewOptionPressed={addNewOptionPressed}
        deleteOptionPressed={deleteOptionPressed}
        checkedCorrectOption={checkedCorrectOption}
      />
      <BlockBox>
        <ViewDynamicFlex justifyC="flex-end" alignI="center" flexD="row">
          <ContainerSaveButton>
            <AppButton
              title="Save question"
              type={TypeAppButton.PRIMARY}
              onPress={handleSubmit(onPressSaveQuestionHandler)}
              disabled={isCheckingDuplicate}
            />
          </ContainerSaveButton>
          {isQuestionsEnd ? (
            <AppButton
              title="Exit"
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
              onPress={nextQuestionPressed}
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
