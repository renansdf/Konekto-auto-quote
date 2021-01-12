import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;
  padding-left: 40px;
`;

export const QuotedServices = styled.div`
  border-top: 1px solid #15008a;
  border-bottom: 1px solid #15008a;

  div{
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  div + div{
    border-top: 1px solid #ff8c8c;
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
