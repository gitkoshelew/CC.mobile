import {useState} from 'react';
import {TextInputProps} from 'react-native';
import {Color} from '@theme/colors';
import {CustomFormInput} from './styles';

export const FormInput = (props: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const stylesOnFocus = {
    borderColor: isFocused ? Color.BlueLight : Color.GrayMedium,
  };

  return (
    <CustomFormInput
      {...props}
      placeholderTextColor={Color.GrayMedium}
      onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
      style={stylesOnFocus}
    />
  );
};
