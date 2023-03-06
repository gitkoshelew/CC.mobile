import {StyleSheet, ViewStyle} from 'react-native';
import {Color} from '@theme/colors';
import {LIST_ITEM_HEIGHT} from '@src/components/MyTestCards/index';
import {DefaultTheme} from 'styled-components';

export const styles = StyleSheet.create((theme?: DefaultTheme) => ({
  container: {
    width: '100%',
    alignItems: 'center',
  } as ViewStyle,
  test: {
    width: '90%',
    flexDirection: 'row',
    backgroundColor: theme?.block,
    paddingHorizontal: 15,
    borderRightColor: Color.BlueLight,
    borderRightWidth: 5,
    height: 71,
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
  iconContainer: {
    width: 70,
    height: LIST_ITEM_HEIGHT,
    position: 'absolute',
    right: '10%',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    color: theme?.textMainColor,
  },
  content: {
    flexDirection: 'row',
  } as ViewStyle,
}));
