import React, {useCallback, useEffect, useMemo} from 'react';
import {Text, View} from 'react-native';
import RadioForm, {RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {AnswerRadioContainer, styles, ViewMarginRight} from './styles';
import {Color} from '@theme/colors';
import {MultipleCheckboxes} from '@src/components/MultipleCheckboxes/MultipleCheckboxes';
import {changeStateCheck, setStateCheck} from '@src/bll/checkReducer';
import {useAppDispatch} from '@hooks/hooks';

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
                labelStyle={styles.textRadio}
              />
            ) : (
              <Text key={i} style={styles.textRadio}>
                {obj.label}
              </Text>
            )}
          </AnswerRadioContainer>
        ))}
      </RadioForm>
    </View>
  );
};
