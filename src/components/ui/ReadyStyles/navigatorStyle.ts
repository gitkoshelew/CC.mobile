import {StyleSheet} from 'react-native';
import {DefaultThemeType} from 'styled-components';

export const styles = StyleSheet.create((theme?: DefaultThemeType) => ({
  headerStyle: {
    backgroundColor: theme?.layout,
  },
  headerTitleStyle: {
    color: theme?.textMainColor,
    fontFamily: 'Montserrat-Regular',
  },
}));
