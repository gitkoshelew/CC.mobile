import {StyleSheet, ViewStyle} from 'react-native';
import {DefaultTheme} from 'styled-components';

export const styles = StyleSheet.create((theme?: DefaultTheme) => ({
  picker: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
  } as ViewStyle,
  itemPicker: {
    width: 85,
    height: 50,
    fontSize: 14,
  },
  pickerItemAndroid: {
    backgroundColor: theme?.block,
  } as ViewStyle,
}));
