import {StyleSheet} from 'react-native';
import {Color} from '../../ui/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    height: 77,
    width: '100%',
    justifyContent: 'flex-end',
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
  selectContainer: {
    backgroundColor: Color.White,
    borderRadius: 10,
  },
  selectAwesome: {
    color: Color.Black,
    opacity: 0.4,
  },
});
