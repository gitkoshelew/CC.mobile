import {useMemo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {IButtonProps} from '../type/AppButtun-types';
import {styles} from './styles';
import {Color} from '../../../ui/colors';

export const AppButton = ({title, type, onPress, ...props}: IButtonProps) => {
  const containerStyles = useMemo(
    () => [
      styles.container,
      {backgroundColor: type === 'primary' ? Color.Blue : Color.Gray},
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
    <TouchableOpacity {...props} onPress={onPress} style={containerStyles}>
      <Text style={containerText}>{title}</Text>
    </TouchableOpacity>
  );
};
