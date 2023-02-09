import styled, {css} from 'styled-components/native';
import {Color} from '@theme/colors';
import {CustomTextInputPropsType} from './index';

export const CustomInput = styled.TextInput<CustomTextInputPropsType>`
  background: ${Color.White};
  border: 1px solid ${props => (props.error ? Color.Red : Color.GrayMedium)};
  border-radius: 15px;
  font-family: 'Montserrat-Regular';
  ${props =>
    props.typeInput === 'timer'
      ? css`
          text-align: center;
          font-size: 16px;
          width: 42px;
          height: 38px;
        `
      : css`
          padding: 9px 16px;
          width: 100%;
        `}

  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}
`;
