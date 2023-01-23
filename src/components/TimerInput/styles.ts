import styled from 'styled-components/native';
import {Color} from '@theme/colors';

const Container = styled.View`
  display: flex;
  flex-direction: row;
`;

const Colon = styled.Text`
  margin: 0 5px;
  font-size: 24px;
  font-weight: 500;
  color: ${Color.GrayDark};
`;

export {Colon, Container};
