import React from 'react';
import {CustomTextInput} from '../ui/CustomTextInput/index';
import {Control, Controller, FieldPath, FieldValues} from 'react-hook-form';
import {TextInputProps} from 'react-native';

type TextInputHookFormPropsType<T extends FieldValues> = TextInputProps & {
  control: Control<T>;
  name: FieldPath<T>;
  rules?: Object;
  height?: string | undefined;
};

export const TextInputHookForm = <T extends FieldValues>({
  control,
  name,
  rules = {},
  ...props
}: TextInputHookFormPropsType<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, value, onBlur}, fieldState: {error}}) => (
        <CustomTextInput
          onChangeText={onChange}
          value={value}
          {...props}
          onBlur={onBlur}
          error={error}
        />
      )}
    />
  );
};
