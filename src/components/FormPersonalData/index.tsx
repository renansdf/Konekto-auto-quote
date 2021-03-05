import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as yup from 'yup';

import Input from '../Input';
import { FormContainer, GoBackButton, SectionButton } from '../../styles/AppStyles';
import { useQuoteData } from '../../hooks/quoteData';
import { ButtonsContainer, DownloadPdf } from './styles';

interface IPersonalFormProps {
  isVisible: boolean;
  backToTranslation: () => void;
  backToRevision: () => void;
  backToTimebased: () => void;
  backToBegining: () => void;
}

interface SubmittedData {
  name: string;
  phone: string;
  email: string;
  company: string;
  cnpjcpf: string;
}

const FormPersonalData: React.FC<IPersonalFormProps> = ({
  isVisible,
  backToTranslation,
  backToRevision,
  backToTimebased,
  backToBegining,
}) => {
  const { setPersonalData, serviceData } = useQuoteData();
  const [buttonActive, setButtonActive] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = (data: SubmittedData) => {
    setPersonalData(data);
  };

  const handleGoBack = () => {
    if (serviceData?.selectedService === 'translation') {
      backToTranslation();
      return;
    }

    if (serviceData?.selectedService === 'revision') {
      backToRevision();
      return;
    }

    if (serviceData?.selectedService === 'subtitling' || serviceData?.selectedService === 'transcription') {
      backToTimebased();
      return;
    }

    backToBegining();
  };

  const handleUpdate = async () => {
    if (formRef.current) {
      const formData = (formRef.current.getData() as SubmittedData);

      const schema = yup.object().shape({
        name: yup.string().required(),
        phone: yup.number().required(),
        email: yup.string().email().required(),
        company: yup.string().required(),
        cnpjcpf: yup.string().required(),
      });

      try {
        await schema.validate(formData);
        setButtonActive(true);
      } catch (err) {
        setButtonActive(false);
      }
    }
  };

  return (
    <FormContainer isVisible={isVisible}>
      <GoBackButton onClick={handleGoBack}>Voltar</GoBackButton>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome" onChange={handleUpdate} />
        <Input name="phone" placeholder="Telefone" type="number" onChange={handleUpdate} />
        <Input name="email" placeholder="E-Mail" type="email" onChange={handleUpdate} />
        <Input name="company" placeholder="Empresa" onChange={handleUpdate} />
        <Input name="cnpjcpf" placeholder="CNPJ / CPF" onChange={handleUpdate} />

        <ButtonsContainer>
          <SectionButton type="submit" isActive={!!buttonActive}>Solicitar Orçamento agora</SectionButton>
          <DownloadPdf type="button" isActive={!!buttonActive}>download do Orçamento em pdf</DownloadPdf>
        </ButtonsContainer>
      </Form>
    </FormContainer>
  );
};

export default FormPersonalData;
