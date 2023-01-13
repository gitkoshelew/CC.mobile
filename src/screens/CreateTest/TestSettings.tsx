import {Platform} from 'react-native';
import {TextBox, BlockBox} from '../../components/ui/ReadyStyles/Boxes';
import {
  ViewContainer,
  ViewCenter,
} from '../../components/ui/ReadyStyles/Containers';
import {AppButton} from '../../components/ui/AppButton';
import {useAppDispatch, useAppNavigate} from '../../hooks/hooks';
import {ScreenList} from '../../navigation/navigation';
import {AppSelect} from '../../components/ui/AppSelect';
import {SwitchSelectors} from '../../components/SwitchSelectors';
import {useCallback, useState} from 'react';
import {addTestSettings} from '../../bll/testReducer';
import {useForm} from 'react-hook-form';
import {TextInputHookForm} from '../../components/TextInputHookForm/index';

export type SelectorsType = {
  theme: string;
  difficulty: string;
  numberQuestions: number;
};

type inputsFieldType = {
  title: string;
  description: string;
};

export const TestSettings = () => {
  const data = ['Verify', 'Date', 'Popularity', 'Something else'];
  const dispatch = useAppDispatch();
  const [selectorsData, setSelectorsData] = useState<SelectorsType>({
    theme: 'Verify',
    difficulty: 'Easy',
    numberQuestions: 10,
  });
  const {navigate} = useAppNavigate();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<inputsFieldType>();

  const selectsThemePressed = useCallback(
    (value: string) => {
      setSelectorsData({...selectorsData, theme: value});
    },
    [selectorsData],
  );

  const selectsDifficultyPressed = useCallback(
    (value: string) => {
      setSelectorsData({...selectorsData, difficulty: value});
    },
    [selectorsData],
  );

  const disabledQuestionsSettings = Object.keys(errors).length === 0;
  const selectsNumberQuestionsPressed = useCallback(
    (value: string) => {
      setSelectorsData({...selectorsData, numberQuestions: Number(value)});
    },
    [selectorsData],
  );
  const onPressQuestionsSettings = (values: inputsFieldType) => {
    dispatch(addTestSettings({...values, ...selectorsData}));
    navigate(ScreenList.CREATE_TEST, {screen: ScreenList.QUESTIONS_SET});
  };

  return (
    <ViewContainer>
      <TextBox>Test title</TextBox>
      <BlockBox>
        <TextInputHookForm
          name="title"
          control={control}
          rules={{
            required: 'Title is required',
            minLength: {
              value: 3,
              message: 'Title should be minimum 3 characters long',
            },
            maxLength: {
              value: 20,
              message: 'Title should be maximum 50 characters long',
            },
          }}
        />
      </BlockBox>
      <TextBox>Description</TextBox>
      <BlockBox>
        <TextInputHookForm
          name="description"
          control={control}
          rules={{
            required: 'Description is required',
            maxLength: {
              value: 50,
              message: 'Description should be maximum 50 characters long',
            },
          }}
          multiline
          textAlignVertical={'top'}
          numberOfLines={Platform.OS === 'ios' ? undefined : 4}
          height={Platform.OS === 'ios' ? '100px' : undefined}
        />
      </BlockBox>
      <TextBox>Theme</TextBox>
      <BlockBox>
        <AppSelect
          size="m"
          data={data}
          type="primary"
          onSelect={selectsThemePressed}
        />
      </BlockBox>
      <TextBox>Test level</TextBox>
      <BlockBox>
        <SwitchSelectors type="level" onPress={selectsDifficultyPressed} />
      </BlockBox>
      <TextBox>Number of questions</TextBox>
      <BlockBox>
        <SwitchSelectors
          type="number"
          onPress={selectsNumberQuestionsPressed}
        />
      </BlockBox>
      <ViewCenter>
        <AppButton
          title="Questions settings"
          type="primary"
          onPress={handleSubmit(onPressQuestionsSettings)}
          disabled={!disabledQuestionsSettings}
        />
      </ViewCenter>
    </ViewContainer>
  );
};
