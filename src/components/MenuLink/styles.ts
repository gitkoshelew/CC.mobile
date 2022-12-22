import styled from 'styled-components/native';
import {Color} from '../../theme/colors';

type isActive = {$isActive: true | false | null};

const ListItem = styled.TouchableOpacity<isActive>`
  margin-right: 23px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: ${({$isActive}) =>
    $isActive ? Color.BlueLight : 'none'};
  font-family: 'Montserrat-Regular';
  font-size: 12px;
`;

const ItemText = styled.Text`
  color: ${Color.White};
`;
export {ListItem, ItemText};
