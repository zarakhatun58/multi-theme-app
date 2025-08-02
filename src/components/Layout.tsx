import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Header from './Header';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { themeConfig } = useTheme();

  return (
    <div className="min-h-screen bg-background animate-theme-switch">
      <Header />
      
      <div className="pt-16">
        {themeConfig.layout === 'minimal' && (
          <>
            <Navigation />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
          </>
        )}

        {themeConfig.layout === 'sidebar' && (
          <div className="flex">
            <Navigation />
            <main className="flex-1 p-8">
              {children}
            </main>
          </div>
        )}

        {themeConfig.layout === 'grid' && (
          <>
            <main className="container mx-auto px-4 py-8 pb-24">
              {children}
            </main>
            <Navigation />
          </>
        )}
      </div>
    </div>
  );
};

export default Layout;