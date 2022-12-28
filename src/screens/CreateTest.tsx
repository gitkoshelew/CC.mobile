import {Platform} from 'react-native';
import {CustomTextInput} from '../components/ui/CustomTextInput';
import {
  ViewBox,
  TextBox,
  BlockBox,
} from '../components/ui/ReadyStyles/Boxes/Boxes';

export const CreateTest = () => {
  return (
    <ViewBox>
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
    </ViewBox>
  );
};
