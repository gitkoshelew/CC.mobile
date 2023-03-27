import {Control, Controller, FieldPath, FieldValues} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import React from 'react';
import {TypeSwitchSelect} from '@customTypes/SwitchSelectjrs-types';
import {SwitchSelectors} from '@src/components/SwitchSelectors';
import {TextBox} from '@src/components/ui/ReadyStyles/Boxes';

type TextInputHookFormPropsType<T extends FieldValues> = TextInputProps & {
  name: FieldPath<T>;
  type: TypeSwitchSelect;
  label?: string | null;
  rules?: Object;
  control: Control<T>;
  onPressSwitchSelect?: (value: string, onPress: (value: string) => void) => void;
};

export const SwitchSelectorsHookForm = <T extends FieldValues>({
  name,
  label,
  type,
  rules = {},
  control,
  onPressSwitchSelect,
}: TextInputHookFormPropsType<T>) => {
  const handlerSwitchSelector = (value: string, onPress: (value: string) => void) => {
    onPress(value);
    onPressSwitchSelect && onPressSwitchSelect(value, onPress);
  };

  return (
    <>
      {label && <TextBox>{label}</TextBox>}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {onChange, value}}) => (
          <SwitchSelectors
            type={type}
            onPress={(selector: string) => handlerSwitchSelector(selector, onChange)}
            value={value}
          />
        )}
      />
    </>
  );
};
