import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {DefaultTheme} from 'styled-components';

export const AnswerRadioContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 14px 16px;
  width: 300px;
  background-color: ${props => props.theme.layout};
  margin-bottom: 20px;
  border: 1px solid ${props => props.theme.border};
  border-radius: 15px;
`;

export const ViewMarginRight = styled.View`
  margin-right: 18px;
`;

export const styles = StyleSheet.create((theme?: DefaultTheme) => ({
  textRadio: {
    color: theme?.textMainColor,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
}));
