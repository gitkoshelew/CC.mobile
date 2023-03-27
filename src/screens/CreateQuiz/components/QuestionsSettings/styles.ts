import {StyleSheet, ViewStyle} from 'react-native';
import {DefaultTheme} from 'styled-components';

export const styles = StyleSheet.create((theme?: DefaultTheme) => ({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  container: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 3,
  },
  inner: {
    flex: 1,
    justifyContent: 'space-around',
  } as ViewStyle,
  questionTabsContainer: {
    paddingHorizontal: 21,
  },
  tabsContainer: {
    flex: 1,
  },
  tabBarStyle: {
    marginBottom: 5,
    backgroundColor: theme?.layout,
  },
  tabBarIndicatorContainerStyle: {
    marginLeft: 30,
    width: 270,
    marginBottom: 5,
  },
  tabBarLabelStyle: {
    color: theme?.textMainColor,
    fontFamily: 'Montserrat-Regular',
  },
}));
