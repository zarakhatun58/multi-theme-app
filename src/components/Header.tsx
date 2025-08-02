import React from 'react';
import { Theme, useTheme } from '../context/ThemeContext';
import { ChevronDown, Palette } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const { theme, setTheme, themeConfig } = useTheme();

  const themes = [
    { value: 'theme1' as Theme, label: 'Minimalist', description: 'Clean & Simple' },
    { value: 'theme2' as Theme, label: 'Dark Elegant', description: 'Professional Dark' },
    { value: 'theme3' as Theme, label: 'Colorful Creative', description: 'Vibrant & Playful' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b animate-theme-switch">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg theme-gradient flex items-center justify-center">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">ThemeVault</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Multi-Theme Experience
              </p>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                className="gap-2 min-w-[140px] animate-theme-switch hover:scale-105"
              >
                <span className="text-sm font-medium">{themeConfig.name}</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="w-56 bg-card/95 backdrop-blur-sm animate-theme-switch"
            >
              {themes.map((themeOption) => (
                <DropdownMenuItem
                  key={themeOption.value}
                  onClick={() => setTheme(themeOption.value)}
                  className={`cursor-pointer space-y-1 p-3 ${
                    theme === themeOption.value ? 'bg-accent' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{themeOption.label}</span>
                    {theme === themeOption.value && (
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {themeOption.description}
                  </p>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;