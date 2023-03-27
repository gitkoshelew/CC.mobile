import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Color} from '@theme/colors';

export type ICheckboxComponent = {
  label: string;
  value: number;
  isChecked: boolean;
};
export type IItem = {
  item: ICheckboxComponent;
  onPress: (label: string, value: number, isChecked: boolean) => void;
};

export const MultipleCheckboxes = ({item: {value, label, isChecked}, onPress}: IItem) => {
  const handleToggleState = () => {
    onPress(label, value, !isChecked);
  };
  return (
    <BouncyCheckbox
      disableBuiltInState
      fillColor={Color.BlueLight}
      size={30}
      isChecked={isChecked}
      key={value}
      onPress={() => handleToggleState()}
    />
  );
};
