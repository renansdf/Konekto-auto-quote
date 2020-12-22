import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
`;

interface FormContainerProps {
  isVisible: boolean;
}

export const FormContainer = styled.section<FormContainerProps>`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: linear-gradient(123deg,#15008a,#5347d5);
  box-shadow: 0 6px 30px -12px #15008a;

  padding: 50px;
  border-radius: 30px;

  width: 100%;

  form{
    width: 100%;
  }

  ${(props) => props.isVisible && css`
    display: flex;
  `}
`;

export const SectionButton = styled.button`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  border-style: solid;
  border-width: 2px;
  border-color: #fff;
  border-radius: 50px;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  line-height: 1.2em;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;

  &:focus{
    outline:none;
  }
`;
