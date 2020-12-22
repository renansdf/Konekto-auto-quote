import React from 'react';
import { Form } from '@unform/web';
import Input from '../Input';
import { FormContainer, SectionButton } from '../../styles/AppStyles';
import { useQuoteData } from '../../hooks/quoteData';

interface IPersonalFormProps {
  isVisible: boolean;
  toggleVisibility: () => void;
}

interface SubmittedData {
  name: string;
  phone: string;
  email: string;
  company: string;
  cnpjcpf: string;
}

const FormPersonalData: React.FC<IPersonalFormProps> = ({ isVisible, toggleVisibility }) => {
  const { setPersonalData } = useQuoteData();

  const handleSubmit = (data: SubmittedData) => {
    setPersonalData(data);
    toggleVisibility();
  };

  return (
    <FormContainer isVisible={isVisible}>
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome" />
        <Input name="phone" placeholder="Telefone" />
        <Input name="email" placeholder="E-Mail" />
        <Input name="company" placeholder="Empresa" />
        <Input name="cnpjcpf" placeholder="CNPJ / CPF" />

        <SectionButton type="submit">Próximo: arquivo</SectionButton>
      </Form>
    </FormContainer>
  );
};

export default FormPersonalData;
