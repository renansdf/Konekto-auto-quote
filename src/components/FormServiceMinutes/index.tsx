/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Select from '../Select';
import { useQuoteData } from '../../hooks/quoteData';
import { FormContainer, GoBackButton, SectionButton } from '../../styles/AppStyles';

import ServiceOptionsMinutes from '../ServiceOptionsMinutes';
import { useToast } from '../../hooks/toast';

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
  value: 'machineTranscription' | 'humanTranscription' | 'captionFile' | 'captionHardcoded' | 'captionBonus';
  isSelected?: boolean;
}

interface IAllServices {
  [key: string]: IServiceData[];
}

const allServices: IAllServices = {
  transcricao: [
    { name: 'Machine Transcription', value: 'machineTranscription' },
    { name: 'Human Transcription', value: 'humanTranscription' },
  ],
  legenda: [
    { name: 'Caption File', value: 'captionFile' },
    { name: 'Caption Hardcoded', value: 'captionHardcoded' },
    { name: 'Caption Bonus', value: 'captionBonus' },
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
  const [captionOnly, setCaptionOnly] = useState(false);

  const handleUpdate = () => {
    if (formRef.current && serviceData) {
      setButtonActive(false);
      setServiceTotals({ totalCost: undefined, totalTime: undefined });
      setServiceData({ ...serviceData, service: '' });

      const formData = (formRef.current.getData() as SubmittedData);
      const updatedService = allServices[formData.service];
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

  useEffect(() => {
    if (serviceData && serviceData.languageGroup > 1) {
      setCaptionOnly(true);
      const updatedService = allServices.legenda;
      updatedService?.forEach((value) => value.isSelected = false);
      setCurrentService(updatedService);
    }
  }, [serviceData]);

  return (
    <FormContainer isVisible={isVisible}>
      <GoBackButton onClick={handleGoBack}>Voltar</GoBackButton>
      <Form ref={formRef} onSubmit={handleSubmit}>

        {!captionOnly && (
          <Select name="service" onChange={handleUpdate}>
            <option value="">Selecione o serviço</option>
            <option value="legenda">Legenda</option>
            <option value="transcricao">Transcrição</option>
          </Select>
        )}

        {currentService && (
          <ServiceOptionsMinutes
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
