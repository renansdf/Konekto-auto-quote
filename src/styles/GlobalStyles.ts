import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  body{
    background: #fff;
    font-family: 'Roboto';
    color: #000;
    letter-spacing: 1px;

    margin: 0px;
  }

  h1, h2, h3, h4, h5, h6{
    font-weight: 900;
    margin: 0px 0 20px;
  }
`;

export default GlobalStyle;
