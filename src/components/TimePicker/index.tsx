import React, {ReactElement} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Control, Controller} from 'react-hook-form';
import {CreateQuestionFieldType} from '@src/screens/CreateQuiz/components/CreateQuestion/CreateQuestion';

type TimePickerPropsType = {
  control: Control<CreateQuestionFieldType>;
};

export const TimePicker = ({control}: TimePickerPropsType) => {
  const getMinutesItems = () => {
    const items: ReactElement[] = [];
    for (let i = 0; i <= 59; i++) {
      items.push(<Picker.Item testID="minutesItem" key={i} value={i} label={String(i)} />);
    }
    return items;
  };

  const getSecondsItems = () => {
    const items: ReactElement[] = [];
    for (let i = 0; i <= 59; i += 5) {
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
                {getMinutesItems()}
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
                {getSecondsItems()}
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
