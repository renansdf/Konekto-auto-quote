import styled, { css } from 'styled-components';

interface IProductCardProps {
  isSelected?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-evenly;
  width: 100%;
  margin: 20px 0 40px;
`;

export const ProductCard = styled.div<IProductCardProps>`
  padding: 30px 20px;
  background: #fff;
  width: 100%;
  text-align: center;
  border: 1px solid #489ec7;

  h1{
    font-size: 24px;
    font-weight: 300;
  }

  h2{
    font-size: 32px;
  }

  h3{
    margin-bottom: 0px;
    font-weight: 400;
  }

  ${(props) => props.isSelected && css`
    background-color: red;
  `}
`;
