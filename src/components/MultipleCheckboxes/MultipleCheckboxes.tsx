import React from 'react';
import {View} from 'react-native';
import {CheckboxComponent} from '@src/components/MultipleCheckboxes/CheckboxComponent/CheckboxComponent';

export type ICheckboxComponent = {
  label: string;
  value: number;
  isChecked: boolean;
};
export type IItem = {
  item: ICheckboxComponent;
  onPress: (label: string, value: number, isChecked: boolean) => void;
};

export const MultipleCheckboxes = ({item, onPress}: IItem) => {
  return (
    <View>
      <CheckboxComponent item={{...item}} onPress={onPress} />
    </View>
  );
};
