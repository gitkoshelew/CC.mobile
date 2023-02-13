import {StyleSheet} from 'react-native';
import {randomColors} from '@src/utils/randomColor';

type stylesPropsType = {
  blockStructure?: 'row' | 'column';
  index?: number;
};

export const styles = ({blockStructure, index}: stylesPropsType) =>
  StyleSheet.create({
    wrapper: {
      width: blockStructure === 'row' ? '50%' : '100%',
    },
    container: {
      width: blockStructure === 'row' ? 170 : '100%',
      height: 110,
      backgroundColor: randomColors()[index!],
      padding: 5,
      margin: 3,
      justifyContent: 'space-around',
      alignItems: 'center',
      borderRadius: 15,
    },
  });
