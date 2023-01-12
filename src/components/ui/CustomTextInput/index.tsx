import {CustomInput} from './styles';
import {TextInputProps} from 'react-native';
import {Color} from '@theme/colors';

export type CustomTextInputPropsType = {
  height?: string | undefined;
  color?: Color;
  onChangeText: (value: string) => void;
};

export type CustomTextInputCombinePropsType = TextInputProps &
  CustomTextInputPropsType;

export const CustomTextInput = (props: CustomTextInputCombinePropsType) => {
  const onChangeTextHandler = (value: string) => {
    props.onChangeText(value);
  };
  return (
    <CustomInput
      {...props}
      onChangeText={onChangeTextHandler}
      value={props.value}
    />
  );
};
