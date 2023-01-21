import styled from 'styled-components/native';
import {Color} from '@theme/colors';

const StyledInput = styled.TextInput<{color?: Color; error?: boolean}>`
  text-align: center;
  width: 42px;
  height: 38px;
  background: ${props => props.color || Color.White};
  border: 1px solid ${props => (props.error ? Color.Red : Color.GrayMedium)};
  border-radius: 10px;
  color: ${Color.Black};
  font-size: 16px;
  font-family: 'Montserrat-Regular';
`;

export {StyledInput};
