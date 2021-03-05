import React from 'react';
import { useQuoteData } from '../../hooks/quoteData';
import { FormContainer } from '../../styles/AppStyles';
import { Container, Button } from './styles';

interface IServiceGroupProps {
  isVisible: boolean;
  showTranslation: () => void;
  showRevision: () => void;
  showTimebased: () => void;
}

const FormServiceGroup: React.FC<IServiceGroupProps> = ({
  isVisible,
  showTranslation,
  showRevision,
  showTimebased,
}) => {
  const { serviceData, setServiceData } = useQuoteData();

  const handleSelectService = (serviceName: string, run: Function) => {
    setServiceData({ ...serviceData, selectedService: serviceName });
    run();
  };

  return (
    <FormContainer isVisible={isVisible}>
      <Container>
        <Button type="button" onClick={() => handleSelectService('translation', showTranslation)}>
          Tradução
        </Button>

        <Button type="button" onClick={() => handleSelectService('revision', showRevision)}>
          Revisão
        </Button>

        <Button type="button" onClick={() => handleSelectService('subtitling', showTimebased)}>
          Legenda
        </Button>

        <Button type="button" onClick={() => handleSelectService('transcription', showTimebased)}>
          Transcrição
        </Button>
      </Container>
    </FormContainer>
  );
};

export default FormServiceGroup;
