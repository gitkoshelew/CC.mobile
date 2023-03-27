import {StyleSheet, ViewStyle} from 'react-native';
import {DefaultTheme} from 'styled-components';

export const styles = StyleSheet.create((theme?: DefaultTheme) => ({
  wrapper: {
    flex: 1,
    backgroundColor: theme?.layout,
  },
  aboutUser: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 80,
    paddingHorizontal: 20,
  } as ViewStyle,
  containerProfile: {
    position: 'absolute',
    top: -180,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  backgroundImage: {
    borderBottomLeftRadius: 130,
    borderBottomRightRadius: 130,
    width: 500,
    height: 500,
  },
  profile: {
    marginTop: 50,
    marginBottom: 40,
  },
  containerBalls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  } as ViewStyle,
  content: {
    flex: 1,
    paddingLeft: 20,
    marginBottom: 50,
  },
  icon: {
    marginLeft: 3,
    marginTop: 4,
  },
}));
