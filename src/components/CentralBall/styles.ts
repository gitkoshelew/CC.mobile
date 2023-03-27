import {StyleSheet} from 'react-native';
import {Color} from '@theme/colors';

export const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginTop: 35,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: '50%',
    backgroundColor: Color.BlueLight,
    marginLeft: -70,
    top: -25,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    elevation: 6,
    zIndex: 10,
  },
  value: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Color.White,
  },
  description: {
    color: Color.White,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    fontSize: 18,
  },
});
