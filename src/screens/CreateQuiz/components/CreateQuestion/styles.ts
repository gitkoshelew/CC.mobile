import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  padding: 0 21px;
`;

export const Container = styled.View`
  padding-top: 15px;
  padding-bottom: 40px;
`;

export const ContainerSaveButton = styled.View`
  justify-content: center;
  margin-right: 75px;
`;

export const NextQuestionButton = styled.TouchableOpacity<{disabled: boolean}>`
  opacity: ${props => (props.disabled ? 0.4 : 1)};
`;
