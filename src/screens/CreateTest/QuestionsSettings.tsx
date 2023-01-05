import {
  BlockBox,
  TextBox,
  BlockBoxMarginLeft,
} from '../../components/ui/ReadyStyles/Boxes';
import {ListQuestionsBtn} from '../../components/ListQuestionsBtn/index';
import {
  ViewContainer,
  ViewFlexForTwoElements,
} from '../../components/ui/ReadyStyles/Containers/index';
import {CustomTextInput} from '../../components/ui/CustomTextInput';
import {Platform} from 'react-native';
import {AppSelect} from '../../components/ui/AppSelect';
import {TimerInput} from '../../components/TimerInput';

export const QuestionsSettings = () => {
  const data = ['Single-choice', 'Multiple-choice'];

  return (
    <ViewContainer>
      <ListQuestionsBtn />
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
    </ViewContainer>
  );
};
