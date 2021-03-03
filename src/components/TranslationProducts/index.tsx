import React, { useCallback, useEffect, useState } from 'react';
import { formatCurrency } from '../../helpers/numberFormat';
import { calculateWordCost } from '../../helpers/quoteHelper';
import { useQuoteData } from '../../hooks/quoteData';

import { ITranslationServices } from '../TranslationDocument';
import { Container, ProductCard } from './styles';

interface IComponentProps {
  options: ITranslationServices;
  whenSelected: () => void;
}

interface IProductCards {
  name: string;
  cost: number;
  time: number;
  isSelected: boolean;
}

const TranslationProducts: React.FC<IComponentProps> = ({
  options,
  whenSelected,
}) => {
  const { serviceData, setServiceData, setServiceTotals } = useQuoteData();
  const [productCards, setProductCards] = useState<IProductCards[]>();

  function generateProductCards(numberOfWords: number, languageGroup: number) {
    let optionsArray;
    if (serviceData) {
      if (languageGroup < 2) {
        optionsArray = options.translationGroupBasic;
      } else {
        optionsArray = options.translationGroupAlternative;
      }

      const parsedOptions = optionsArray.map((option) => {
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
    if (serviceData && serviceData.numberOfWords) {
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

export default TranslationProducts;
