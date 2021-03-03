import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const QuotedServices = styled.div`
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
  border-top: 1px solid #000;
`;
