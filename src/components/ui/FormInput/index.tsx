import {useState} from 'react';
import {TextInputProps} from 'react-native';
import {Color} from 'theme/colors';
import {CustomFormInput} from './styles';

export type CustomFormInputPropsType = {
  placeholder: string;
  onChangeText: (value: string) => void;
};

export type CustomFormInputCombinePropsType = TextInputProps &
  CustomFormInputPropsType;

export const FormInput = (props: CustomFormInputCombinePropsType) => {
  const [isFocused, setIsFocused] = useState(false);

  const stylesOnFocus = {
    borderColor: isFocused ? Color.BlueLight : Color.White,
  };

  const onChangeTextHandler = (value: string) => {
    props.onChangeText(value);
  };
  return (
    <CustomFormInput
      {...props}
      onChangeText={onChangeTextHandler}
      placeholderTextColor={Color.Gray}
      onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
      style={stylesOnFocus}
    />
  );
};
