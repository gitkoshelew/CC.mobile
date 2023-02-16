import {Control, Controller, FieldPath, FieldValues} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import React from 'react';
import {AppSelect} from '@src/components/ui/AppSelect/index';
import {TextBox, BlockBox} from '@src/components/ui/ReadyStyles/Boxes/index';

type TextInputHookFormPropsType<T extends FieldValues> = TextInputProps & {
  name: FieldPath<T>;
  data: string[];
  size: 's' | 'm';
  type: 'primary' | 'secondary';
  label?: string | null;
  rules?: Object;
  control: Control<T>;
};

export const AppSelectHookForm = <T extends FieldValues>({
  data,
  name,
  size,
  type,
  label,
  rules = {},
  control,
}: TextInputHookFormPropsType<T>) => {
  return (
    <BlockBox>
      {label && <TextBox>{label}</TextBox>}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {onChange, value}}) => (
          <AppSelect value={value} size={size} data={data} type={type} onSelect={onChange} />
        )}
      />
    </BlockBox>
  );
};
