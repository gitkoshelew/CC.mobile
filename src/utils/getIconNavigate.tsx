import React from 'react';
import {Color} from '@theme/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const getIcon = (routeName: string, color?: Color, size?: number) => {
  let iconName = '';
  let Icon = MaterialIcons;

  switch (routeName) {
    case 'Home':
      Icon = FontAwesome;
      iconName = 'user-circle-o';
      break;
    case 'Create test':
      iconName = 'post-add';
      break;
    case 'Tests list':
      iconName = 'format-list-bulleted';
      break;
    case 'Live coding':
      Icon = FontAwesome;
      iconName = 'file-code-o';
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={color} size={size} />;
};
