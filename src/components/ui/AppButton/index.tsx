import {useMemo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {IButtonProps} from '../type/AppButtun-types';
import {styles} from './styles';

export const AppButton = (props: IButtonProps) => {
  const containerStyles = useMemo(
    () => [
      styles.container,
      {backgroundColor: props.type === 'primary' ? '#2D3E6B' : '#EAEAEA'},
    ],
    [props.type],
  );

  const containerText = useMemo(
    () => [
      styles.text,
      {color: props.type === 'primary' ? '#FFFFFF' : '#000000'},
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
