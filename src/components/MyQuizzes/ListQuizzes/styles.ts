import {StyleSheet} from 'react-native';
import {Color} from '@theme/colors';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  wrapper: {
    margin: 5,
    backgroundColor: Color.White,
    width: 140,
    height: 80,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    elevation: 6,
  },

  imageBackground: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 17,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
    color: Color.White,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.8,
    elevation: 8,
  },
  description: {
    color: Color.White,
    fontSize: 16,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.8,
    fontWeight: 'bold',
  },
});
