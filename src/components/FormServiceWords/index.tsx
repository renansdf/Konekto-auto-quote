/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, {
  ChangeEvent, useEffect, useRef, useState,
} from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Select from '../Select';
import { useQuoteData } from '../../hooks/quoteData';
import { FormContainer, GoBackButton, SectionButton } from '../../styles/AppStyles';

import ServiceOptionsWords from '../ServiceOptionsWords';
import { useToast } from '../../hooks/toast';

interface IServiceFormProps {
  isVisible: boolean;
  toggleVisibility: () => void;
  goBackButton: () => void;
}

interface SubmittedData {
  service: '' | 'traducao' | 'revisao';
}

interface IServiceData {
  name: string;
  value: 'machineTranslation' | 'humanTranslation' | 'technicalTranslation' | 'simpleRevision' | 'technicalRevision';
  isSelected?: boolean;
}

interface IAllServices {
  [key: string]: IServiceData[];
}

const allServices: IAllServices = {
  traducao: [
    { name: 'Machine Translation', value: 'machineTranslation' },
    { name: 'Human Translation', value: 'humanTranslation' },
    { name: 'Technical Translation', value: 'technicalTranslation' },
  ],
  traducaoAlt: [
    { name: 'Human Translation', value: 'humanTranslation' },
    { name: 'Technical Translation', value: 'technicalTranslation' },
  ],
  revisao: [
    { name: 'Simple Revision', value: 'simpleRevision' },
    { name: 'Technical Revision', value: 'technicalRevision' },
  ],
};

const FormServiceData: React.FC<IServiceFormProps> = ({
  isVisible,
  toggleVisibility,
  goBackButton,
}) => {
  const [
    currentService,
    setCurrentService,
  ] = useState<IServiceData[]>();
  const {
    setServiceData,
    setServiceTotals,
    serviceData,
    serviceTotals,
  } = useQuoteData();
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);

  const [buttonActive, setButtonActive] = useState(false);

  const handleUpdate = () => {
    if (formRef.current && serviceData) {
      setButtonActive(false);
      setServiceTotals({ totalCost: undefined, totalTime: undefined });
      setServiceData({ ...serviceData, service: '' });

      const formData = (formRef.current.getData() as SubmittedData);
      let serviceName;
      if (serviceData.languageGroup > 1 && formData.service === 'traducao') {
        serviceName = `${formData.service}Alt`;
      } else {
        serviceName = formData.service;
      }
      const updatedService = allServices[serviceName];
      updatedService?.forEach((value) => value.isSelected = false);
      setCurrentService(updatedService);
    }
  };

  const handleSubmit = () => {
    if (serviceTotals?.totalCost) {
      toggleVisibility();
    } else {
      addToast({
        title: 'selecione um serviço para continuar',
        type: 'error',
      });
    }
  };

  const handleGoBack = () => {
    handleUpdate();
    goBackButton();
  };

  return (
    <FormContainer isVisible={isVisible}>
      <GoBackButton onClick={handleGoBack}>Voltar</GoBackButton>
      <Form ref={formRef} onSubmit={handleSubmit}>

        <Select name="service" onChange={handleUpdate}>
          <option value="">Selecione o serviço</option>
          <option value="traducao">Tradução</option>
          <option value="revisao">Revisão</option>
        </Select>

        {currentService && (
          <ServiceOptionsWords
            key={currentService[0].value}
            options={currentService}
            activateButton={setButtonActive}
          />
        )}

        <SectionButton type="submit" isActive={!!buttonActive}>continuar para dados pessoais</SectionButton>
      </Form>

    </FormContainer>
  );
};

export default FormServiceData;
