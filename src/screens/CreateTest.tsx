import {Platform} from 'react-native';
import {CustomTextInput} from '../components/ui/CustomTextInput';
import {TextBox, BlockBox} from '../components/ui/ReadyStyles/Boxes';
import {ViewContainer} from '../components/ui/ReadyStyles/Containers';

export const CreateTest = () => {
  return (
    <ViewContainer>
      <TextBox>Test title</TextBox>
      <BlockBox>
        <CustomTextInput onChangeText={() => {}} />
      </BlockBox>
      <TextBox>Description</TextBox>
      <>
        <CustomTextInput
          onChangeText={() => {}}
          multiline
          textAlignVertical={'top'}
          numberOfLines={Platform.OS === 'ios' ? undefined : 4}
          height={Platform.OS === 'ios' ? '100px' : undefined}
        />
      </>
    </ViewContainer>
  );
};
