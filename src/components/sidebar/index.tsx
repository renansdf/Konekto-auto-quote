import React from 'react';
import { Container, QuoteCalculator, QuotedServices } from './styles';

const Sidebar: React.FC = () => (
  <Container>
    <h1>Seu Pedido</h1>

    <QuotedServices>
      <div>
        <span>serviço</span>
        <strong>Tradução</strong>
      </div>

      <div>
        <span>lingua fonte</span>
        <strong>Português</strong>
      </div>

      <div>
        <span>lingua final</span>
        <strong>Inglês</strong>
      </div>

      <div>
        <span>qualidade</span>
        <strong>Básico</strong>
      </div>
    </QuotedServices>

    <QuoteCalculator>
      <span>custo total:</span>
      <strong>R$1000</strong>
    </QuoteCalculator>
  </Container>
);

export default Sidebar;
