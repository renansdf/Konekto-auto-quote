import React, { useState } from 'react';
import FormPersonalData from '../../components/FormPersonalData';
import FormServiceGroup from '../../components/FormServiceGroup';
import TranslationDocument from '../../components/TranslationDocument';
import RevisionDocument from '../../components/RevisionDocument';
import TimebasedDocument from '../../components/TimebasedDocument';
import { Container } from './styles';

const Quote: React.FC = () => {
  const [serviceGroupVisibility, setFormGroupVisibility] = useState(true);
  const [translationDocVisibility, setTranslationDocVisibility] = useState(false);
  const [revisionVisibility, setRevisionVisibility] = useState(false);
  const [timebasedVisibility, setTimebasedVisibility] = useState(false);
  const [personalVisibility, setPersonalVisibility] = useState(false);

  const hideAndShow = (toHide: Function, toShow: Function) => {
    toHide(false); toShow(true);
  };

  return (
    <Container>
      <section>
        <FormServiceGroup
          isVisible={!!serviceGroupVisibility}
          showTranslation={() => hideAndShow(setFormGroupVisibility, setTranslationDocVisibility)}
          showRevision={() => hideAndShow(setFormGroupVisibility, setRevisionVisibility)}
          showTimebased={() => hideAndShow(setFormGroupVisibility, setTimebasedVisibility)}
        />

        <TranslationDocument
          isVisible={!!translationDocVisibility}
          toggleVisibility={() => hideAndShow(setTranslationDocVisibility, setPersonalVisibility)}
          goBackButton={() => hideAndShow(setTranslationDocVisibility, setFormGroupVisibility)}
        />

        <RevisionDocument
          isVisible={!!revisionVisibility}
          toggleVisibility={() => hideAndShow(setRevisionVisibility, setPersonalVisibility)}
          goBackButton={() => hideAndShow(setRevisionVisibility, setFormGroupVisibility)}
        />

        <TimebasedDocument
          isVisible={!!timebasedVisibility}
          toggleVisibility={() => hideAndShow(setTimebasedVisibility, setPersonalVisibility)}
          goBackButton={() => hideAndShow(setTimebasedVisibility, setFormGroupVisibility)}
        />

        <FormPersonalData
          isVisible={!!personalVisibility}
          backToTranslation={() => hideAndShow(setPersonalVisibility, setTranslationDocVisibility)}
          backToRevision={() => hideAndShow(setPersonalVisibility, setRevisionVisibility)}
          backToTimebased={() => hideAndShow(setPersonalVisibility, setTimebasedVisibility)}
          backToBegining={() => hideAndShow(setPersonalVisibility, setFormGroupVisibility)}
        />
      </section>
    </Container>
  );
};

export default Quote;
