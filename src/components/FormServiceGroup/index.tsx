import React from 'react';
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
}) => (
  <FormContainer isVisible={isVisible}>
    <Container>
      <Button type="button" onClick={showTranslation}>
        Tradução
      </Button>

      <Button type="button" onClick={showRevision}>
        Revisão
      </Button>

      <Button type="button" onClick={showTimebased}>
        Legenda e Transcrição
      </Button>
    </Container>
  </FormContainer>
);

export default FormServiceGroup;
