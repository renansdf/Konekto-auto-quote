import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Input from '../Input';
import Select from '../Select';
import { FormContainer, SectionButton } from '../../styles/AppStyles';
import { useQuoteData } from '../../hooks/quoteData';
import calculateCost from '../../helpers/quoteHelper';

interface IServiceFormProps {
  isVisible: boolean;
  toggleVisibility: () => void;
}

interface SubmittedData {
  service: 'humanTranslation' | 'simpleRevision';
  languageMatrix: string;
  languageFinal: string;
  numberOfWords: number;
}

const FormServiceData: React.FC<IServiceFormProps> = ({ isVisible }) => {
  const { setServiceData, setTotalCost } = useQuoteData();
  const formRef = useRef<FormHandles>(null);

  const handleUpdate = () => {
    if (formRef.current) {
      const formData: SubmittedData = formRef.current.getData();
      setServiceData(formData);
    }
  };

  const handleSubmit = (data: SubmittedData) => {
    setServiceData(data);
    const value = calculateCost({
      languageGroup: 1,
      numberOfWords: data.numberOfWords,
      serviceName: data.service,
    });
    setTotalCost(value);
  };

  return (
    <FormContainer isVisible={isVisible}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="numberOfWords" placeholder="Número de palavras" type="number" onChange={handleUpdate} />

        <Select name="service" onChange={handleUpdate}>
          <option value="">Selecione o serviço</option>
          <option value="humanTranslation">Tradução</option>
          <option value="simpleRevision">Revisão</option>
          {/* <option value="legenda">Legenda</option> */}
          {/* <option value="transcricao">Transcrição</option> */}
          {/* <option value="traducao-juramentada">Tradução Juramentada</option> */}
        </Select>

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

        <SectionButton type="submit">Calcular Custo</SectionButton>
      </Form>
    </FormContainer>
  );
};

export default FormServiceData;
