import { createContext, useState, ReactNode } from 'react';

interface ParamsContextType {
  paymentParams: any;
  setPaymentParams: (params: any) => void;
}

export const ParamsContext = createContext<ParamsContextType>({
  paymentParams: null,
  setPaymentParams: () => {},
});

interface ParamsProviderProps {
  children: ReactNode;
}

export const ParamsProvider = ({ children }: ParamsProviderProps) => {
  const [paymentParams, setPaymentParams] = useState(null);

  return (
    <ParamsContext.Provider value={{ paymentParams, setPaymentParams }}>
      {children}
    </ParamsContext.Provider>
  );
};
