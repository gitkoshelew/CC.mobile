import {StyleSheet, ViewStyle} from 'react-native';
import {DefaultTheme} from 'styled-components';

export const styles = StyleSheet.create((theme?: DefaultTheme) => ({
  container: {
    width: '100%',
    alignItems: 'center',
  } as ViewStyle,
  test: {
    width: '90%',
    flexDirection: 'row',
    paddingHorizontal: 15,
    backgroundColor: theme?.block,
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
  } as ViewStyle,
  title: {
    fontSize: 16,
    color: theme?.textMainColor,
    fontWeight: '600',
  } as ViewStyle,
  description: {
    fontSize: 14,
    color: theme?.textMainColor,
    fontWeight: '500',
  } as ViewStyle,
  contentContainer: {
    marginTop: 6,
    justifyContent: 'space-between',
  } as ViewStyle,
  iconTopic: {
    marginRight: 5,
    marginTop: 3,
    marginLeft: 2,
  },
  icon: {
    marginRight: 5,
    marginTop: 2,
  },
  text: {
    color: theme?.textMainColor,
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
  },
  content: {
    flexDirection: 'row',
  } as ViewStyle,
}));
