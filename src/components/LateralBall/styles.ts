import {StyleSheet, ViewStyle} from 'react-native';
import {DefaultTheme} from 'styled-components';

export const styles = StyleSheet.create((theme?: DefaultTheme) => ({
  container: {
    width: 120,
    height: 120,
    backgroundColor: theme?.lateralBalls,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    elevation: 6,
  } as ViewStyle,
  value: {
    color: theme?.textMainColor,
    fontSize: 28,
    fontWeight: 'bold',
  } as ViewStyle,
  description: {
    color: theme?.textMainColor,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    fontSize: 18,
  } as ViewStyle,
}));
