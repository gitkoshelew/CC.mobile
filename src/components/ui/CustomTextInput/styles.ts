import styled, {css} from 'styled-components/native';
import {Color} from 'theme/colors';
import {CustomTextInputPropsType} from './index';

export const CustomInput = styled.TextInput<CustomTextInputPropsType>`
  background: ${props => props.color || Color.White};
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 9px 16px;
  width: 100%;
  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}
`;
