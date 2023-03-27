import {CustomInput} from './styles';
import {TextInputProps, View} from 'react-native';
import {Color} from '@theme/colors';
import {FieldError} from 'react-hook-form';
import {TextError} from '../ReadyStyles/TextError';

export type CustomTextInputPropsType = {
  height?: string | undefined;
  color?: Color;
  onChangeText?: (value: string) => void;
  error?: FieldError;
  typeInput?: 'timer';
};
type CustomTextInputCombinePropsType = TextInputProps & CustomTextInputPropsType;

export const CustomTextInput = ({
  onChangeText,
  value,
  ...props
}: CustomTextInputCombinePropsType) => {
  const onChangeTextHandler = (text: string) => {
    onChangeText && onChangeText(text);
  };

  return (
    <View>
      <CustomInput {...props} onChangeText={onChangeTextHandler} value={value} />
      {props.error && <TextError>{props.error?.message || ''}</TextError>}
    </View>
  );
};
