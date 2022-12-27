import React from 'react';
import {
  Badge,
  BadgeText,
  Button,
  ButtonContainer,
  ButtonText,
  Container,
  Description,
  InfoContainer,
  StyledImage,
  Title,
  UserIconContainer,
  UserInfo,
  UserName,
  Wrapper,
} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const Header = () => (
  <Container
    source={require('../../assets/images/background-image.png')}
    resizeMode="stretch">
    <Wrapper>
      <UserInfo>
        <UserIconContainer>
          <FontAwesome name={'user'} size={80} />
        </UserIconContainer>
        <UserName>User Name</UserName>
      </UserInfo>
      <Title>Some text</Title>
      <ButtonContainer>
        <Button onPress={() => {}}>
          <StyledImage source={require('../../assets/images/tests-icon.png')} />
          <ButtonText>My tests</ButtonText>
          <Badge>
            <BadgeText>99</BadgeText>
          </Badge>
        </Button>
        <Button onPress={() => {}}>
          <ButtonText>Users</ButtonText>
        </Button>
      </ButtonContainer>
    </Wrapper>
    <InfoContainer>
      <Description>999 Tests</Description>
      <Description>999 Materials</Description>
      <Description>999 Users</Description>
    </InfoContainer>
  </Container>
);
