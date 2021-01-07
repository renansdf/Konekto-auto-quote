/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Select from '../Select';
import { useQuoteData } from '../../hooks/quoteData';
import { FormContainer, GoBackButton, SectionButton } from '../../styles/AppStyles';

import ServiceOptionsWords from '../ServiceOptionsWords';

interface IServiceFormProps {
  isVisible: boolean;
  toggleVisibility: () => void;
  goBackButton: () => void;
}

interface SubmittedData {
  service: 'humanTranslation' | 'simpleRevision';
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
  } = useQuoteData();
  const formRef = useRef<FormHandles>(null);

  const handleUpdate = () => {
    if (formRef.current && serviceData) {
      setServiceTotals({ totalCost: undefined, totalTime: undefined });

      const formData: SubmittedData = formRef.current.getData();
      setServiceData({ ...serviceData, service: formData.service });
      const updatedService = allServices[formData.service];
      updatedService?.forEach((value) => value.isSelected = false);
      setCurrentService(updatedService);
    }
  };

  const handleSubmit = () => { };

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
          <option value="traducao">Traduçao</option>
          <option value="revisao">Revisão</option>
          <option value="traducao-juramentada">Tradução Juramentada</option>
        </Select>

      </Form>

      {currentService && (
        <ServiceOptionsWords
          key={currentService[0].value}
          options={currentService}
        />
      )}

      <SectionButton type="button" onClick={toggleVisibility}>continuar para dados pessoais</SectionButton>

    </FormContainer>
  );
};

export default FormServiceData;
