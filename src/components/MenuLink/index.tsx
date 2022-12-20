import React, {ReactNode} from 'react';
import {Text} from 'react-native';
import {ListItem} from './styles';

interface IProps {
  onPress: () => void;
  children: ReactNode;
}

export const MenuLink = ({onPress, children}: IProps) => {
  // TODO: isActive change я пока не знаю как работает навигация, нотеоритически могу определить этот путь сейчас активный или нет
  const isActive = true;

  return (
    <ListItem onPress={onPress} $isActive={isActive}>
      <Text>{children}</Text>
    </ListItem>
  );
};
