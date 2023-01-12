import styled from 'styled-components/native';

const TimerBox = styled.View`
  margin-bottom: 32px;
`;

const TextBox = styled.Text<{fontWeight?: boolean}>`
  margin-bottom: 19px;
  text-align: center;
  font-size: 16px;
  font-family: ${props =>
    props.fontWeight ? 'Montserrat-Bold' : 'Montserrat-Regular'};
`;

const CountQuestionBox = styled.Text`
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

export {TimerBox, TextBox, ButtonsBox, ViewFlexCenter, CountQuestionBox};
