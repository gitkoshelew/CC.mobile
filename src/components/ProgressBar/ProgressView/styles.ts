import styled from 'styled-components/native';
import {Color} from '@theme/colors';

type ViewBoxPropsType = {
  questionStatus: 'default' | 'active' | 'right' | 'error';
};
const statusColor = {
  active: Color.DarkBlue,
  right: Color.BlueLight,
  error: Color.Red,
  default: Color.GrayMedium,
};
export const ViewCheck = styled.View<ViewBoxPropsType>`
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme.border};
  border-radius: 50px;
  width: 15px;
  height: 15px;
  margin: 4px;
  background-color: ${props => statusColor[props.questionStatus]};
`;
