import styled from 'styled-components/native';

export const ScrollViewBlock = styled.ScrollView`
  padding-bottom: 10px;
`;
export const TabsBlock = styled.View<{flexDirection: 'column' | 'row'}>`
  flex-direction: ${props => props.flexDirection}
  max-height: 100px;
  flex-wrap: wrap;
`;
