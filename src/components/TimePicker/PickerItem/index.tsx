import React, {ReactElement} from 'react';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet} from 'react-native';

type PickerItemPropsType = {
  value: number;
  onChange: (value: number) => void;
  type: 'minutes' | 'seconds';
};

export const PickerItem = ({type, value, onChange}: PickerItemPropsType) => {
  const getItems = (typeTimer: 'minutes' | 'seconds') => {
    let step = typeTimer === 'seconds' ? 5 : 1;
    const items: ReactElement[] = [];
    for (let i = 0; i <= 59; i += step) {
      items.push(<Picker.Item key={i} value={i} label={String(i)} />);
    }
    return items;
  };

  return (
    <Picker
      style={styles.picker}
      mode="dropdown"
      itemStyle={styles.itemPicker}
      selectedValue={value}
      onValueChange={onChange}>
      {getItems(type)}
    </Picker>
  );
};

const styles = StyleSheet.create({
  picker: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
  },
  itemPicker: {
    width: 85,
    height: 50,
    fontSize: 14,
  },
});
