import React, {ReactElement, useContext} from 'react';
import {Picker} from '@react-native-picker/picker';
import {ThemeContext} from 'styled-components/native';
import {styles} from '@src/components/TimePicker/styles';

type PickerItemPropsType = {
  value: number;
  onChange: (value: number) => void;
  type: 'minutes' | 'seconds';
};

export const PickerItem = ({type, value, onChange}: PickerItemPropsType) => {
  const theme = useContext(ThemeContext);

  const getItems = (typeTimer: 'minutes' | 'seconds') => {
    let step = typeTimer === 'seconds' ? 5 : 1;
    const items: ReactElement[] = [];
    for (let i = 0; i <= 59; i += step) {
      items.push(
        <Picker.Item
          key={i}
          value={i}
          label={String(i)}
          style={styles(theme).pickerItemAndroid}
          color={theme.textMainColor}
        />,
      );
    }
    return items;
  };

  return (
    <Picker
      style={styles(theme).picker}
      mode="dropdown"
      itemStyle={styles(theme).itemPicker}
      selectedValue={value}
      onValueChange={onChange}>
      {getItems(type)}
    </Picker>
  );
};
