import React from 'react';
import {Image} from 'react-native';
import {MenuLink} from '../MenuLink';
import {Container, MenuList} from './styles';
// TODO: routes

export const MenuBar = () => {
  return (
    <Container>
      <Image source={require('../../assets/images/user-icon.png')} />
      <MenuList>
        <MenuLink onPress={() => {}}>Users</MenuLink>
        <MenuLink onPress={() => {}}>Live Coding</MenuLink>
        <MenuLink onPress={() => {}}>Test List</MenuLink>
      </MenuList>
    </Container>
  );
};
