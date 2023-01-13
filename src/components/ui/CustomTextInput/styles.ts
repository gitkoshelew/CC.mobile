import styled, {css} from 'styled-components/native';
import {Color} from '@theme/colors';
import {CustomTextInputPropsType} from './index';

export const CustomInput = styled.TextInput<CustomTextInputPropsType>`
  background: ${props => props.color || Color.White};
  border: 1px solid ${props => (props.error ? Color.Red : Color.GrayDark)};
  border-radius: 15px;
  padding: 9px 16px;
  width: 100%;
  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}
`;

export const TextError = styled.Text`
  color: ${Color.Red};
  font-size: 16px;
  text-align: center;
  font-family: 'Montserrat-Regular';
`;
