import {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {IButtonProps} from '@customTypes/AppButtun-types';
import {styles} from './styles';

import {ThemeContext} from 'styled-components/native';

export const AppButton = ({title, type, onPress, disabled, ...props}: IButtonProps) => {
  const theme = useContext(ThemeContext)!;

  return (
    <View style={styles({}).boxView}>
      <TouchableOpacity
        {...props}
        onPress={onPress}
        style={styles({theme, type, disabled}).container}
        disabled={disabled}>
        <Text style={styles({type}).text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
