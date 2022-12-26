import {StyleSheet} from 'react-native';
import {Color} from 'theme/colors';
import {ISelectProps} from '../type/AppSelect-types';

export const getStyles = ({size, type}: ISelectProps) =>
  StyleSheet.create({
    select: {
      backgroundColor: Color.White,
      borderRadius: 5,
      height: 26,
      width: 125,
      ...(type === 'primary' && {
        backgroundColor: Color.Blue,
      }),
      ...(size === 'm' && {
        borderRadius: 15,
        height: 36,
        width: 332,
      }),
    },
    selectSortText: {
      fontSize: 14,
      color: Color.Black,
      fontWeight: '500',
      textAlign: 'left',
      ...(type === 'primary' && {
        color: Color.White,
        ...(size === 'm' && {
          fontSize: 16,
        }),
      }),
    },
    selectText: {
      fontSize: 14,
      color: Color.Black,
      fontWeight: '400',
      ...(size === 'm' && {
        fontSize: 16,
      }),
    },
    selectBox: {
      height: 29,
      ...(size === 'm' && {
        height: 36,
      }),
    },
    selectRow: {
      backgroundColor: Color.Gray,
    },
    selectContainer: {
      backgroundColor: Color.White,
      borderRadius: 10,
    },
    selectAwesome: {
      color: Color.Black,
      opacity: 0.4,
      ...(type === 'primary' && {
        color: Color.Gray,
      }),
    },
  });
