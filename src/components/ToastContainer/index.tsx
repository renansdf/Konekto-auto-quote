import React from 'react';
import { useTransition } from 'react-spring';
import { Container } from './styles';
import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

interface ToastMessage {
  id: string;
  type?: 'info' | 'success' | 'error';
  title: string;
  message?: string;
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const animatedMessages = useTransition(
    messages,
    (messages) => messages.id,
    {
      from: { right: '-120%' },
      enter: { right: '0%' },
      leave: { right: '-120%' },
    },
  );

  return (
    <Container>
      {animatedMessages && animatedMessages.map(({ item, key, props }) => (
        <Toast key={key} message={item} style={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;
