import styled, {css} from 'styled-components/native';
import {Color} from '@theme/colors';
import {CustomTextInputPropsType} from './index';

export const CustomInput = styled.TextInput<CustomTextInputPropsType>`
  background: ${props => props.theme.block};
  border: 1px solid ${props => (props.error ? Color.Red : props.theme.border)};
  border-radius: 15px;
  color: ${props => props.theme.textMainColor}
  font-family: 'Montserrat-Regular';
  padding: 9px 16px;
  width: 100%;
  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}
`;
