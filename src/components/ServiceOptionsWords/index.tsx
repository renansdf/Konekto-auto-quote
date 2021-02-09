/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import { Container } from './styles';

import ButtonService from '../ButtonService';
import { useQuoteData } from '../../hooks/quoteData';
import { calculateWordCost } from '../../helpers/quoteHelper';

interface IOptionStructure {
  name: string;
  value: 'machineTranslation' | 'humanTranslation' | 'technicalTranslation' | 'simpleRevision' | 'technicalRevision';
  isSelected?: boolean;
}

interface IServiceOptions {
  options: IOptionStructure[];
  // eslint-disable-next-line no-unused-vars
  activateButton: (b: boolean) => void;
}

const ServiceOptionsWords: React.FC<IServiceOptions> = ({ options, activateButton }) => {
  const [componentOptions, setOptions] = useState<IOptionStructure[]>(options);
  const { setServiceData, setServiceTotals, serviceData } = useQuoteData();

  function handleSelect(optionValue: string) {
    const selected = componentOptions.findIndex((value) => value.value === optionValue);
    if (componentOptions) {
      const updatedOptions = componentOptions;
      updatedOptions.forEach((value) => value.isSelected = false);
      updatedOptions[selected].isSelected = true;
      setOptions([...updatedOptions]);

      if (serviceData && serviceData.numberOfWords) {
        const [value, time] = calculateWordCost({
          languageGroup: serviceData.languageGroup,
          numberOfWords: serviceData.numberOfWords,
          serviceName: updatedOptions[selected].value,
        });
        setServiceData({ ...serviceData, service: updatedOptions[selected].name });
        setServiceTotals({ totalCost: value, totalTime: time });
        activateButton(true);
      }
    }
  }

  return (
    <Container>
      {componentOptions && componentOptions.map((option) => (
        <ButtonService
          key={option.value}
          value={option.value}
          isSelected={option.isSelected}
          onClick={() => handleSelect(option.value)}
        >
          {option.name}
        </ButtonService>
      ))}
    </Container>
  );
};

export default ServiceOptionsWords;
