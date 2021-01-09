import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Input from '../Input';
import Select from '../Select';
import { FormContainer, SectionButton, GoBackButton } from '../../styles/AppStyles';
import { useQuoteData } from '../../hooks/quoteData';

import allLanguages from '../../helpers/languages';

interface IServiceFormProps {
  isVisible: boolean;
  toggleVisibility: () => void;
  goBackButton: () => void;
}

interface IFormData {
  languageMatrix: string;
  languageFinal: string;
  languageGroup: number;
  numberOfWords: number;
}

const FormLanguageWords: React.FC<IServiceFormProps> = ({
  isVisible,
  toggleVisibility,
  goBackButton,
}) => {
  const { setServiceData, serviceData } = useQuoteData();
  const formRef = useRef<FormHandles>(null);

  const handleUpdate = () => {
    if (formRef.current) {
      const formData: IFormData = formRef.current.getData();

      const matrixData = formData.languageMatrix.split(',');
      const matrixNumber = Number(matrixData[0]);
      const matrixLanguage = matrixData[1];

      const finalData = formData.languageFinal.split(',');
      const finalNumber = Number(finalData[0]);
      const finalLanguage = finalData[1];

      let selectedGroup: number;
      if (matrixNumber >= finalNumber) {
        selectedGroup = matrixNumber;
      } else {
        selectedGroup = finalNumber;
      }

      setServiceData({
        languageFinal: finalLanguage,
        languageMatrix: matrixLanguage,
        numberOfWords: formData.numberOfWords,
        languageGroup: selectedGroup,
        service: '',
      });
    }
  };

  const handleSubmit = () => {
    if (serviceData) {
      if (serviceData.service) {
        setServiceData({ ...serviceData, service: serviceData.service });
      } else {
        setServiceData({ ...serviceData, service: '' });
      }
    }
    toggleVisibility();
  };

  return (
    <FormContainer isVisible={isVisible}>
      <GoBackButton onClick={goBackButton}>Voltar</GoBackButton>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="numberOfWords" placeholder="Número de palavras" type="number" onChange={handleUpdate} />

        <Select name="languageMatrix" onChange={handleUpdate}>
          <option value="">Lingua fonte</option>
          {allLanguages && allLanguages.map((language) => (
            <option
              key={`${language.name}-matrix`}
              value={[language.group.toString(), language.name]}
            >
              {language.name}
            </option>
          ))}
        </Select>

        <Select name="languageFinal" onChange={handleUpdate}>
          <option value="">Lingua final</option>
          {allLanguages && allLanguages.map((language) => (
            <option
              key={language.name}
              value={[language.group.toString(), language.name]}
            >
              {language.name}
            </option>
          ))}
        </Select>

        <SectionButton type="submit">Selecione os detalhes do serviço</SectionButton>
      </Form>
    </FormContainer>
  );
};

export default FormLanguageWords;
