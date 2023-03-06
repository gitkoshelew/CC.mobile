import {Color} from '@theme/colors';
import styled from 'styled-components/native';

const Container = styled.View`
  margin: 19px 17px;
  padding: 12px 21px 31px;
  border-radius: 15px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  background-color: ${props => props.theme.block};
`;

const Group = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 7px 14px 10px;
  margin: 31px 0 21px;
  border-radius: 15px;
  background-color: ${Color.DarkBlue};
`;

const Box = styled.View`
  width: 30%;
`;

const ButtonBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: -10px;
`;

const StyledText = styled.Text`
  font-size: 14px;
  font-family: 'Montserrat-Regular';
  color: ${Color.White};
`;

export {Container, Group, StyledText, Box, ButtonBox};
