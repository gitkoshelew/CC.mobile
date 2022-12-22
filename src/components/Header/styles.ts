import styled from 'styled-components/native';
import {Color} from '../../theme/colors';

const Wrapper = styled.View`
  padding: 15px 10px 16px 13px;
`;

const Container = styled.ImageBackground`
  width: 100%;
`;

const Title = styled.Text`
  margin: 30px 0 45px;
  color: ${Color.White};
  font-family: 'Montserrat-Regular';
  font-size: 20px;
  font-weight: 600;
`;

const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 26px;
`;

const Box = styled.View`
  color: ${Color.White};
  margin-right: 53px;
`;

const Value = styled.Text`
  margin-bottom: 7px;
  font-size: 20px;
  font-weight: 600;
  color: ${Color.White};
`;

const Description = styled.Text`
  font-size: 12px;
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
  padding: 7px 11px 8px;
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
  Title,
  Wrapper,
  InfoContainer,
  Box,
  Value,
  Description,
  ButtonContainer,
  Button,
  ButtonText,
  StyledImage,
  Badge,
  BadgeText,
};
