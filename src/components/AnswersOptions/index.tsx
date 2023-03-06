import {useContext} from 'react';
import {View} from 'react-native';
import RadioForm, {RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {AnswerRadioContainer, styles, ViewMarginRight} from './styles';
import {Color} from '@theme/colors';
import {MultipleCheckboxes} from '@src/components/MultipleCheckboxes/MultipleCheckboxes';
import {CustomText} from '@src/components/ui/ReadyStyles/Boxes/index';
import {ThemeContext} from 'styled-components/native';

type AnswersOptionsPropsType = {
  onPress: (label: string, value: number) => void;
  data: string[];
  answerType: string;
  selected?: number;
  dataOptions: IDataOptions[];
  onPressCheck: (label: string, value: number, isChecked: boolean) => void;
};
export type IDataOptions = {
  label: string;
  value: number;
  isChecked: boolean;
};

export const AnswersOptions = ({
  onPress,
  onPressCheck,
  dataOptions,
  data,
  selected,
  answerType,
}: AnswersOptionsPropsType) => {
  const theme = useContext(ThemeContext);

  const onPressRadio = (value: number) => {
    let answer: string = data[value];
    onPress(answer, value);
  };
  const handlerPressCheck = (label: string, value: number, isChecked: boolean) => {
    onPressCheck(label, value, isChecked);
  };

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
                <MultipleCheckboxes item={obj} onPress={handlerPressCheck} />
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
