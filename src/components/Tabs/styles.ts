import styled from 'styled-components/native';

export const TabsBox = styled.View`
  flex-direction: row;
  width: 100%;
  height: 45px;
  padding: 10px 0 0 10px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.block};
  border: 2px solid ${props => props.theme.border};
`;
