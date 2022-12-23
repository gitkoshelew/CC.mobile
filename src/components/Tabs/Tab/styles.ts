import styled, {css} from 'styled-components/native';
import {Color} from '../../../../ui/colors';

export const TitleTab = styled.Text`
  font-size: 18px;
  color: black;
`;

export const ButtonTab = styled.TouchableOpacity<{isActive: boolean}>`
  padding: 5px 10px;
  margin: 0 5px 10px;
  ${props =>
    props.isActive &&
    css`
      border-bottom-color: ${Color.BlueLight};
      border-bottom-width: 2px;
    `}
`;
