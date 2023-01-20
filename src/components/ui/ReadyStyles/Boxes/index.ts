import styled from 'styled-components/native';
import {Color} from '@theme/colors';

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

const BlockBoxMarginLeft = styled.View`
  margin-bottom: 15px;
  margin-left: 15px;
`;

const BlockBoxMarginRight = styled.View`
  margin-right: 8px;
`;

const TextBox = styled.Text`
  margin-bottom: 8px;
  margin-left: 8px;
  font-size: 16px;
  font-family: 'Montserrat-Regular';
`;

const SmallTextBox = styled.Text`
  font-size: 14px;
  font-family: 'Montserrat-Regular';
  color: ${Color.GrayMedium};
`;

const TextDescription = styled.Text`
  margin-bottom: 15px;
  font-size: 16px;
  font-family: 'Montserrat-Regular';
  color: ${Color.GrayMedium};
`;

const Title = styled.Text`
  margin-bottom: 30px;
  font-size: 25px;
  font-family: 'Montserrat-Regular';
  color: ${Color.White};
  font-weight: 600;
`;

const SmallTitleBlack = styled.Text`
  margin-bottom: 10px;
  font-size: 16px;
  font-family: 'Montserrat-Bold';
  color: ${Color.Black};
`;

const SmallTextBlack = styled.Text`
  font-size: 14px;
  font-family: 'Montserrat-Medium';
  color: ${Color.Black};
`;

const SmallBox = styled.View`
  margin-bottom: 8px;
`;

const ButtonAnswerBox = styled.View`
  padding-left: 15px;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const RightBlockBox = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export {
  BlockBox,
  TextBox,
  BlockBoxMarginLeft,
  BlockAnswerBox,
  ButtonAnswerBox,
  RightBlockBox,
  Title,
  TextDescription,
  SmallTextBox,
  SmallBox,
  SmallTitleBlack,
  SmallTextBlack,
  BlockBoxMarginRight,
};
