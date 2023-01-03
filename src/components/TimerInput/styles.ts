import styled from 'styled-components/native';
import {Color} from 'theme/colors';

const Container = styled.View`
  display: flex;
  flex-direction: row;
`;

const StyledText = styled.Text`
  margin: 0px 0px 10px 5px;
  color: ${Color.Black};
  font-family: 'Montserrat-Regular';
  font-weight: 600;
`;

const Colon = styled.Text`
  margin: 0px 6px;
  font-size: 24px;
  font-weight: 500;
  color: ${Color.GrayDark};
`;

export {StyledText, Colon, Container};
