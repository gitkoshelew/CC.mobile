import {useMemo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {IButtonProps} from '../type/AppButtun-types';
import {styles} from './styles';
import {Color} from '../../../ui/colors';

export const AppButton = (props: IButtonProps) => {
  const containerStyles = useMemo(
    () => [
      styles.container,
      {backgroundColor: props.type === 'primary' ? Color.Blue : Color.Gray},
    ],
    [props.type],
  );

  const containerText = useMemo(
    () => [
      styles.text,
      {color: props.type === 'primary' ? Color.White : Color.Black},
    ],
    [props.type],
  );

  return (
    <TouchableOpacity
      {...props}
      onPress={props.onPress}
      style={containerStyles}>
      <Text style={containerText}>{props.title}</Text>
    </TouchableOpacity>
  );
};
