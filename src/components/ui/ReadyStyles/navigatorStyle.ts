import {StyleSheet} from 'react-native';
import {DefaultTheme} from 'styled-components';

export const styles = StyleSheet.create((theme?: DefaultTheme) => ({
  headerStyle: {
    backgroundColor: theme?.layout,
  },
  headerTitleStyle: {
    color: theme?.textMainColor,
    fontFamily: 'Montserrat-Regular',
  },
}));
