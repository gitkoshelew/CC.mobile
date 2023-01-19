import React, {useState} from 'react';
import {View} from 'react-native';
import RadioForm, {
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {AnswerRadioContainer, styles, ViewMarginRight} from './styles';
import {Color} from '@theme/colors';
import {CheckBox} from '@src/components/ui/CheckBox';

type AnswersOptionsPropsType = {
  onPress: (value: number) => void;
  data: string[];
  answerType: string;
};

export const AnswersOptions = ({
  onPress,
  data,
  answerType,
}: AnswersOptionsPropsType) => {
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
              {answerType === 'single' ? (
                <RadioButtonInput
                  obj={obj}
                  index={i}
                  isSelected={isActiveRadio === i}
                  onPress={onPressRadio}
                  buttonOuterColor={
                    isActiveRadio === i ? Color.BlueLight : Color.GrayStrongDark
                  }
                  buttonSize={15}
                  buttonOuterSize={30}
                />
              ) : (
                <CheckBox onPress={() => {}} checked={false} />
              )}
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
