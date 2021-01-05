import React, { useState } from 'react';
import FormLanguageData from '../FormLanguageData';
import FormServiceData from '../FormServiceData';
import FormPersonalData from '../FormPersonalData';
import { Container } from './styles';

const Quote: React.FC = () => {
  const [languageVisibility, setLanguageVisibility] = useState(true);
  const [serviceVisibility, setServiceVisibility] = useState(false);
  const [personalVisibility, setPersonalVisibility] = useState(false);

  const hideAndShow = (toHide: Function, toShow: Function) => {
    toHide(false); toShow(true);
  };

  return (
    <Container>
      <section>
        <h1>Solicitar Orçamento</h1>
        <p>Preencha o formulário abaixo para solicitar um orçamento</p>

        <FormLanguageData
          isVisible={!!languageVisibility}
          toggleVisibility={() => hideAndShow(setLanguageVisibility, setServiceVisibility)}
        />

        <FormServiceData
          isVisible={!!serviceVisibility}
          toggleVisibility={() => hideAndShow(setServiceVisibility, setPersonalVisibility)}
        />

        <FormPersonalData
          isVisible={!!personalVisibility}
          toggleVisibility={() => hideAndShow(setPersonalVisibility, setServiceVisibility)}
        />
      </section>
    </Container>
  );
};

export default Quote;
