import { BrowserRouter } from 'react-router-dom';

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default AppProviders;
