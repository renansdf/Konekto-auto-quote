import React from 'react';
import { useQuoteData } from '../../hooks/quoteData';
import { formatNumber, formatCurrency } from '../../helpers/numberFormat';

import { Container, QuoteCalculator, QuotedServices } from './styles';

const Sidebar: React.FC = () => {
  const { serviceData, serviceTotals } = useQuoteData();

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

          {serviceData.totalMinutes && (
            <div>
              <span>minutos</span>
              <strong>{formatNumber(serviceData.totalMinutes)}</strong>
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

          {serviceData.service && (
            <div>
              <span>serviço</span>
              <strong>{serviceData.service}</strong>
            </div>
          )}
        </QuotedServices>
      )}

      {serviceTotals?.totalCost && (
        <QuoteCalculator>
          <span>custo total:</span>
          <strong>
            R$
            {serviceTotals.totalCost && formatCurrency(serviceTotals.totalCost)}
          </strong>
        </QuoteCalculator>
      )}

      {serviceTotals?.totalTime && (
        <QuoteCalculator>
          <span>prazo estimado:</span>
          <strong>
            {serviceTotals.totalTime}
            {' '}
            dias
          </strong>
        </QuoteCalculator>
      )}
    </Container>
  );
};

export default Sidebar;
