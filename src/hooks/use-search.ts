import { SearchContext } from '@/app/providers';
import { useContext } from 'react';

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  const { searchTerm, setSearchTerm } = context;
  return { searchTerm, setSearchTerm };
};
