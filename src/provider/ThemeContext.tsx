import React, { createContext, useContext } from 'react';

type Theme = {
  colors: {
    primary: string;
    secondary: string;
  }
};

const defaultTheme: Theme = {
  colors: {
    primary: '#3498db',
    secondary: '#fd3c4f',
  }
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const useTheme = () => useContext(ThemeContext);

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};