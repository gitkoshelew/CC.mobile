import styled, {css} from 'styled-components/native';
import {Color} from '@theme/colors';

export const TitleTab = styled.Text`
  font-size: 14px;
  line-height: 14px;
  font-family: 'Montserrat-Regular';
  height: 30px;
  padding-bottom: 15px;
  color: ${props => props.theme.textMainColor};
`;

export const ButtonTab = styled.TouchableOpacity<{isActive: boolean}>`
  padding: 5px;
  margin: 0 5px 0px;
  height: 25px;

  ${props =>
    props.isActive &&
    css`
      border-bottom-color: ${Color.BlueLight};
      border-bottom-width: 2px;
    `}
`;
