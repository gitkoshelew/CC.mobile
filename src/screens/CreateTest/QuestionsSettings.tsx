import {
  BlockBox,
  TextBox,
  BlockBoxMarginLeft,
} from '../../components/ui/ReadyStyles/Boxes';
import {QuestionsTabs} from '../../components/QuestionsTabs/index';
import {
  ViewCenter,
  ViewFlexForTwoElements,
  ViewContainer,
} from '../../components/ui/ReadyStyles/Containers/index';
import {CustomTextInput} from '../../components/ui/CustomTextInput';
import {Platform, ScrollView} from 'react-native';
import {AppSelect} from '../../components/ui/AppSelect';
import {TimerInput} from '../../components/TimerInput';
import {AppButton} from '../../components/ui/AppButton';
import {CreateAnswer} from './CreateAnswer/index';

export const QuestionsSettings = () => {
  const data = ['Single-choice', 'Multiple-choice'];

  return (
    <ViewContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
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
        <CreateAnswer />
        <ViewCenter>
          <AppButton title="Save test" type="primary" onPress={() => {}} />
        </ViewCenter>
      </ScrollView>
    </ViewContainer>
  );
};
