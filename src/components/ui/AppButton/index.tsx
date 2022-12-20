import React, {useCallback} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {IButtonProps} from '../type/AppButtun-types';

import getStyles from './styles';
const AppButton = (props: IButtonProps) => {
  const styles = useCallback(() => getStyles(props), [props])();

  return (
    <TouchableOpacity
      {...props}
      onPress={props.onPress}
      style={[styles.container, props.style && props.style]}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
