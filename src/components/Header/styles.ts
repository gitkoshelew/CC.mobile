import styled from 'styled-components/native';
import {Color} from '@theme/colors';

const Wrapper = styled.View`
  padding: 0 10px 100px 13px;
`;

const WrapperAuth = styled.View`
  width: 80%;
  margin: 0 auto;
  padding: 0 10px 120px 13px;
`;

const UserIconContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  margin-top: -10px;
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

export {UserIconContainer, Title, Wrapper, WrapperAuth};
