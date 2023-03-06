import React, {useCallback, useContext, useEffect, useMemo} from 'react';
import {View} from 'react-native';
import RadioForm, {RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {AnswerRadioContainer, styles, ViewMarginRight} from './styles';
import {Color} from '@theme/colors';
import {MultipleCheckboxes} from '@src/components/MultipleCheckboxes/MultipleCheckboxes';
import {changeStateCheck, setStateCheck} from '@src/bll/checkReducer';
import {useAppDispatch} from '@hooks/hooks';
import {CustomText} from '@src/components/ui/ReadyStyles/Boxes/index';
import {ThemeContext} from 'styled-components/native';

type AnswersOptionsPropsType = {
  onPress: (label: string, value: number) => void;
  data: string[];
  answerType: string;
  selected?: number;
};
export type IDataOptions = {
  label: string;
  value: number;
  isChecked: boolean;
};

export const AnswersOptions = ({
  onPress,
  data,
  selected,
  answerType,
}: AnswersOptionsPropsType) => {
  const theme = useContext(ThemeContext);

  const dispatch = useAppDispatch();
  const dataOptions: IDataOptions[] = useMemo(
    () =>
      [...data].map((e, i) => ({
        label: e,
        value: i,
        isChecked: false,
      })),
    [data],
  );
  const onPressRadio = (value: number) => {
    let answer: string = data[value];
    onPress(answer, value);
  };
  const onPressCheck = useCallback(
    (label: string, value: number, isChecked: boolean) => {
      dispatch(changeStateCheck({label, value, isChecked}));
    },
    [dispatch],
  );
  useEffect(() => {
    dispatch(setStateCheck(dataOptions));
  }, [dataOptions, dispatch]);

  return (
    <View>
      <RadioForm formHorizontal={false} animation={true}>
        {dataOptions.map((obj, i) => (
          <AnswerRadioContainer key={i}>
            <ViewMarginRight>
              {answerType === 'single' ? (
                <RadioButtonInput
                  obj={obj}
                  index={i}
                  isSelected={selected === i}
                  onPress={onPressRadio}
                  buttonOuterColor={selected === i ? Color.BlueLight : Color.GrayStrongDark}
                  buttonSize={15}
                  buttonOuterSize={30}
                />
              ) : (
                <MultipleCheckboxes item={obj} onPress={onPressCheck} />
              )}
            </ViewMarginRight>
            {answerType === 'single' ? (
              <RadioButtonLabel
                obj={obj}
                index={i}
                labelHorizontal={false}
                onPress={onPressRadio}
                labelStyle={styles(theme).textRadio}
              />
            ) : (
              <CustomText key={i} fs="16px">
                {obj.label}
              </CustomText>
            )}
          </AnswerRadioContainer>
        ))}
      </RadioForm>
    </View>
  );
};
