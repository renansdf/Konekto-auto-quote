import styled, { css } from 'styled-components';
import BGBody from '../images/bg-body.png';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${BGBody});
  background-size: 100%;
  background-repeat: repeat-y;
  background-position: 0 0;
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1000px;
  display: flex;
  padding: 60px 0;
`;

interface FormContainerProps {
  isVisible: boolean;
}

export const FormContainer = styled.section<FormContainerProps>`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #000;
  box-shadow: 0 6px 30px -12px #000;

  padding: 50px;
  border-radius: 3px;
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
  color: #000;
  text-transform: uppercase;
  font-size: 9px;
  letter-spacing: 2px;
  font-weight: 800;
  outline: none;
  cursor: pointer;
`;
