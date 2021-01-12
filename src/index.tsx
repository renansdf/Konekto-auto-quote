import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppProvider from './hooks/appProvider';
import GlobalStyle from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root'),
);
