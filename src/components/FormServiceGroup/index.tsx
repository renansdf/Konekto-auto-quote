import React from 'react';
import { FormContainer } from '../../styles/AppStyles';
import { Container, Button } from './styles';

interface IServiceGroupProps {
  isVisible: boolean;
  showWords: () => void;
  showMinutes: () => void;
}

const FormServiceGroup: React.FC<IServiceGroupProps> = ({
  isVisible,
  showWords,
  showMinutes,
}) => (
  <FormContainer isVisible={isVisible}>
    <Container>
      <Button type="button" onClick={showWords}>
        Tradução e revisão
        <span>de documentos e livros</span>
      </Button>

      <Button type="button" onClick={showMinutes}>
        Legenda e Transcrição
        <span>de filmes</span>
      </Button>
    </Container>
  </FormContainer>
);

export default FormServiceGroup;
