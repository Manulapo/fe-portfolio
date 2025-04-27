import { createContext, ReactNode, useState } from 'react';
import { HashRouter } from 'react-router-dom';

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
    <HashRouter >
      <SearchProvider>{children}</SearchProvider>
    </HashRouter>
  );
};

export default AppProviders;
