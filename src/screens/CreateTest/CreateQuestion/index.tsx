import {Platform, View} from 'react-native';
import {
  BlockBox,
  BlockBoxMarginLeft,
  TextBox,
} from '@src/components/ui/ReadyStyles/Boxes/index';
import {
  ViewCenter,
  ViewFlexForTwoElements,
} from '@src/components/ui/ReadyStyles/Containers/index';
import {AppSelect} from '@src/components/ui/AppSelect/index';
import {TimerInput} from '@src/components/TimerInput/index';
import {CreateAnswer} from './CreateAnswer/index';
import {AppButton} from '@src/components/ui/AppButton/index';
import {TextInputHookForm} from '@src/components/TextInputHookForm/index';
import {useFieldArray, useForm} from 'react-hook-form';
import {useCallback, useEffect, useState} from 'react';
import {useAppDispatch} from '@hooks/hooks';
import {SwitchSelectors} from '@src/components/SwitchSelectors/index';
import {Difficulty, questionType, TypeOptions} from '@customTypes/test-types';
import {transformTime} from '@src/utils/transformTime';
import {createQuestion} from '@src/bll/testReducer';

export type inputsFieldType = {
  title: string;
  descriptions: string;
  minutes: string;
  seconds: string;
  options: {option: string}[];
};
export type CreateQuestionPropsType = {
  currentQuestion: questionType;
  setQuestions: (value: questionType[]) => void;
  questions: questionType[];
};

const numberOfLines = Platform.OS === 'ios' ? undefined : 2;

export const CreateQuestion = ({
  currentQuestion,
  setQuestions,
  questions,
}: CreateQuestionPropsType) => {
  const data = ['Single', 'Multiple'];
  const dispatch = useAppDispatch();
  const {control, handleSubmit, reset} = useForm<inputsFieldType>({
    defaultValues: {
      title: '',
      descriptions: '',
      options: currentQuestion.content.options,
    },
  });

  const {fields, append, remove} = useFieldArray({name: 'options', control});
  const [selectorsData, setSelectorsData] = useState<{
    difficulty: string;
    type: string;
  }>({
    difficulty: 'Easy',
    type: 'Single',
  });

  const onPressSaveQuestionHandler = (values: inputsFieldType) => {
    const isTime = transformTime({
      format: 'onlySeconds',
      isMinutes: values.minutes,
      isSeconds: values.seconds,
    });
    // const isOptions = getOptionsObjectToString(values.options);
    const collectedDataQuestion: questionType = {
      id: currentQuestion.id,
      title: values.title,
      description: values.descriptions,
      timer: isTime as number,
      content: {options: values.options, correctAnswer: []},
      difficulty: selectorsData.difficulty as Difficulty,
      type: selectorsData.type as TypeOptions,
      topicId: 1,
      moderationId: null,
    };
    setQuestions(
      questions.map(el =>
        el.id === currentQuestion.id ? {...collectedDataQuestion} : el,
      ),
    );
    dispatch(
      createQuestion({
        id: 1,
        title: values.title,
        description: values.descriptions,
        timer: isTime as number,
        content: {options: values.options, correctAnswer: []},
        difficulty:
          Difficulty[selectorsData.difficulty as keyof typeof Difficulty],
        type: TypeOptions[selectorsData.type as keyof typeof TypeOptions],
        topicId: 1,
        moderationId: null,
      }),
    ).then(res => {
      console.log(res);
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

  const checkedCorrectOption = useCallback(() => {}, []);

  const selectQuestionDifficult = useCallback(
    (value: string) => {
      setSelectorsData({...selectorsData, difficulty: value});
    },
    [selectorsData],
  );

  const selectQuestionType = useCallback(
    (value: string) => {
      setSelectorsData({...selectorsData, type: value});
    },
    [selectorsData],
  );

  useEffect(() => {
    reset({
      title: currentQuestion.title,
      descriptions: currentQuestion.description,
      options: currentQuestion.content.options,
      ...(transformTime({
        format: 'default',
        totalSeconds: currentQuestion.timer,
      }) as object),
    });
  }, [currentQuestion, reset]);

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
        <SwitchSelectors type="level" onPress={selectQuestionDifficult} />
      </BlockBox>
      <ViewFlexForTwoElements>
        <BlockBox>
          <TextBox>Question type</TextBox>
          <AppSelect
            value={selectorsData.type}
            size="m"
            data={data}
            type="primary"
            onSelect={selectQuestionType}
          />
        </BlockBox>
        <BlockBoxMarginLeft>
          <TextBox>Timer</TextBox>
          <TimerInput control={control} />
        </BlockBoxMarginLeft>
      </ViewFlexForTwoElements>
      <CreateAnswer
        fields={fields}
        control={control}
        correctAnswer={['']}
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
        <AppButton
          title="Save test"
          type="primary"
          onPress={() => {}}
          disabled={true}
        />
      </ViewCenter>
    </View>
  );
};
