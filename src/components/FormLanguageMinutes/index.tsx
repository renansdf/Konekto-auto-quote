import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Input from '../Input';
import Select from '../Select';
import { FormContainer, SectionButton, GoBackButton } from '../../styles/AppStyles';
import { useQuoteData } from '../../hooks/quoteData';

interface IServiceFormProps {
  isVisible: boolean;
  toggleVisibility: () => void;
  goBackButton: () => void;
}

interface SubmittedData {
  languageMatrix: string;
  languageFinal: string;
  totalMinutes: number;
}

const FormLanguageMinutes: React.FC<IServiceFormProps> = ({
  isVisible,
  toggleVisibility,
  goBackButton,
}) => {
  const { setServiceData, serviceData } = useQuoteData();
  const formRef = useRef<FormHandles>(null);

  const handleUpdate = () => {
    if (formRef.current) {
      const formData: SubmittedData = formRef.current.getData();
      if (serviceData && serviceData.service) {
        setServiceData({ ...formData, service: serviceData.service });
      } else {
        setServiceData({ ...formData, service: '' });
      }
    }
  };

  const handleSubmit = (data: SubmittedData) => {
    if (serviceData && serviceData.service) {
      setServiceData({ ...data, service: serviceData.service });
    } else {
      setServiceData({ ...data, service: '' });
    }
    toggleVisibility();
  };

  return (
    <FormContainer isVisible={isVisible}>
      <GoBackButton onClick={goBackButton}>Voltar</GoBackButton>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="totalMinutes" placeholder="Total de minutos" type="number" onChange={handleUpdate} />

        <Select name="languageMatrix" onChange={handleUpdate}>
          <option value="">Lingua fonte</option>
          <option value="Português">Português</option>
          <option value="Inglês">Inglês</option>
        </Select>

        <Select name="languageFinal" onChange={handleUpdate}>
          <option value="">Lingua final</option>
          <option value="Português">Português</option>
          <option value="Inglês">Inglês</option>
        </Select>

        <SectionButton type="submit">Selecione os detalhes do serviço</SectionButton>
      </Form>
    </FormContainer>
  );
};

export default FormLanguageMinutes;
