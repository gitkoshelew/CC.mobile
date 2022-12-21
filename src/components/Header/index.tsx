import React from 'react';
import {MenuBar} from '../MenuBar';
import {
  Badge,
  Box,
  Button,
  ButtonContainer,
  ButtonText,
  Container,
  Description,
  InfoContainer,
  StyledImage,
  Title,
  Value,
  Wrapper,
} from './styles';

export const Header = () => (
  <Container
    source={require('../../assets/images/background-image.png')}
    resizeMode="cover">
    <Wrapper>
      <MenuBar />
      <Title>Some text</Title>
      <InfoContainer>
        <Box>
          <Value>999</Value>
          <Description>Tests</Description>
        </Box>
        <Box>
          <Value>999</Value>
          <Description>Materials</Description>
        </Box>
        <Box>
          <Value>999</Value>
          <Description>Users</Description>
        </Box>
      </InfoContainer>
      {/* Do I put these two buttons in a different component?*/}
      <ButtonContainer>
        {/* TODO: onPress */}
        <Button onPress={() => {}}>
          <ButtonText>Create Test</ButtonText>
        </Button>
        <Button onPress={() => {}}>
          <StyledImage source={require('../../assets/images/tests-icon.png')} />
          <ButtonText>My tests</ButtonText>
          <Badge>
            <ButtonText>99</ButtonText>
          </Badge>
        </Button>
      </ButtonContainer>
    </Wrapper>
  </Container>
);
