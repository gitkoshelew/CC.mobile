import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const ButtonCenter = styled.TouchableOpacity<{disabled?: boolean}>`
  flex: 1;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
`;

export const styleWithSheet = StyleSheet.create({
  ViewCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
});
