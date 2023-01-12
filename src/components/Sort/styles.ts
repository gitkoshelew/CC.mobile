import {StyleSheet} from 'react-native';
import {Color} from '@theme/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 77,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    color: Color.Black,
    fontWeight: '500',
    opacity: 0.4,
    marginRight: 18,
  },
  select: {
    backgroundColor: Color.White,
    borderRadius: 5,
    height: 26,
    width: 125,
  },
  selectSortText: {
    fontSize: 14,
    color: Color.Black,
    fontWeight: '500',
    textAlign: 'left',
  },
  selectText: {
    fontSize: 14,
    color: Color.Black,
    fontWeight: '400',
  },
  selectBox: {
    height: 29,
  },
  selectRow: {
    backgroundColor: Color.Gray,
  },
  selectContainer: {
    backgroundColor: Color.White,
    borderRadius: 10,
  },
  selectAwesome: {
    color: Color.Black,
    opacity: 0.4,
  },
});
