import {StyleSheet} from 'react-native';
import {Color} from '@theme/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  test: {
    width: '90%',
    flexDirection: 'row',
    paddingHorizontal: 15,
    backgroundColor: Color.White,
    height: 71,
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    elevation: 5,
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
