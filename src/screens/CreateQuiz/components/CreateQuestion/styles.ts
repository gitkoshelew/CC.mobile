import styled from 'styled-components/native';
import {Color} from '@theme/colors';

export const BlockLayout = styled.View`
  background-color: ${Color.Transparent};
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const Container = styled.View`
  padding: 15px 21px 70px 21px;
  background-color: ${props => props.theme.layout};
`;

export const ContainerSaveButton = styled.View`
  justify-content: center;
  margin-right: 75px;
`;

export const NextQuestionButton = styled.TouchableOpacity<{disabled: boolean}>`
  opacity: ${props => (props.disabled ? 0.4 : 1)};
`;
