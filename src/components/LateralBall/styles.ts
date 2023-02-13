import {StyleSheet} from 'react-native';
import {Color} from '@theme/colors';

export const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    backgroundColor: Color.White,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    elevation: 6,
  },
  value: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    fontSize: 18,
  },
});
