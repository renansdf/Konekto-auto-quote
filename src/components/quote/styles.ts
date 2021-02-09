import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  min-height: 400px;

  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  section{
    width: 100%;
    max-width: 500px;
  }

  h1{
    font-size: 32px;
  }

  p{
    text-align: center;
    max-width: 300px;
    margin: 0 auto 20px;
  }

`;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: linear-gradient(123deg,#15008a,#5347d5);
  box-shadow: 0 6px 30px -12px #15008a;

  padding: 50px;
  border-radius: 30px;

  width: 100%;

  input, select{
    width: 100%;
    margin-bottom: 17px;
    padding: 9px 25px;
    border: 1px #000;
    border-radius: 20px;
    color: #15008a;
    font-size: 16px;
    line-height: 1.4em;

    &:focus{
      outline: none;
    }
  }
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
`;
