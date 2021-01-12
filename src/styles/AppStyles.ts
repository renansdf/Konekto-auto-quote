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

interface ISectionButtonProps {
  isActive?: boolean;
}

export const SectionButton = styled.button<ISectionButtonProps>`
  width: 100%;
  padding: 9px 20px 8px;
  border-style: solid;
  border-width: 2px;
  border-color: #fff;
  border-radius: 50px;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  line-height: 1.4em;
  letter-spacing: 2px;
  cursor: pointer;

  opacity: .4;

  &:focus{
    outline:none;
  }

  ${(props) => props.isActive && css`
    opacity: 1;
  `}
`;

export const GoBackButton = styled.button`
  align-self: flex-start;
  margin-bottom: 15px;
  background: #fff;
  padding: 11px 20px 10px;
  border: none;
  color: #15008a;
  border-radius: 30px;
  text-transform: uppercase;
  font-size: 9px;
  letter-spacing: 2px;
  font-weight: 800;
  outline: none;
  cursor: pointer;
`;
