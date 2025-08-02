import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'theme1' | 'theme2' | 'theme3';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themeConfig: {
    name: string;
    description: string;
    layout: 'minimal' | 'sidebar' | 'grid';
  };
}

const themeConfigs = {
  theme1: {
    name: 'Minimalist',
    description: 'Clean and simple design with light colors',
    layout: 'minimal' as const,
  },
  theme2: {
    name: 'Dark Elegant',
    description: 'Professional dark theme with sidebar layout',
    layout: 'sidebar' as const,
  },
  theme3: {
    name: 'Colorful Creative',
    description: 'Vibrant and playful with grid-based layout',
    layout: 'grid' as const,
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('theme1');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && Object.keys(themeConfigs).includes(savedTheme)) {
      setThemeState(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const value: ThemeContextType = {
    theme,
    setTheme,
    themeConfig: themeConfigs[theme],
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
