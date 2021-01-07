import React from 'react';
import { Form } from '@unform/web';
import Input from '../Input';
import { FormContainer, GoBackButton, SectionButton } from '../../styles/AppStyles';
import { useQuoteData } from '../../hooks/quoteData';

interface IPersonalFormProps {
  isVisible: boolean;
  backToWords: () => void;
  backToMinutes: () => void;
}

interface SubmittedData {
  name: string;
  phone: string;
  email: string;
  company: string;
  cnpjcpf: string;
}

const wordServices = ['Machine Translation', 'Human Translation', 'Technical Translation', 'Simple Revision', 'Technical Revision'];
const minuteServices = ['Machine Transcription', 'Human Transcription', 'Caption File', 'Caption Hardcoded', 'Caption Bonus'];

const FormPersonalData: React.FC<IPersonalFormProps> = ({
  isVisible,
  backToWords,
  backToMinutes,
}) => {
  const { setPersonalData, serviceData } = useQuoteData();

  const handleSubmit = (data: SubmittedData) => {
    setPersonalData(data);
  };

  const handleGoBack = () => {
    if (serviceData && wordServices.includes(serviceData.service)) {
      backToWords();
    }

    if (serviceData && minuteServices.includes(serviceData.service)) {
      backToMinutes();
    }
  };

  return (
    <FormContainer isVisible={isVisible}>
      <GoBackButton onClick={handleGoBack}>Voltar</GoBackButton>
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome" />
        <Input name="phone" placeholder="Telefone" />
        <Input name="email" placeholder="E-Mail" />
        <Input name="company" placeholder="Empresa" />
        <Input name="cnpjcpf" placeholder="CNPJ / CPF" />

        {/* <SectionButton type="submit">Próximo: arquivo</SectionButton> */}
      </Form>
    </FormContainer>
  );
};

export default FormPersonalData;
