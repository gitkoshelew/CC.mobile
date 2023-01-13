import React, {useState} from 'react';
import {View} from 'react-native';
import RadioForm, {
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {AnswerRadioContainer, styles, ViewMarginRight} from './styles';
import {Color} from '@theme/colors';

type AnswersOptionsPropsType = {
  onPress: (value: number) => void;
  data: string[];
};

export const AnswersOptions = ({onPress, data}: AnswersOptionsPropsType) => {
  const transformData = data.map((el, i) => ({label: el, value: i}));
  const [isActiveRadio, setIsActiveRadio] = useState<number>();

  const onPressRadio = (value: number) => {
    setIsActiveRadio(value);
    onPress(value);
  };

  return (
    <View>
      <RadioForm formHorizontal={false} animation={true}>
        {transformData.map((obj, i) => (
          <AnswerRadioContainer key={i}>
            <ViewMarginRight>
              <RadioButtonInput
                obj={obj}
                index={i}
                isSelected={isActiveRadio === i}
                onPress={onPressRadio}
                buttonOuterColor={
                  isActiveRadio === i ? Color.BlueLight : Color.GrayStrongDark
                }
                buttonSize={15}
                buttonOuterSize={25}
              />
            </ViewMarginRight>
            <RadioButtonLabel
              obj={obj}
              index={i}
              labelHorizontal={false}
              onPress={onPressRadio}
              labelStyle={styles.textRadio}
            />
          </AnswerRadioContainer>
        ))}
      </RadioForm>
    </View>
  );
};
