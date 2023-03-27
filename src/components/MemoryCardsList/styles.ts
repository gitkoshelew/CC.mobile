import {StyleSheet} from 'react-native';

type StylesPropsType = 'row' | 'column';

export const getStyles = (props?: StylesPropsType) =>
  StyleSheet.create({
    wrapper: {
      paddingRight: 20,
    },
    container: {
      flexWrap: 'wrap',
      flexDirection: props,
      alignItems: 'flex-start',
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    listFormatButton: {
      width: 80,
      height: 80,
    },
    description: {
      marginTop: 18,
      paddingLeft: 20,
    },
  });
