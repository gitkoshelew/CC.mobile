import styled from 'styled-components/native';
import {Color} from '@theme/colors';

type ViewBoxPropsType = {
  isActive: boolean;
  isFilledQuestion: boolean;
};

export const Button = styled.TouchableOpacity<ViewBoxPropsType>`
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme.border};
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin: 5px;
  background-color: ${props =>
    props.isActive
      ? Color.BlueLight
      : props.isFilledQuestion
      ? `${props.theme.activeQuestionTab}`
      : `${props.theme.questionTab}`};
`;

export const TextButton = styled.Text<{isActive: boolean}>`
  color: ${props => (props.isActive ? Color.White : `${props.theme.textMainColor}`)};
`;
