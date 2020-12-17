import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    background: #f5f4ff;
    font-family: 'Mulish';
    color: #483cc9;
    letter-spacing: 1px;
  }

  h1, h2, h3, h4, h5, h6{
    font-family: 'Castoro';
    font-style: italic;
    font-weight: 400;
  }
`;

export default GlobalStyle;
