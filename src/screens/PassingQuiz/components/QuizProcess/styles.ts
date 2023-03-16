import styled from 'styled-components/native';

const TimerBox = styled.View`
  margin-bottom: 16px;
`;

const TextBox = styled.Text<{fontWeight?: boolean}>`
  color: ${props => props.theme.textMainColor};
  margin-bottom: 19px;
  text-align: center;
  font-size: 16px;
  font-family: ${props => (props.fontWeight ? 'Montserrat-Bold' : 'Montserrat-Regular')};
`;

const CountQuestionBox = styled.Text`
  color: ${props => props.theme.textMainColor};
  font-size: 14px;
  font-family: 'Montserrat-Regular';
`;

const ViewFlexCenter = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

const ButtonsBox = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ViewBlock = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;
const ViewBlockResult = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export {
  TimerBox,
  TextBox,
  ButtonsBox,
  ViewFlexCenter,
  CountQuestionBox,
  ViewBlock,
  ViewBlockResult,
};
