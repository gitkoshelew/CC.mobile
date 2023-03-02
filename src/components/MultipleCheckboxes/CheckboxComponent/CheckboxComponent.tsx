import BouncyCheckbox from 'react-native-bouncy-checkbox';
import React from 'react';
import {IItem} from '@src/components/MultipleCheckboxes/MultipleCheckboxes';
import {Color} from '@theme/colors';

export const CheckboxComponent = ({item: {value, label, isChecked}, onPress}: IItem) => {
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
