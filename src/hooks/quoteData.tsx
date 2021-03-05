/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from 'react';

interface IQuoteContext {
  personalData: IPersonalData | undefined;
  serviceData: IServiceData | undefined;
  setPersonalData: (data: IPersonalData) => void;
  setServiceData: (data: IServiceData) => void;

  serviceTotals: IServiceTotals | undefined;
  setServiceTotals: (totals: IServiceTotals) => void;
}

interface IPersonalData {
  name: string;
  phone: string;
  email: string;
  company: string;
  cnpjcpf: string;
}

interface IServiceData {
  service?: string;
  languageMatrix?: string;
  languageFinal?: string;
  languageGroup?: number;
  numberOfWords?: number;
  totalMinutes?: number;
  selectedService?: string;
}

interface IServiceTotals {
  totalCost: number | undefined;
  totalTime: number | undefined;
}

const QuoteContext = createContext<IQuoteContext>({} as IQuoteContext);

const QuoteProvider: React.FC = ({ children }) => {
  const [personalData, setPersonalData] = useState<IPersonalData>();
  const [serviceData, setServiceData] = useState<IServiceData>();
  const [serviceTotals, setServiceTotals] = useState<IServiceTotals>();

  return (
    <QuoteContext.Provider value={{
      setPersonalData,
      personalData,
      setServiceData,
      serviceData,
      setServiceTotals,
      serviceTotals,
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
