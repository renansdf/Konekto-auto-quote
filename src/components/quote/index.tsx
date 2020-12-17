import React from 'react';
import { Container, FormSection, SectionButton } from './styles';

const Quote: React.FC = () => (
  <Container>
    <form>
      <h1>Solicitar Orçamento</h1>
      <p>Preencha o formulário abaixo para solicitar um orçamento</p>
      <FormSection>
        <input placeholder="Nome" />
        <input placeholder="Telefone" />
        <input placeholder="E-mail" />
        <input placeholder="Empresa" />
        <input placeholder="CNPJ / CPF" />

        <SectionButton>Próximo: arquivo</SectionButton>
      </FormSection>

      <FormSection>
        <input placeholder="Número de palavras" type="number" />

        <select>
          <option value="">Selecione o serviço</option>
          <option value="traducao">Tradução</option>
          <option value="legenda">Legenda</option>
          <option value="revisao">Revisão</option>
          <option value="transcricao">Transcrição</option>
          <option value="traducao-juramentada">Tradução Juramentada</option>
        </select>

        <select>
          <option value="">Lingua fonte</option>
          <option value="pt-BR">Português</option>
          <option value="en-US">Inglês</option>
        </select>

        <select>
          <option value="">Lingua final</option>
          <option value="pt-BR">Português</option>
          <option value="en-US">Inglês</option>
        </select>

        <SectionButton>Próximo: opções adicionais</SectionButton>
      </FormSection>
    </form>
  </Container>
);

export default Quote;
