import {ListQuestionsBtn} from '../../components/ListQuestionsBtn/index';
import {
  ViewCenter,
  ViewContainer,
} from '../../components/ui/ReadyStyles/Containers/index';
import {
  BlockAnswerBox,
  ButtonAnswerBox,
  TextBox,
} from '../../components/ui/ReadyStyles/Boxes';
import {CustomTextInput} from '../../components/ui/CustomTextInput';
import {CheckBox} from '../../components/ui/CheckBox';
import {StyleSheet, View} from 'react-native';
import {AddButton} from '../../components/ui/AddButton';
import {AppButton} from '../../components/ui/AppButton';

export const QuestionsSettings = () => {
  return (
    <ViewContainer>
      <ListQuestionsBtn />
      <TextBox>Answer choice</TextBox>
      <BlockAnswerBox>
        <View style={styles.inputBox}>
          <CustomTextInput onChangeText={() => {}} />
        </View>
        <CheckBox />
      </BlockAnswerBox>
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
const styles = StyleSheet.create({
  inputBox: {
    width: 290,
  },
});
