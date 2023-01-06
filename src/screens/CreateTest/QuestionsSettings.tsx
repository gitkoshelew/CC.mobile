import {
  BlockBox,
  TextBox,
  BlockBoxMarginLeft,
  ButtonAnswerBox,
} from '../../components/ui/ReadyStyles/Boxes';
import {QuestionsTabs} from '../../components/QuestionsTabs/index';
import {
  ViewCenter,
  ViewContainer,
  ViewFlexForTwoElements,
} from '../../components/ui/ReadyStyles/Containers/index';
import {CustomTextInput} from '../../components/ui/CustomTextInput';
import {Platform} from 'react-native';
import {AppSelect} from '../../components/ui/AppSelect';
import {TimerInput} from '../../components/TimerInput';
import {AddButton} from '../../components/ui/AddButton';
import {AppButton} from '../../components/ui/AppButton';
import {AddingAnswer} from '../../components/AddingAnswer';

export const QuestionsSettings = () => {
  const data = ['Single-choice', 'Multiple-choice'];

  return (
    <ViewContainer>
      <QuestionsTabs />
      <TextBox>Question</TextBox>
      <BlockBox>
        <CustomTextInput
          onChangeText={() => {}}
          multiline
          textAlignVertical={'top'}
          numberOfLines={Platform.OS === 'ios' ? undefined : 2}
          height={Platform.OS === 'ios' ? '100px' : undefined}
        />
      </BlockBox>
      <ViewFlexForTwoElements>
        <BlockBox>
          <TextBox>Question type</TextBox>
          <AppSelect size="m" data={data} type="primary" />
        </BlockBox>
        <BlockBoxMarginLeft>
          <TextBox>Timer</TextBox>
          <TimerInput />
        </BlockBoxMarginLeft>
      </ViewFlexForTwoElements>
      <TextBox>Answer choice</TextBox>
      <AddingAnswer />
      <AddingAnswer />
      <ButtonAnswerBox>
        <AddButton />
        <TextBox>Add answer</TextBox>
      </ButtonAnswerBox>
      <ViewCenter>
        <AppButton title="Save test" type="primary" onPress={() => {}} />
      </ViewCenter>
    </ViewContainer>
  );
};
