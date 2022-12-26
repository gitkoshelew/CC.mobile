import {StyleSheet} from 'react-native';
import {Color} from 'theme/colors';

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
    fontSize: 14,
    color: Color.Black,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: Color.Black,
    fontWeight: '500',
  },
});
