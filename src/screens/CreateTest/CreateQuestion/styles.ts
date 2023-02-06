import styled from 'styled-components/native';

export const ContainerSaveButton = styled.View`
  justify-content: center;
  margin-right: 75px;
`;

export const NextQuestionButton = styled.TouchableOpacity<{disabled: boolean}>`
  opacity: ${props => (props.disabled ? 0.4 : 1)};
`;
