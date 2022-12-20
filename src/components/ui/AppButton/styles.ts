import {StyleSheet} from 'react-native';
import {IButtonProps} from '../type/AppButtun-types';
const getStyles = (props: IButtonProps) => {
  return StyleSheet.create({
    container: {
      borderRadius: 20,
      paddingHorizontal: 12,
      backgroundColor: '#2D3E6B',
      height: 31,
      justifyContent: 'center',
      alignItems: 'center',
      ...(props.type === 'secondary' && {
        backgroundColor: '#EAEAEA',
      }),
    },

    text: {
      fontSize: 12,
      color: '#FFFFFF',
      fontWeight: '500',

      ...(props.type === 'secondary' && {
        color: '#000000',
      }),
    },
  });
};

export default getStyles;
