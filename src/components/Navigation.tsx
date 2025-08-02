import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, Mail, Sidebar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navigation: React.FC = () => {
  const { themeConfig } = useTheme();

  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/about', label: 'About', icon: User },
    { to: '/contact', label: 'Contact', icon: Mail },
  ];

  if (themeConfig.layout === 'sidebar') {
    return (
      <aside className="w-64 bg-card border-r min-h-screen animate-theme-switch">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <Sidebar className="w-5 h-5 text-accent" />
            <span className="font-semibold text-foreground">Navigation</span>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-accent text-accent-foreground font-medium'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>
    );
  }

  if (themeConfig.layout === 'minimal') {
    return (
      <nav className="bg-card border-b animate-theme-switch">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-4 border-b-2 transition-all duration-200 ${
                    isActive
                      ? 'border-primary text-primary font-medium'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`
                }
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    );
  }


  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
      <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm rounded-full px-6 py-3 theme-shadow border animate-theme-switch">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              }`
            }
          >
            <item.icon className="w-4 h-4" />
            <span className="hidden md:inline text-sm">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;