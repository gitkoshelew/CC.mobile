import {useCallback, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '@hooks/hooks';
import {Text} from 'react-native';
import {Container, TextBlock, Wrapper} from '@src/components/Notification/styles';
import {hideAppMessage, removeLastMessage} from '@src/bll/appReducer';
import {CloseButton} from '@src/components/Notification/CloseButton/index';

export const Notification = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(state => state.app.messages);

  const setIsOpen = (id: number) => {
    dispatch(hideAppMessage(id));
  };

  const startTimer = useCallback(() => {
    setTimeout(() => {
      dispatch(removeLastMessage());
    }, 2900);
  }, [dispatch]);

  useEffect(() => {
    messages.length && startTimer();
  }, [messages, startTimer]);

  return (
    <>
      {messages &&
        messages.map(({id, severity, text}) => (
          <Wrapper key={id}>
            <Container severity={severity}>
              <TextBlock>
                <Text>{text}</Text>
              </TextBlock>
              <CloseButton id={id} setIsOpen={setIsOpen} />
            </Container>
          </Wrapper>
        ))}
    </>
  );
};
