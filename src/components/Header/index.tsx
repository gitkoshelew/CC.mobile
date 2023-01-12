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
  Wrapper,
} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ViewCenter} from '../ui/ReadyStyles/Containers';
import * as AppButton from '../ui/AppButton';
import {ScreenList} from '../../navigation/navigation';
import {useAppNavigate} from 'hooks/hooks';

export const Header = () => {
  const {navigate} = useAppNavigate();
  return (
    <Container
      source={require('../../assets/images/background-image.png')}
      resizeMode="stretch">
      <Wrapper>
        <UserInfo>
          <UserIconContainer>
            <FontAwesome name={'user'} size={80} />
          </UserIconContainer>
          <ViewCenter>
            <AppButton.AppButton
              title="Log In"
              type="primary"
              onPress={() =>
                navigate(ScreenList.HOME, {screen: ScreenList.SIGN_IN})
              }
            />
          </ViewCenter>
        </UserInfo>
        <Title>Some text</Title>
        <ButtonContainer>
          <Button onPress={() => {}}>
            <StyledImage
              source={require('../../assets/images/tests-icon.png')}
            />
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
};
