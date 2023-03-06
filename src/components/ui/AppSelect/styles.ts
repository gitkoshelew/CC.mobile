import {StyleSheet, ViewStyle} from 'react-native';
import {DefaultThemeType} from 'styled-components';

export const styles = StyleSheet.create((theme?: DefaultThemeType) => ({
  selectSortText: {
    fontWeight: '500',
    textAlign: 'left',
  } as ViewStyle,
  selectText: {
    fontSize: 14,
    color: theme?.textMainColor,
    fontWeight: '400',
  } as ViewStyle,
  selectRow: {
    backgroundColor: theme?.appSelectActive,
  },
  selectContainer: {
    backgroundColor: theme?.appSelect,
    borderRadius: 10,
  },
  selectAwesome: {
    opacity: 0.4,
  },
}));
