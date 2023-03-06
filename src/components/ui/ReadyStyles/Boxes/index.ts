import styled, {css} from 'styled-components/native';
import {Color} from '@theme/colors';

const BlockBox = styled.View`
  margin-bottom: 8px;
`;

const BlockDynamicMargin = styled.View<{m: string}>`
  margin: ${props => props.m};
`;

const BlockAnswerBox = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
`;

const BlockBoxMarginLeft = styled.View`
  margin-bottom: 15px;
  margin-left: 15px;
`;

const BlockBoxMarginRight = styled.View`
  margin-right: 20px;
`;

const BoldText = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

const TextBox = styled.Text`
  color: ${props => props.theme.textMainColor};
  margin-bottom: 8px;
  margin-left: 8px;
  font-size: 16px;
  font-family: 'Montserrat-Regular';
  font-weight: 600;
`;

const SmallTextBox = styled.Text`
  margin-bottom: 8px;
  margin-left: 14px;
  font-size: 14px;
  font-family: 'Montserrat-Regular';
  color: ${Color.GrayMedium};
`;

const TextDescription = styled.Text`
  text-align: center;
  margin-bottom: 15px;
  font-size: 20px;
  font-family: 'Montserrat-Regular';
  color: ${Color.GrayDark};
  font-weight: 600;
`;

const Title = styled.Text`
  margin-bottom: 30px;
  font-size: 25px;
  font-family: 'Montserrat-Regular';
  color: ${Color.White};
  font-weight: 600;
`;

const SmallTitle = styled.Text`
  text-align: center;
  margin-bottom: 25px;
  font-size: 16px;
  font-family: 'Montserrat-Regular';
  color: ${Color.White};
`;

const SmallTitleBlack = styled.Text`
  margin-bottom: 10px;
  font-size: 16px;
  font-family: 'Montserrat-Bold';
  color: ${props => props.theme.textMainColor};
`;

const SmallTextBlack = styled.Text`
  font-size: 14px;
  font-family: 'Montserrat-Medium';
  color: ${props => props.theme.textMainColor};
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

const ContainerDynamicWidth = styled.View<{width: string}>`
  width: ${props => props.width};
`;

export const CustomText = styled.Text<{
  fs: string;
  fw?: string;
  color?: Color;
  m?: string;
}>`
  font-size: ${props => props.fs};
  color: ${props => props.theme?.textMainColor ?? props.color};
  font-weight: ${props => (props.fw ? props.fw : 'normal')};
  font-family: 'Montserrat-Regular';
  ${props =>
    props.m &&
    css`
      margin: ${props.m};
    `}
`;

export {
  BlockBox,
  TextBox,
  BlockBoxMarginLeft,
  BlockAnswerBox,
  BoldText,
  ButtonAnswerBox,
  RightBlockBox,
  Title,
  TextDescription,
  SmallTextBox,
  SmallBox,
  SmallTitleBlack,
  SmallTextBlack,
  BlockBoxMarginRight,
  SmallTitle,
  ContainerDynamicWidth,
  BlockDynamicMargin,
};
