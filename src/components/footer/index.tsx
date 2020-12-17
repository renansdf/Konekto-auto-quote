import React from 'react';
import { Container, BlockContato } from './styles';

const Footer: React.FC = () => (
  <Container>
    <h2>
      estamos sempre a disposição para
      <br />
      responder as suas perguntas!
    </h2>

    <div>
      <BlockContato>
        ligue agora
        <strong>+55 11 3280 4464</strong>
      </BlockContato>

      <BlockContato>
        nosso email
        <strong>oi@konekto.me</strong>
      </BlockContato>
    </div>
  </Container>
);

export default Footer;
