import {SuperInput} from './styles';
import {TextInputProps} from 'react-native';
import {Color} from 'theme/colors';

export type SuperTextInputPropsType = {
  color?: Color;
  onChangeText: (value: string) => void;
};

export type SuperTextInputCombinePropsType = TextInputProps &
  SuperTextInputPropsType;

export const SuperTextInput = (props: SuperTextInputCombinePropsType) => {
  const onChangeTextHandler = (value: string) => {
    props.onChangeText(value);
  };
  return (
    <SuperInput
      {...props}
      onChangeText={onChangeTextHandler}
      value={props.value}
    />
  );
};
