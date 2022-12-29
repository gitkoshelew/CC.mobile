import styled from 'styled-components/native';
import {Color} from 'theme/colors';

const StyledInput = styled.TextInput`
  text-align: center;
  width: 42px;
  height: 38px;
  background: ${Color.White};
  border: 1px solid ${Color.Gray};
  border-radius: 10px;
  color: ${Color.Black};
  font-size: 16px;
  font-weight: 600;
  font-family: 'Montserrat-Regular';
`;

export {StyledInput};
