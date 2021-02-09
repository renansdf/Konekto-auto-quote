import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #000;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px 0 60px;
  margin: 0;

  h2{
    color: #fff;
    text-align: center;
    line-height: 1.2em;
  }

  div{
    display: flex;
  }
`;

export const BlockContato = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #fff;
  margin: 0 20px;

  strong{
    font-weight: 700;
  }
`;
