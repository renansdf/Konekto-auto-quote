/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from 'react';

interface IQuoteContext {
  personalData: IPersonalData | undefined;
  serviceData: IServiceData | undefined;
  setPersonalData: (data: IPersonalData) => void;
  setServiceData: (data: IServiceData) => void;

  totalCost: number | undefined;
  setTotalCost: (value: number) => void;
}

interface IPersonalData {
  name: string;
  phone: string;
  email: string;
  company: string;
  cnpjcpf: string;
}

interface IServiceData {
  service: string;
  languageMatrix: string;
  languageFinal: string;
  numberOfWords: number;
}

const QuoteContext = createContext<IQuoteContext>({} as IQuoteContext);

const QuoteProvider: React.FC = ({ children }) => {
  const [personalData, setPersonalData] = useState<IPersonalData>();
  const [serviceData, setServiceData] = useState<IServiceData>();
  const [totalCost, setTotalCost] = useState<number>();

  return (
    <QuoteContext.Provider value={{
      setPersonalData,
      personalData,
      setServiceData,
      serviceData,
      setTotalCost,
      totalCost,
    }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

function useQuoteData(): IQuoteContext {
  const context = useContext(QuoteContext);

  if (!context) {
    throw new Error('Context must be used inside QuoteProvider');
  }

  return context;
}

export { QuoteProvider, useQuoteData };
