import {Platform} from 'react-native';
import {CustomTextInput} from '../../components/ui/CustomTextInput';
import {TextBox, BlockBox} from '../../components/ui/ReadyStyles/Boxes';
import {
  ViewContainer,
  ViewCenter,
} from '../../components/ui/ReadyStyles/Containers';
import {AppButton} from '../../components/ui/AppButton';
import {useAppNavigate} from '../../hooks/hooks';
import {ScreenList} from '../../navigation/navigation';
import {AppSelect} from '../../components/ui/AppSelect';
import {SwitchSelectors} from '../../components/SwitchSelector';

export const TestSettings = () => {
  const data = ['Verify', 'Date', 'Popularity', 'Something else'];
  const {navigate} = useAppNavigate();
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
      <ViewCenter>
        <AppButton
          title="Questions settings"
          type="primary"
          onPress={() =>
            navigate(ScreenList.CREATE_TEST, {screen: ScreenList.QUESTIONS_SET})
          }
        />
      </ViewCenter>
    </ViewContainer>
  );
};
