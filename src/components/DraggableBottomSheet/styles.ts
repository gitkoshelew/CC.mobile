import {Platform, StyleSheet} from 'react-native';
import {Color} from '@theme/colors';

export const getStyles = (maxHeight?: number, maxUpward?: number) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      width: '100%',
      bottom: 50,
      flex: 1,
    },
    bottomSheet: {
      position: 'absolute',
      width: '100%',
      height: maxHeight,
      bottom: maxUpward,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      ...Platform.select({
        android: {elevation: 3},
        ios: {
          shadowColor: Color.GrayLight,
          shadowopacity: 1,
          shadowRadius: 6,
          shadowOffset: {
            width: 2,
            height: 2,
          },
        },
      }),
    },
    draggableArea: {
      width: 50,
      height: 28,
      alignSelf: 'center',
      justifyContent: 'center',
    },
    dragHandle: {
      width: 50,
      height: 5,
      backgroundColor: Color.White,
      borderRadius: 10,
    },
    imageBackground: {
      paddingHorizontal: 20,
    },
  });
