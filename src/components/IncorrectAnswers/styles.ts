import styled from 'styled-components/native';

const NumberBox = styled.View`
  width: 30%;
  padding-left: 10px;
  margin-right: 11px;
  margin-bottom: 17px;
  background: ${props => props.theme.box};
  border-radius: 10px;
  justify-content: center;
`;

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const AnswerBox = styled.View`
  flex-grow: 1;
  width: 40%;
  padding: 5px 10px;
  margin-bottom: 17px;
  background: ${props => props.theme.box};
  border-radius: 10px;
`;

export {NumberBox, AnswerBox, Wrapper};
