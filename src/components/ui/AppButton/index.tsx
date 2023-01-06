import {useMemo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {IButtonProps} from 'types/AppButtun-types';
import {styles} from './styles';
import {Color} from 'theme/colors';

export const AppButton = ({title, type, onPress, ...props}: IButtonProps) => {
  const containerStyles = useMemo(
    () => [
      styles.container,
      {backgroundColor: type === 'primary' ? Color.Blue : Color.GrayLight},
    ],
    [type],
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
      <TouchableOpacity {...props} onPress={onPress} style={containerStyles}>
        <Text style={containerText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
