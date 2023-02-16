import {Control, Controller, FieldPath, FieldValues} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import React from 'react';
import {TypeSwitchSelect} from '@customTypes/SwitchSelectjrs-types';
import {SwitchSelectors} from '@src/components/SwitchSelectors/index';
import {TextBox, BlockBox} from '@src/components/ui/ReadyStyles/Boxes/index';

type TextInputHookFormPropsType<T extends FieldValues> = TextInputProps & {
  name: FieldPath<T>;
  type: TypeSwitchSelect;
  label?: string | null;
  rules?: Object;
  control: Control<T>;
};

export const SwitchSelectorsHookForm = <T extends FieldValues>({
  name,
  label,
  type,
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
          <SwitchSelectors type={type} onPress={onChange} value={value} />
        )}
      />
    </BlockBox>
  );
};
