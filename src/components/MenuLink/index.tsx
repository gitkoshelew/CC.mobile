import React, {ReactNode} from 'react';
import {ItemText, ListItem} from './styles';

interface IProps {
  onPress: () => void;
  children: ReactNode;
}

export const MenuLink = ({onPress, children}: IProps) => {
  // TODO: isActive change
  const isActive = true;

  return (
    <ListItem onPress={onPress} $isActive={isActive}>
      <ItemText>{children}</ItemText>
    </ListItem>
  );
};
