import styled from 'styled-components';

export const Container = styled.div`
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
