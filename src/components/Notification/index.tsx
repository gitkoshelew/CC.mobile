import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '@hooks/hooks';
import {Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Container, TextBlock, Wrapper} from '@src/components/Notification/styles';
import {Color} from '@theme/colors';
import {hideAppMessage, removeLastMessage} from '@src/bll/appReducer';

export const Notification = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(state => state.app.messages);

  const [timerId, setTimerId] = useState<ReturnType<typeof setInterval>>();

  const setIsOpen = (id: number) => {
    dispatch(hideAppMessage(id));
  };

  const stopTimer = () => {
    clearInterval(timerId);
  };

  const startTimer = () => {
    stopTimer();
    const id: ReturnType<typeof setInterval> = setInterval(() => {
      dispatch(removeLastMessage());
    }, 2900);
    setTimerId(id);
  };

  useEffect(() => {
    messages.length ? startTimer() : stopTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  return (
    <>
      {messages &&
        messages.map(({id, severity, text}) => (
          <Wrapper key={id}>
            <Container severity={severity}>
              <TextBlock>
                <Text>{text}</Text>
              </TextBlock>
              <TouchableOpacity onPress={() => setIsOpen(id)}>
                <AntDesign name="close" size={24} color={Color.White} />
              </TouchableOpacity>
            </Container>
          </Wrapper>
        ))}
    </>
  );
};
