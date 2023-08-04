
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [priceCategory, setPriceCategory] = useState('');

  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        categoryFilter,
        setCategoryFilter,
        priceRange,
        setPriceRange,
        priceCategory,
        setPriceCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};