import {useMemo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {IButtonProps} from '@customTypes/AppButtun-types';
import {styles} from './styles';
import {Color} from '@theme/colors';

export const AppButton = ({
  title,
  type,
  onPress,
  disabled,
  ...props
}: IButtonProps) => {
  const containerStyles = useMemo(
    () => [
      styles.container,
      {
        backgroundColor: type === 'primary' ? Color.Blue : Color.GrayLight,
        opacity: disabled ? 0.5 : 1,
      },
    ],
    [disabled, type],
  );

  const containerText = useMemo(
    () => [
      styles.text,
      {color: type === 'primary' ? Color.White : Color.Black},
    ],
    [type],
  );

  return (
    <View style={styles.boxView}>
      <TouchableOpacity
        {...props}
        onPress={onPress}
        style={containerStyles}
        disabled={disabled}>
        <Text style={containerText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
