import React from 'react';
import {TextInputHookForm} from '@src/components/TextInputHookForm/index';
import {BlockBox, TextBox} from '@src/components/ui/ReadyStyles/Boxes/index';
import {Control, FieldPath, FieldValues} from 'react-hook-form';
import {TextInputProps} from 'react-native';

type TextInputWithLabelPropsType<T extends FieldValues> = TextInputProps & {
  label?: string | null;
  control: Control<T>;
  name: FieldPath<T>;
  rules?: Object;
  height?: string | undefined;
};

export const TextInputWithLabel = <T extends FieldValues>({
  label,
  control,
  name,
  rules,
  ...props
}: TextInputWithLabelPropsType<T>) => {
  return (
    <BlockBox>
      {label && <TextBox>{label}</TextBox>}
      <TextInputHookForm {...props} name={name} control={control} rules={rules} />
    </BlockBox>
  );
};
