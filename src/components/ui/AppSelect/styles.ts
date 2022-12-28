import {StyleSheet} from 'react-native';
import {Color} from 'theme/colors';

export const styles = StyleSheet.create({
  selectSortText: {
    fontWeight: '500',
    textAlign: 'left',
  },
  selectText: {
    fontSize: 14,
    color: Color.Black,
    fontWeight: '400',
  },
  selectRow: {
    backgroundColor: Color.Gray,
  },
  selectContainer: {
    backgroundColor: Color.White,
    borderRadius: 10,
  },
  selectAwesome: {
    opacity: 0.4,
  },
});
