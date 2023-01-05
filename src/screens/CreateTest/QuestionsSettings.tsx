import {ListQuestionsBtn} from '../../components/ListQuestionsBtn/index';
import {
  ViewCenter,
  ViewContainer,
} from '../../components/ui/ReadyStyles/Containers/index';
import {ButtonAnswerBox, TextBox} from '../../components/ui/ReadyStyles/Boxes';
import {AddButton} from '../../components/ui/AddButton';
import {AppButton} from '../../components/ui/AppButton';
import {AddingAnswer} from '../../components/AddingAnswer';

export const QuestionsSettings = () => {
  return (
    <ViewContainer>
      <ListQuestionsBtn />
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
