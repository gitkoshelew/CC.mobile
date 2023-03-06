import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  color: ${props => props.theme.textMainColor};
  font-family: 'Montserrat-Regular';
`;

export {Container, StyledText};
