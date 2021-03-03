import styled, { css } from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  button{
    max-width: 400px;
  }

  button + button{
    margin-left: 20px;
  }
`;

interface IPdfButtonProps {
  isActive: boolean;
}

export const DownloadPdf = styled.button<IPdfButtonProps>`
  border: none;
  background: none;
  text-decoration: underline;
  color: #fff;
  font-size: 17px;
  letter-spacing: 1px;
  font-weight: 100;
  opacity: .5;

  ${(props) => props.isActive && css`
    opacity: 1;
    cursor: pointer;
  `}
`;
