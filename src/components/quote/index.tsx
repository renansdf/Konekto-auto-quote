import React, { useState } from 'react';
import FormLanguageWords from '../FormLanguageWords';
import FormLanguageMinutes from '../FormLanguageMinutes';
import FormServiceWords from '../FormServiceWords';
import FormServiceMinutes from '../FormServiceMinutes';
import FormPersonalData from '../FormPersonalData';
import { Container } from './styles';
import FormServiceGroup from '../FormServiceGroup';

const Quote: React.FC = () => {
  const [serviceGroupVisibility, setFormGroupVisibility] = useState(true);
  const [wordsVisibility, setWordsVisibility] = useState(false);
  const [minutesVisibility, setMinutesVisibility] = useState(false);
  const [serviceWordsVisibility, setServiceWordsVisibility] = useState(false);
  const [serviceMinutesVisibility, setServiceMinutesVisibility] = useState(false);
  const [personalVisibility, setPersonalVisibility] = useState(false);

  const hideAndShow = (toHide: Function, toShow: Function) => {
    toHide(false); toShow(true);
  };

  return (
    <Container>
      <section>
        <h1>Solicitar Orçamento</h1>
        <p>Preencha o formulário abaixo para solicitar um orçamento</p>

        <FormServiceGroup
          isVisible={!!serviceGroupVisibility}
          showWords={() => hideAndShow(setFormGroupVisibility, setWordsVisibility)}
          showMinutes={() => hideAndShow(setFormGroupVisibility, setMinutesVisibility)}
        />

        <FormLanguageWords
          isVisible={!!wordsVisibility}
          toggleVisibility={() => hideAndShow(setWordsVisibility, setServiceWordsVisibility)}
          goBackButton={() => hideAndShow(setWordsVisibility, setFormGroupVisibility)}
        />

        <FormLanguageMinutes
          isVisible={!!minutesVisibility}
          toggleVisibility={() => hideAndShow(setMinutesVisibility, setServiceMinutesVisibility)}
          goBackButton={() => hideAndShow(setMinutesVisibility, setFormGroupVisibility)}
        />

        <FormServiceWords
          isVisible={!!serviceWordsVisibility}
          toggleVisibility={() => hideAndShow(setServiceWordsVisibility, setPersonalVisibility)}
          goBackButton={() => hideAndShow(setServiceWordsVisibility, setWordsVisibility)}
        />

        <FormServiceMinutes
          isVisible={!!serviceMinutesVisibility}
          toggleVisibility={() => hideAndShow(setServiceMinutesVisibility, setPersonalVisibility)}
          goBackButton={() => hideAndShow(setServiceMinutesVisibility, setMinutesVisibility)}
        />

        <FormPersonalData
          isVisible={!!personalVisibility}
          backToWords={() => hideAndShow(setPersonalVisibility, setServiceWordsVisibility)}
          backToMinutes={() => hideAndShow(setPersonalVisibility, setServiceMinutesVisibility)}
        />
      </section>
    </Container>
  );
};

export default Quote;
