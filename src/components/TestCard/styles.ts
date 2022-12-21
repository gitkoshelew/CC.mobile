import {StyleSheet} from 'react-native';
import {Color} from '../../ui/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    backgroundColor: Color.White,
    height: 71,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    color: Color.Black,
    fontWeight: '600',
  },
  description: {
    fontSize: 12,
    color: Color.Black,
    fontWeight: '500',
  },
});
