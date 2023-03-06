import {StyleSheet, ViewStyle} from 'react-native';
import {DefaultTheme} from 'styled-components';

export const styles = StyleSheet.create((theme?: DefaultTheme) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 25,
  } as ViewStyle,
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular',
    marginRight: 80,
  } as ViewStyle,
  text: {
    color: theme?.textMainColor,
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 10,
    fontFamily: 'Montserrat-Regular',
  } as ViewStyle,
  imageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-around',
  } as ViewStyle,
  picker: {
    width: 20,
    height: 20,
    borderRadius: 5,
    flexDirection: 'row',
  } as ViewStyle,
}));
