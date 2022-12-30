import {Platform} from 'react-native';
import {CustomTextInput} from '../components/ui/CustomTextInput';
import {TextBox, BlockBox} from '../components/ui/ReadyStyles/Boxes';
import {
  CreateTestButtonContainer,
  ViewContainer,
} from '../components/ui/ReadyStyles/Containers';
import {AppSelect} from '../components/ui/AppSelect';
import {SwitchSelectors} from '../components/SwitchSelector';
import {AppButton} from '../components/ui/AppButton';

export const CreateTest = () => {
  const data = ['Verify', 'Date', 'Popularity', 'Something else'];
  return (
    <ViewContainer>
      <TextBox>Test title</TextBox>
      <BlockBox>
        <CustomTextInput onChangeText={() => {}} />
      </BlockBox>
      <TextBox>Description</TextBox>
      <BlockBox>
        <CustomTextInput
          onChangeText={() => {}}
          multiline
          textAlignVertical={'top'}
          numberOfLines={Platform.OS === 'ios' ? undefined : 4}
          height={Platform.OS === 'ios' ? '100px' : undefined}
        />
      </BlockBox>
      <TextBox>Theme</TextBox>
      <BlockBox>
        <AppSelect size="m" data={data} type="primary" />
      </BlockBox>
      <TextBox>Test level</TextBox>
      <BlockBox>
        <SwitchSelectors type="level" />
      </BlockBox>
      <TextBox>Number of questions</TextBox>
      <BlockBox>
        <SwitchSelectors type="number" />
      </BlockBox>
      <CreateTestButtonContainer>
        <AppButton title="Questions settings" type="primary" />
      </CreateTestButtonContainer>
    </ViewContainer>
  );
};
