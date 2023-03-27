import {useMemo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Color} from '@theme/colors';
import {IButtonProps} from '@customTypes/LoginButtun-types';

export const LoginButton = ({title, type, onPress, ...props}: IButtonProps) => {
  const containerStyles = useMemo(
    () => [
      styles.container,
      {
        backgroundColor: type === 'primary' ? Color.BlueLight : 'transparent',
        borderWidth: type === 'primary' ? 0 : 2,
        borderColor: Color.BlueLight,
      },
    ],
    [type],
  );

  const containerText = useMemo(
    () => [styles.text, {color: type === 'primary' ? Color.White : Color.BlueLight}],
    [type],
  );

  return (
    <View style={styles.boxView}>
      <TouchableOpacity {...props} onPress={onPress} style={containerStyles}>
        <Text style={containerText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
