import styled from 'styled-components/native';
import {Color} from '@theme/colors';

export const CustomFormInput = styled.TextInput`
  font-size: 16px;
  margin-bottom: 8px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid ${Color.GrayMedium};
  border-radius: 15px;
  padding: 7px 14px;
  color: ${Color.White};
`;
