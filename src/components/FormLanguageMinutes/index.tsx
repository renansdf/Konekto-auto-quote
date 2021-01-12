import React, { useRef, useState } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as yup from 'yup';

import { useQuoteData } from '../../hooks/quoteData';
import { useToast } from '../../hooks/toast';
import allLanguages from '../../helpers/languages';

import Input from '../Input';
import Select from '../Select';
import { FormContainer, SectionButton, GoBackButton } from '../../styles/AppStyles';

interface IServiceFormProps {
  isVisible: boolean;
  toggleVisibility: () => void;
  goBackButton: () => void;
}

interface IFormData {
  languageMatrix: string;
  languageFinal: string;
  languageGroup: number;
  totalMinutes: number;
}

const FormLanguageMinutes: React.FC<IServiceFormProps> = ({
  isVisible,
  toggleVisibility,
  goBackButton,
}) => {
  const { setServiceData, serviceData } = useQuoteData();
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const [buttonActive, setButtonActive] = useState(false);

  const handleUpdate = () => {
    if (formRef.current) {
      const formData = (formRef.current.getData() as IFormData);

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
        totalMinutes: formData.totalMinutes,
        languageGroup: selectedGroup,
        service: '',
      });

      const schema = yup.object().shape({
        totalMinutes: yup.number().required(),
        languageMatrix: yup.string().required(),
        languageFinal: yup.string().required(),
      });

      schema.validate(formData).then((response) => {
        if (response) {
          setButtonActive(true);
        }
      });
    }
  };

  const handleSubmit = async (data: IFormData) => {
    if (serviceData) {
      if (serviceData.service) {
        setServiceData({ ...serviceData, service: serviceData.service });
      } else {
        setServiceData({ ...serviceData, service: '' });
      }
    }
    try {
      const schema = yup.object().shape({
        totalMinutes: yup.number().required(),
        languageMatrix: yup.string().required(),
        languageFinal: yup.string().required(),
      });

      await schema.validate(data);
      toggleVisibility();
    } catch (err) {
      addToast({
        title: 'ocorreu um erro',
        message: 'Preencha todos os campos para continuar',
        type: 'error',
      });
    }
  };

  return (
    <FormContainer isVisible={isVisible}>
      <GoBackButton onClick={goBackButton}>Voltar</GoBackButton>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="totalMinutes" placeholder="Total de minutos" type="number" onChange={handleUpdate} />

        <Select name="languageMatrix" onChange={handleUpdate}>
          <option value="">Lingua fonte</option>
          {allLanguages && allLanguages.map((language) => (
            <option
              key={language.name}
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

        <SectionButton type="submit" isActive={!!buttonActive}>Selecione os detalhes do serviço</SectionButton>
      </Form>
    </FormContainer>
  );
};

export default FormLanguageMinutes;
