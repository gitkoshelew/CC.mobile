import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const ButtonCenter = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const styleWithSheet = StyleSheet.create({
  ViewCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
