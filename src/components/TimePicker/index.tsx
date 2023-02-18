import React, {ReactElement} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Control, Controller} from 'react-hook-form';
import {InputsFieldType} from '@src/screens/CreateTest/CreateQuestion/index';

type TimePickerPropsType = {
  control: Control<InputsFieldType>;
};

export const TimePicker = ({control}: TimePickerPropsType) => {
  const getItems = () => {
    const items: ReactElement[] = [];
    for (let i = 0; i <= 59; i++) {
      items.push(<Picker.Item testID="minutesItem" key={i} value={i} label={String(i)} />);
    }
    return items;
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.inner}>
          <Text style={styles.text}>Min.</Text>
          <Controller
            control={control}
            name="minutes"
            render={({field: {onChange, value}}) => (
              <Picker
                style={styles.picker}
                mode="dropdown"
                itemStyle={styles.itemPicker}
                selectedValue={value}
                onValueChange={onChange}>
                {getItems()}
              </Picker>
            )}
          />
        </View>
        <View style={styles.inner}>
          <Text style={styles.text}>Sec.</Text>
          <Controller
            control={control}
            name="seconds"
            render={({field: {onChange, value}}) => (
              <Picker
                style={styles.picker}
                mode="dropdown"
                itemStyle={styles.itemPicker}
                selectedValue={value}
                onValueChange={onChange}>
                {getItems()}
              </Picker>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  text: {
    fontFamily: 'Montserrat-Regular',
  },
});
