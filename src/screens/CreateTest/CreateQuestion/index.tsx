import {Platform, View} from 'react-native';
import {
  BlockBox,
  BlockBoxMarginLeft,
  TextBox,
} from '@src/components/ui/ReadyStyles/Boxes';
import {
  ViewCenter,
  ViewFlexForTwoElements,
} from '@src/components/ui/ReadyStyles/Containers';
import {AppSelect} from '@src/components/ui/AppSelect';
import {TimerInput} from '@src/components/TimerInput';
import {CreateAnswer} from './CreateAnswer/index';
import {AppButton} from '@src/components/ui/AppButton';
import {TextInputHookForm} from '@src/components/TextInputHookForm';
import {useFieldArray, useForm} from 'react-hook-form';
import {useCallback, useState} from 'react';
import {getOptionsObjectToString} from '@src/utils/getOptionsObjectToString';
import {useAppDispatch} from '@hooks/hooks';
import {createQuestion} from '@src/bll/testReducer';
import {SwitchSelectors} from '@src/components/SwitchSelectors';

export type inputsFieldType = {
  title: string;
  descriptions: string;
  minutes: number;
  seconds: number;
  options: {option: string}[];
};

const numberOfLines = Platform.OS === 'ios' ? undefined : 2;

export const CreateQuestion = () => {
  const data = ['single', 'multiple'];
  const dispatch = useAppDispatch();
  const {control, handleSubmit} = useForm<inputsFieldType>({
    defaultValues: {
      title: '',
      descriptions: '',
      options: [{option: ''}, {option: ''}],
    },
  });

  const {fields, append, remove} = useFieldArray({name: 'options', control});
  const [selectorsData, setSelectorsData] = useState({
    difficulty: 'easy',
    type: 'single',
  });
  const onPressSaveQuestionHandler = (values: inputsFieldType) => {
    const isTime = +values.minutes * 60 + +values.seconds;
    const isOptions = getOptionsObjectToString(values.options);
    dispatch(
      createQuestion({
        id: 1,
        title: values.title,
        description: values.descriptions,
        timer: isTime,
        content: {options: isOptions, answers: []},
        difficulty: selectorsData.difficulty,
        type: selectorsData.type,
        moderation: null,
        quiz: [3],
      }),
    );
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
