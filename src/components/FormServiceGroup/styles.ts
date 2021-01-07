import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  background: transparent;
  border: 2px solid #fff;
  border-radius: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;

  padding: 30px 20px;
  width: 46%;

  font-size: 14px;
  font-weight: 200;
  letter-spacing: 1px;
  line-height: 1.4em;

  transition: all .2s;

  span{
    font-size: 12px;
    font-weight: bold;
    line-height: 1.2em;
    margin-top: 2px;
    letter-spacing: 0px;
  }

  &:hover{
    background: #fff;
    color: #5347d5;
    box-shadow: 0px 6px 20px -10px #0d0053;
  }
`;
