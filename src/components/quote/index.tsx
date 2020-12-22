import React, { useState } from 'react';
import FormPersonalData from '../FormPersonalData';
import FormServiceData from '../FormServiceData';
import { Container } from './styles';

const Quote: React.FC = () => {
  const [personalVisibility, setPersonalVisibility] = useState(true);
  const [serviceVisibility, setServiceVisibility] = useState(false);

  const hideAndShow = (toHide: Function, toShow: Function) => {
    toHide(false); toShow(true);
  };

  return (
    <Container>
      <section>
        <h1>Solicitar Orçamento</h1>
        <p>Preencha o formulário abaixo para solicitar um orçamento</p>

        <FormPersonalData
          isVisible={!!personalVisibility}
          toggleVisibility={() => hideAndShow(setPersonalVisibility, setServiceVisibility)}
        />

        <FormServiceData
          isVisible={!!serviceVisibility}
          toggleVisibility={() => hideAndShow(setServiceVisibility, setPersonalVisibility)}
        />
      </section>
    </Container>
  );
};

export default Quote;
