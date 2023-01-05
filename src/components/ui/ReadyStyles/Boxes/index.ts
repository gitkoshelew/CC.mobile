import styled from 'styled-components/native';

const BlockBox = styled.View`
  margin-bottom: 15px;
`;
const BlockAnswerBox = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const TextBox = styled.Text`
  margin-bottom: 8px;
  margin-left: 8px;
  font-size: 16px;
  font-family: 'Montserrat-Regular';
`;

const ButtonAnswerBox = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export {BlockBox, TextBox, BlockAnswerBox, ButtonAnswerBox};
