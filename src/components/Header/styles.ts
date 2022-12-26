import styled from 'styled-components/native';
import {Color} from 'theme/colors';

const Wrapper = styled.View`
  padding: 15px 10px 16px 13px;
`;

const Container = styled.ImageBackground`
  width: 100%;
  margin-bottom: 12px;
`;

const UserInfo = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0px 0px;
`;

const UserIconContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  overflow: hidden;
  background: ${Color.White};
`;

const UserName = styled.Text`
  margin-top: 15px;
  font-family: 'Montserrat-Regular';
  color: ${Color.White};
  font-size: 16px;
`;

const Title = styled.Text`
  margin: 30px 0 30px;
  color: ${Color.White};
  font-family: 'Montserrat-Regular';
  font-size: 20px;
  font-weight: 600;
`;

const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding: 10px 0px;
`;

const Description = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${Color.White};
`;

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 7px 15px 8px;
  background: ${Color.White};
  margin-right: 20px;
  border-radius: 25px;
`;

const ButtonText = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: ${Color.Black};
`;

const Badge = styled.View`
  padding: 3px 8px;
  margin-left: 13px;
  background: ${Color.Blue};
  border-radius: 5px;
  color: ${Color.White};
`;

const BadgeText = styled.Text`
  color: ${Color.White};
`;

const StyledImage = styled.Image`
  margin-right: 13px;
`;

export {
  Container,
  UserInfo,
  UserName,
  UserIconContainer,
  Title,
  Wrapper,
  InfoContainer,
  Description,
  ButtonContainer,
  Button,
  ButtonText,
  StyledImage,
  Badge,
  BadgeText,
};
