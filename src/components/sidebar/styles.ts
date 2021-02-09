import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;
  padding-left: 40px;
`;

export const QuotedServices = styled.div`
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;

  div{
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  div + div{
    border-top: 1px solid #000;
  }

  strong{
    text-align: right;
  }
`;

export const QuoteCalculator = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;
