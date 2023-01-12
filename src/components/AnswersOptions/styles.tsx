import styled from 'styled-components/native';
import {Color} from '@theme/colors';
import {StyleSheet} from 'react-native';

export const AnswerRadioContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 14px 16px;
  width: 300px;
  background-color: ${Color.GrayLight};
  margin-bottom: 20px;
  border: 1px solid ${Color.GrayMedium};
  border-radius: 15px;
`;

export const ViewMarginRight = styled.View`
  margin-right: 18px;
`;

export const styles = StyleSheet.create({
  textRadio: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
});
