import {useCallback, useEffect, useState} from 'react';
import {Platform, View} from 'react-native';
import {
  BlockBox,
  BlockBoxMarginLeft,
  TextBox,
} from '../../../components/ui/ReadyStyles/Boxes/index';
import {CustomTextInput} from '../../../components/ui/CustomTextInput/index';
import {
  ViewCenter,
  ViewFlexForTwoElements,
} from '../../../components/ui/ReadyStyles/Containers/index';
import {AppSelect} from '../../../components/ui/AppSelect/index';
import {TimerInput} from '../../../components/TimerInput/index';
import {CreateAnswer} from './CreateAnswer/index';
import {AppButton} from '../../../components/ui/AppButton/index';
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks';
import {questionType} from '@customTypes/test-types';
import {saveQuestion} from '../../../bll/testReducer';

type CreateQuestionPropsType = {
  id: number;
};

const numberOfLines = Platform.OS === 'ios' ? undefined : 2;

export const CreateQuestion = ({id}: CreateQuestionPropsType) => {
  const data = ['Single-choice', 'Multiple-choice'];
  const dispatch = useAppDispatch();
  const currentQuestion = useAppSelector(
    state => state.testReducer.test.questions.find(el => el.id === id)!,
  );
  const [question, setQuestion] = useState<questionType>(currentQuestion);
  const onPressSaveQuestionHandler = () => {
    dispatch(saveQuestion(question));
  };
  const onPressQuestionTypeHandler = useCallback(
    (value: string) => {
      setQuestion({...question, type: value});
    },
    [question],
  );

  useEffect(() => {
    setQuestion(currentQuestion);
  }, [currentQuestion]);

  return (
    <View>
      <TextBox>Question</TextBox>
      <BlockBox>
        <CustomTextInput
          onChangeText={() => {}}
          value={question.textQuestion}
          multiline
          textAlignVertical={'top'}
          numberOfLines={numberOfLines}
          height={Platform.OS === 'ios' ? '100px' : undefined}
        />
      </BlockBox>
      <ViewFlexForTwoElements>
        <BlockBox>
          <TextBox>Question type</TextBox>
          <AppSelect
            value={question.type}
            size="m"
            data={data}
            type="primary"
            onSelect={onPressQuestionTypeHandler}
          />
        </BlockBox>
        <BlockBoxMarginLeft>
          <TextBox>Timer</TextBox>
          <TimerInput />
        </BlockBoxMarginLeft>
      </ViewFlexForTwoElements>
      <CreateAnswer
        answers={currentQuestion.content.options}
        correctAnswer={currentQuestion.correctAnswer}
      />
      <ViewCenter>
        <AppButton
          title="Save question"
          type="primary"
          onPress={onPressSaveQuestionHandler}
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
