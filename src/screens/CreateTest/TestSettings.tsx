import {Platform} from 'react-native';
import {CustomTextInput} from '../../components/ui/CustomTextInput';
import {TextBox, BlockBox} from '../../components/ui/ReadyStyles/Boxes';
import {
  ViewContainer,
  ViewCenter,
  ContentContainerMax,
} from '../../components/ui/ReadyStyles/Containers';
import {AppButton} from '../../components/ui/AppButton';
import {useAppDispatch, useAppNavigate} from '../../hooks/hooks';
import {ScreenList} from '../../navigation/navigation';
import {AppSelect} from '../../components/ui/AppSelect';
import {SwitchSelectors} from '../../components/SwitchSelector';
import {useCallback, useState} from 'react';
import {addTestSettings} from '../../bll/testReducer';
import {difficultyType} from 'types/test-types';
import {DraggableBottomSheet} from '../../components/DraggableBottomSheet';

export type testSettingData = {
  title: string;
  description: string;
  theme: string;
  difficulty: difficultyType;
  numberQuestions: number;
};

export const TestSettings = () => {
  const data = ['Verify', 'Date', 'Popularity', 'Something else'];
  const dispatch = useAppDispatch();
  const [testSettingData, setTestSettingData] = useState<testSettingData>({
    title: '',
    description: '',
    theme: '',
    difficulty: 'Easy',
    numberQuestions: 10,
  });
  const {navigate} = useAppNavigate();

  const selectsNumberQuestionsHandler = useCallback(
    (value: string) => {
      setTestSettingData({...testSettingData, numberQuestions: Number(value)});
    },
    [testSettingData],
  );

  const onPressQuestionsSettings = () => {
    dispatch(addTestSettings(testSettingData));
    navigate(ScreenList.CREATE_TEST, {screen: ScreenList.QUESTIONS_SET});
  };

  return (
    <ContentContainerMax>
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
          <AppSelect size="m" data={data} type="primary" onSelect={() => {}} />
        </BlockBox>
        <TextBox>Test level</TextBox>
        <BlockBox>
          <SwitchSelectors type="level" />
        </BlockBox>
        <TextBox>Number of questions</TextBox>
        <BlockBox>
          <SwitchSelectors
            type="number"
            onPress={selectsNumberQuestionsHandler}
          />
        </BlockBox>
        <ViewCenter>
          <AppButton
            title="Questions settings"
            type="primary"
            onPress={onPressQuestionsSettings}
          />
        </ViewCenter>
      </ViewContainer>
      <DraggableBottomSheet />
    </ContentContainerMax>
  );
};
