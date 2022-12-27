import React from 'react';
import {Icon, Icons} from '../components/ui/Icon/Icon';
import {Color} from 'theme/colors';

export const getIcon = (
  routeName: string,
  focused?: boolean,
  size?: number,
) => {
  let iconName = '';
  let type: React.ElementType = Icon; // it's plug

  switch (routeName) {
    case 'Home':
      type = Icons.FontAwesome;
      iconName = 'user-circle-o';
      break;
    case 'Create test':
      iconName = 'post-add';
      type = Icons.MaterialIcons;
      break;
    case 'Tests list':
      iconName = 'format-list-bulleted';
      type = Icons.MaterialIcons;
      break;
    case 'Live coding':
      iconName = 'file-code-o';
      type = Icons.FontAwesome;
      break;
    default:
      break;
  }

  return (
    <Icon
      type={type}
      name={iconName}
      color={focused ? Color.BlueLight : Color.GrayDark}
      size={size}
    />
  );
};
