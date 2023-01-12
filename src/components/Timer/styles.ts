import styled from 'styled-components/native';
import {Color} from 'theme/colors';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  color: ${Color.Black};
  font-family: 'Montserrat-Regular';
`;

export {Container, StyledText};
