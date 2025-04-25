import { BrowserRouter } from 'react-router-dom';
import { createContext, ReactNode, useState } from 'react';

export const SearchContext = createContext<
  | {
      searchTerm: string;
      setSearchTerm: (term: string) => void;
    }
  | undefined
>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <SearchProvider>{children}</SearchProvider>
    </BrowserRouter>
  );
};

export default AppProviders;
