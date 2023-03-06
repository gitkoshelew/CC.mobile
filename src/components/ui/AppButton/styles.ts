import {StyleSheet, ViewStyle} from 'react-native';
import {DefaultTheme} from 'styled-components';
import {TypeAppButton} from '@customTypes/AppButtun-types';
import {Color} from '@theme/colors';

type StylesPropsType = {
  theme?: DefaultTheme;
  type?: TypeAppButton;
  disabled?: boolean;
};

export const styles = StyleSheet.create(({theme, type, disabled}: StylesPropsType) => ({
  boxView: {
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  container: {
    borderRadius: 20,
    paddingHorizontal: 14,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: type === 'primary' ? Color.DarkBlue : theme?.appButtonSecondary,
    opacity: disabled ? 0.5 : 1,
  } as ViewStyle,
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: type === 'primary' ? Color.White : Color.Black,
  },
}));
