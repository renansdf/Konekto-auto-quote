import React from 'react';
import { useQuoteData } from '../../hooks/quoteData';
import formatNumber from '../../helpers/numberFormat';

import { Container, QuoteCalculator, QuotedServices } from './styles';

const Sidebar: React.FC = () => {
  const { serviceData, totalCost } = useQuoteData();

  return (
    <Container>
      <h1>Seu Pedido</h1>

      {serviceData && (
        <QuotedServices>

          {serviceData.numberOfWords && (
            <div>
              <span>palavras</span>
              <strong>{formatNumber(serviceData.numberOfWords)}</strong>
            </div>
          )}

          {serviceData.service && (
            <div>
              <span>serviço</span>
              <strong>{serviceData.service}</strong>
            </div>
          )}

          {serviceData.languageMatrix && (
            <div>
              <span>lingua fonte</span>
              <strong>{serviceData.languageMatrix}</strong>
            </div>
          )}

          {serviceData.languageFinal && (
            <div>
              <span>lingua final</span>
              <strong>{serviceData.languageFinal}</strong>
            </div>
          )}
        </QuotedServices>
      )}

      {totalCost && (
        <QuoteCalculator>
          <span>custo total:</span>
          <strong>
            R$
            {totalCost}
          </strong>
        </QuoteCalculator>
      )}
    </Container>
  );
};

export default Sidebar;
