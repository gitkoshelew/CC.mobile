import styled from 'styled-components/native';
import {Color} from '@theme/colors';

const Wrapper = styled.View`
  padding: 30px 10px 500px 13px;
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

const Title = styled.Text`
  margin: 30px 0 30px;
  color: ${Color.White};
  font-family: 'Montserrat-Regular';
  font-size: 20px;
  font-weight: 600;
`;

export {UserIconContainer, Title, Wrapper};
