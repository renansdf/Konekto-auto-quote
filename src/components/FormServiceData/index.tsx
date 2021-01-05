/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Select from '../Select';
import { useQuoteData } from '../../hooks/quoteData';
import { FormContainer } from '../../styles/AppStyles';

import ServiceOptions from '../ServiceOptions';

interface IServiceFormProps {
  isVisible: boolean;
  toggleVisibility: () => void;
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

const FormServiceData: React.FC<IServiceFormProps> = ({ isVisible }) => {
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
    // CLEANUP SERVICO CUSTO PRAZO E SERVICO SELECIONADO EM OUTRO SERVICE OPTIONS
    if (formRef.current && serviceData) {
      // CLEANUP
      setServiceTotals({ totalCost: undefined, totalTime: undefined });

      const formData: SubmittedData = formRef.current.getData();
      setServiceData({ ...serviceData, service: formData.service });
      const updatedService = allServices[formData.service];
      updatedService?.forEach((value) => value.isSelected = false);
      setCurrentService(updatedService);
    }
  };

  const handleSubmit = (data: SubmittedData) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <FormContainer isVisible={isVisible}>
      <Form ref={formRef} onSubmit={handleSubmit}>

        <Select name="service" onChange={handleUpdate}>
          <option value="">Selecione o serviço</option>
          <option value="traducao">Traduçao</option>
          <option value="revisao">Revisão</option>
          <option value="legenda">Legenda</option>
          <option value="transcricao">Transcrição</option>
          <option value="traducao-juramentada">Tradução Juramentada</option>
        </Select>

        {/* <SectionButton type="submit">Calcular Custo</SectionButton> */}
      </Form>

      {currentService && (
        <ServiceOptions
          key={currentService[0].value}
          options={currentService}
        />
      )}

    </FormContainer>
  );
};

export default FormServiceData;
