import styled from 'styled-components/native';
import {Color} from '@theme/colors';

type NotificationContainerPropsType = {
  severity?: 'error' | 'success';
};

export const Wrapper = styled.View`
  position: absolute;
  flex-direction: column;
  align-items: center;
  bottom: 110px;
  left: 50%;
  right: 50%;
  color: #fff;
  z-index: 15;
`;

export const Container = styled.View<NotificationContainerPropsType>`
  position: relative;
  width: 270px;
  mix-height: 90px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 20px;
  padding: 8px 10px;
  align-items: center;
  background-color: ${props =>
    props.severity === 'error'
      ? Color.Red
      : props.severity === 'success'
      ? Color.Green
      : Color.White};
`;

export const TextBlock = styled.Text`
  flex: 1;
  text-align: center;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${Color.White};
  font-size: 15px;
  font-weight: 600;
  font-family: 'Montserrat-Regular';
`;
