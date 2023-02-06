import {Platform} from 'react-native';
import {BlockBox, TextBox} from '@src/components/ui/ReadyStyles/Boxes';
import {ViewCenter, ViewContainer} from '@src/components/ui/ReadyStyles/Containers';
import {AppButton} from '@src/components/ui/AppButton';
import {useAppDispatch, useAppNavigate, useAppSelector} from '@hooks/hooks';
import {ScreenList} from '@src/navigation/navigation';
import {AppSelect} from '@src/components/ui/AppSelect';
import {SwitchSelectors} from '@src/components/SwitchSelectors';
import {useCallback, useState} from 'react';
import {useForm} from 'react-hook-form';
import {TextInputHookForm} from '@src/components/TextInputHookForm';
import {createQuiz} from '@src/bll/quizReducer';
import {Loader} from '@src/components/ui/Loader/index';
import {TypeSwitchSelect} from '@customTypes/SwitchSelectjrs-types';
import {TypeAppButton} from '@customTypes/AppButtun-types';

export type SelectorsType = {
  theme: string;
  numberQuestions: number;
};

type inputsFieldType = {
  title: string;
  description: string;
};

const numberOfLines = Platform.OS === 'ios' ? undefined : 4;

export const TestSettings = () => {
  const data = ['Verify', 'Date', 'Popularity', 'Something else'];
  const isFetching = useAppSelector(state => state.app.isFetching);
  const dispatch = useAppDispatch();
  const {navigate} = useAppNavigate();
  const [selectorsData, setSelectorsData] = useState<SelectorsType>({
    theme: 'Verify',
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

  const selectsNumberQuestionsPressed = useCallback(
    (value: string) => {
      setSelectorsData({...selectorsData, numberQuestions: Number(value)});
    },
    [selectorsData],
  );
  const onPressQuestionsSettings = async (values: inputsFieldType) => {
    try {
      await dispatch(
        createQuiz({
          ...values,
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
    <>
      {isFetching && <Loader />}
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
            numberOfLines={numberOfLines}
            height={Platform.OS === 'ios' ? '100px' : undefined}
          />
        </BlockBox>
        <TextBox>Theme</TextBox>
        <BlockBox>
          <AppSelect size="m" data={data} type="primary" onSelect={selectsThemePressed} />
        </BlockBox>
        <TextBox>Number of questions</TextBox>
        <BlockBox>
          <SwitchSelectors
            type={TypeSwitchSelect.NUMBER}
            onPress={selectsNumberQuestionsPressed}
          />
        </BlockBox>
        <ViewCenter>
          <AppButton
            title="Questions settings"
            type={TypeAppButton.PRIMARY}
            onPress={handleSubmit(onPressQuestionsSettings)}
            disabled={!disabledQuestionsSettings}
          />
        </ViewCenter>
      </ViewContainer>
    </>
  );
};
