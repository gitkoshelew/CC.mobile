import BouncyCheckbox from 'react-native-bouncy-checkbox';
import React, {useState} from 'react';
import {
  ICheckboxComponent,
  IItem,
} from '@src/components/MultipleCheckboxes/MultipleCheckboxes';
import {Color} from '@theme/colors';

type IToggle = {[key: string]: boolean};

export const CheckboxComponent = ({item: {value, label}, onPress}: IItem) => {
  const [toggleCheckbox, setToggleCheckbox] = useState<IToggle>({});
  const handleToggleState = (items: ICheckboxComponent) => {
    setToggleCheckbox({
      [items.value]: !toggleCheckbox[items.value],
    });
    onPress(items.label, items.value, !toggleCheckbox[items.value]);
  };

  return (
    <BouncyCheckbox
      disableBuiltInState
      fillColor={Color.BlueLight}
      size={30}
      isChecked={toggleCheckbox[value]}
      key={value}
      onPress={() => handleToggleState({value, label})}
    />
  );
};
