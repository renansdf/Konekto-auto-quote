import React, { useCallback, useEffect, useState } from 'react';
import { formatCurrency } from '../../helpers/numberFormat';
import { calculateWordCost } from '../../helpers/quoteHelper';
import { TextbasedServices } from '../../helpers/services';
import { useQuoteData } from '../../hooks/quoteData';

import { Container, ProductCard } from './styles';

interface IComponentProps {
  whenSelected: () => void;
}

interface IProductCards {
  name: string;
  cost: number;
  time: number;
  isSelected: boolean;
}

const TextbasedProducts: React.FC<IComponentProps> = ({
  whenSelected,
}) => {
  const { serviceData, setServiceData, setServiceTotals } = useQuoteData();
  const [productCards, setProductCards] = useState<IProductCards[]>();

  function generateProductCards(numberOfWords: number, languageGroup: number) {
    let options;
    if (serviceData && serviceData.selectedService) {
      if (serviceData.selectedService === 'translation') {
        if (languageGroup < 2) {
          options = TextbasedServices.translationBasic;
        } else {
          options = TextbasedServices.translationAdvanced;
        }
      }

      if (serviceData.selectedService === 'revision') {
        options = TextbasedServices.revision;
      }

      const parsedOptions = options?.map((option) => {
        const [value, time] = calculateWordCost({
          languageGroup,
          numberOfWords,
          serviceName: option.value,
        });
        return {
          name: option.name, cost: value, time, isSelected: false,
        };
      });

      setProductCards(parsedOptions);
      setServiceData({ ...serviceData, service: '' });
      setServiceTotals({ totalCost: undefined, totalTime: undefined });
    }
  }

  const handleClick = useCallback((prod) => {
    if (productCards && serviceData) {
      const parsedProducts = productCards.map((produc) => {
        let updatedSelected = false;
        if (produc.name === prod.name) {
          updatedSelected = true;
          setServiceData({ ...serviceData, service: produc.name });
          setServiceTotals({ totalCost: produc.cost, totalTime: produc.time });
        }
        const updatedProduct = {
          name: produc.name,
          cost: produc.cost,
          time: produc.time,
          isSelected: updatedSelected,
        };

        return updatedProduct;
      });

      setProductCards(parsedProducts);
      whenSelected();
    }
  }, [productCards, serviceData]);

  useEffect(() => {
    if (serviceData && serviceData.numberOfWords && serviceData.languageGroup) {
      generateProductCards(serviceData.numberOfWords, serviceData.languageGroup);
    } else {
      setProductCards(undefined);
    }
  }, [serviceData?.languageFinal, serviceData?.languageMatrix, serviceData?.numberOfWords]);

  return (
    <Container>
      {productCards && productCards.map((product) => (
        <ProductCard
          key={product.cost}
          isSelected={product.isSelected}
          onClick={() => handleClick(product)}
        >
          <h1>{product.name}</h1>
          <h2>
            R$
            {formatCurrency(product.cost)}
          </h2>
          <h3>
            prazo estimado:
            {' '}
            {product.time}
            {' '}
            dias
          </h3>
        </ProductCard>
      ))}
    </Container>
  );
};

export default TextbasedProducts;
