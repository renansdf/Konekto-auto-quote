import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Input from '../Input';
import Select from '../Select';
import { FormContainer, SectionButton } from '../../styles/AppStyles';
import { useQuoteData } from '../../hooks/quoteData';

interface IServiceFormProps {
  isVisible: boolean;
  toggleVisibility: () => void;
}

interface SubmittedData {
  languageMatrix: string;
  languageFinal: string;
  numberOfWords: number;
}

const FormLanguageData: React.FC<IServiceFormProps> = ({ isVisible, toggleVisibility }) => {
  const { setServiceData } = useQuoteData();
  const formRef = useRef<FormHandles>(null);

  const handleUpdate = () => {
    if (formRef.current) {
      const formData = formRef.current.getData();
      setServiceData({ ...formData, service: '' });
    }
  };

  const handleSubmit = (data: SubmittedData) => {
    setServiceData({ ...data, service: '' });
    toggleVisibility();
  };

  return (
    <FormContainer isVisible={isVisible}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="numberOfWords" placeholder="Número de palavras" type="number" onChange={handleUpdate} />

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

        <SectionButton type="submit">Selecione o servico</SectionButton>
      </Form>
    </FormContainer>
  );
};

export default FormLanguageData;
