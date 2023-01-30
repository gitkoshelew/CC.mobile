import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import RadioForm, {
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
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
  check: boolean;
};

export const AnswersOptions = ({
  onPress,
  data,
  selected,
  answerType,
}: AnswersOptionsPropsType) => {
  const dispatch = useAppDispatch();
  const transformData = data.map((el, i) => ({label: el, value: i}));
  const dataOptions: IDataOptions[] = [...data].map((e, i) => ({
    label: e,
    value: i,
    check: false,
  }));
  const onPressRadio = (value: number) => {
    let answer: string = data[value];
    onPress(answer, value);
  };
  const onPressCheck = (label: string, value: number, check: boolean) => {
    dispatch(changeStateCheck({label, value, check}));
  };

  useEffect(() => {
    dispatch(setStateCheck(dataOptions));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answerType]);

  return (
    <View>
      <RadioForm formHorizontal={false} animation={true}>
        {transformData.map((obj, i) => (
          <AnswerRadioContainer key={i}>
            <ViewMarginRight>
              {answerType === 'single' ? (
                <RadioButtonInput
                  obj={obj}
                  index={i}
                  isSelected={selected === i}
                  onPress={onPressRadio}
                  buttonOuterColor={
                    selected === i ? Color.BlueLight : Color.GrayStrongDark
                  }
                  buttonSize={15}
                  buttonOuterSize={30}
                />
              ) : (
                <MultipleCheckboxes it={obj} onPress={onPressCheck} />
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
