import {Platform} from 'react-native';
import {TextBox, BlockBox} from '@src/components/ui/ReadyStyles/Boxes';
import {
  ViewContainer,
  ViewCenter,
} from 'src/components/ui/ReadyStyles/Containers';
import {AppButton} from 'src/components/ui/AppButton';
import {useAppDispatch, useAppNavigate} from '@hooks/hooks';
import {ScreenList} from '@src/navigation/navigation';
import {AppSelect} from 'src/components/ui/AppSelect';
import {SwitchSelectors} from 'src/components/SwitchSelectors';
import {useCallback, useState} from 'react';
import {useForm} from 'react-hook-form';
import {TextInputHookForm} from '@src/components/TextInputHookForm';
import {createTest} from '@src/bll/testReducer';

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
  const {navigate} = useAppNavigate();
  const [selectorsData, setSelectorsData] = useState<SelectorsType>({
    theme: 'Verify',
    difficulty: 'easy',
    numberQuestions: 10,
  });

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

  const selectsNumberQuestionsPressed = useCallback(
    (value: string) => {
      setSelectorsData({...selectorsData, numberQuestions: Number(value)});
    },
    [selectorsData],
  );
  const onPressQuestionsSettings = async (values: inputsFieldType) => {
    try {
      await dispatch(
        createTest({
          ...values,
          authorId: 1,
          difficulty: 'light',
          topicId: 1,
        }),
      )
        .unwrap()
        .then(res => {
          navigate(ScreenList.CREATE_TEST, {
            screen: ScreenList.QUESTIONS_SET,
            params: {
              numberQuestions: selectorsData.numberQuestions,
              idNewTest: res.id,
            },
          });
        });
    } catch (e) {
      console.error(e);
    }
  };

  const disabledQuestionsSettings = Object.keys(errors).length === 0;

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
