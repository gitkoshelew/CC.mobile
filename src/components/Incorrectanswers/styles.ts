import {Color} from '@theme/colors';
import styled from 'styled-components/native';

const NumberBox = styled.View`
  width: 30%;
  padding: 4px 0px 8px 7px;
  margin-right: 11px;
  margin-bottom: 17px;
  background: ${Color.GrayLight};
  border-radius: 10px;
`;

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const AnswerBox = styled.View`
  flex-grow: 1;
  padding: 4px 0px 8px 9px;
  margin-bottom: 17px;
  background: ${Color.GrayLight};
  border-radius: 10px;
`;

export {NumberBox, AnswerBox, Wrapper};
