import React from 'react';
import { QuoteProvider } from './quoteData';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>
    <QuoteProvider>
      {children}
    </QuoteProvider>
  </ToastProvider>
);

export default AppProvider;
