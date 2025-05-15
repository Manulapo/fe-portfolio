import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from './theme.provider';
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
    <HashRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SearchProvider>{children}</SearchProvider>
      </ThemeProvider>
    </HashRouter>
  );
};

export default AppProviders;
