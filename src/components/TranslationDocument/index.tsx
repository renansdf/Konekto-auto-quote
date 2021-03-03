import React, { useRef, useState } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as yup from 'yup';

import { useQuoteData } from '../../hooks/quoteData';
import allLanguages from '../../helpers/languages';

import Input from '../Input';
import Select from '../Select';
import TranslationProducts from '../TranslationProducts';
import { FormContainer, SectionButton, GoBackButton } from '../../styles/AppStyles';
import { Container } from './styles';

interface IServiceFormProps {
  isVisible: boolean;
  toggleVisibility: () => void;
  goBackButton: () => void;
}

interface IFormData {
  languageMatrix: string;
  languageFinal: string;
  numberOfWords: number;
}

export interface ITranslationServices {
  [key: string]: {
    name: string;
    value: 'machineTranslation' | 'humanTranslation' | 'technicalTranslation';
    isSelected?: boolean;
  }[];
}

const TranslationServices: ITranslationServices = {
  translationGroupBasic: [
    { name: 'Machine Translation', value: 'machineTranslation' },
    { name: 'Human Translation', value: 'humanTranslation' },
    { name: 'Technical Translation', value: 'technicalTranslation' },
  ],
  translationGroupAlternative: [
    { name: 'Human Translation', value: 'humanTranslation' },
    { name: 'Technical Translation', value: 'technicalTranslation' },
  ],
};

const TranslationDocument: React.FC<IServiceFormProps> = ({
  isVisible,
  toggleVisibility,
  goBackButton,
}) => {
  const { setServiceData, setServiceTotals } = useQuoteData();
  const formRef = useRef<FormHandles>(null);

  const [buttonActive, setButtonActive] = useState(false);
  const [servicesActive, setServicesActive] = useState(false);

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
        numberOfWords: formData.numberOfWords,
        languageGroup: selectedGroup,
        service: '',
      });

      const schema = yup.object().shape({
        numberOfWords: yup.number().required(),
        languageMatrix: yup.string().required(),
        languageFinal: yup.string().required(),
      });

      schema.validate(formData).then((response) => {
        if (response) {
          setServicesActive(true);
        }
      });

      setButtonActive(false);
    }
  };

  const handleSubmit = () => {
    if (buttonActive) {
      toggleVisibility();
    }
  };

  const handleGoBack = () => {
    if (formRef.current) {
      formRef.current.reset();
      setServiceData({
        languageFinal: '',
        languageMatrix: '',
        numberOfWords: undefined,
        service: '',
        languageGroup: 0,
      });
      setServiceTotals({
        totalTime: undefined,
        totalCost: undefined,
      });
      setServicesActive(false);
      setButtonActive(false);
      goBackButton();
    }
  };

  return (
    <FormContainer isVisible={isVisible}>
      <GoBackButton onClick={handleGoBack}>Voltar</GoBackButton>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Container>
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
        </Container>

        {servicesActive && (
          <TranslationProducts
            options={TranslationServices}
            whenSelected={() => setButtonActive(true)}
          />
        )}

        <SectionButton type="submit" isActive={!!buttonActive}>Agora só precisamos de seus dados pessoais</SectionButton>
      </Form>
    </FormContainer>
  );
};

export default TranslationDocument;
