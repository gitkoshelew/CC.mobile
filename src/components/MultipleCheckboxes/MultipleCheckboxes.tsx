import React, {useState} from 'react';
import {View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type ICheckboxComponent = {
  label: string;
  value: number;
};

type IItem = {
  item: ICheckboxComponent;
};
type IIt = {
  it: ICheckboxComponent;
  onPress: (label: string, value: number, check: boolean) => void;
};

export const MultipleCheckboxes = ({it, onPress}: IIt) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [toggleCheckbox, setToggleCheckbox] = useState<any>({});
  const handleToggleState = (item: ICheckboxComponent) => {
    setToggleCheckbox({
      [item.value]: !toggleCheckbox[item.value],
    });
    onPress(item.label, item.value, !toggleCheckbox[item.value]);
  };
  const CheckboxComponent = ({item}: IItem) => {
    const {value, label} = item;
    return (
      <BouncyCheckbox
        disableBuiltInState
        fillColor="#4287f5"
        size={30}
        isChecked={toggleCheckbox[value]}
        key={value}
        onPress={() => handleToggleState({value, label})}
      />
    );
  };
  return (
    <View>
      <CheckboxComponent item={{...it}} />
    </View>
  );
};
