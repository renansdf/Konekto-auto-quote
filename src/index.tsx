import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QuoteProvider } from './hooks/quoteData';
import GlobalStyle from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <QuoteProvider>
      <App />
    </QuoteProvider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root'),
);
