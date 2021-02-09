import styled, { css } from 'styled-components';

interface IContainerAttr {
  isSelected?: boolean;
}

export const Container = styled.button<IContainerAttr>`
  width: 100%;
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
  outline: none;
  padding: 25px 10px;
  font-size: 13px;
  letter-spacing: 1px;
  border-radius: 12px;
  margin: 0 5px;

  transition: all .2s;

  cursor: pointer;

  &:first-child{
    margin-left: 0;
  }

  &:last-child{
    margin-right: 0;
  }

  ${(props) => props.isSelected && css`
    background: #fff;
    color: #000;
    box-shadow: 0px 6px 20px -10px #0d0053;
  `}
`;
