import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Palette, Code, Smartphone, Zap, Shield, Globe } from 'lucide-react';

const About: React.FC = () => {
  const { themeConfig } = useTheme();

  const technologies = [
    { name: 'React 18', description: 'Modern React with hooks and context' },
    { name: 'TypeScript', description: 'Type-safe development experience' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
    { name: 'Local Storage', description: 'Persistent theme preferences' },
    { name: 'Fake Store API', description: 'External data integration' },
    { name: 'Responsive Design', description: 'Mobile-first approach' },
  ];

  const achievements = [
    { icon: Palette, title: '3 Unique Themes', value: 'Dynamic Switching' },
    { icon: Code, title: 'TypeScript', value: '100% Coverage' },
    { icon: Smartphone, title: 'Responsive', value: 'All Devices' },
    { icon: Zap, title: 'Performance', value: 'Optimized' },
    { icon: Shield, title: 'Security', value: 'Best Practices' },
    { icon: Globe, title: 'Accessibility', value: 'WCAG Compliant' },
  ];

  return (
    <div className="space-y-12 animate-theme-switch">
      {/* Header */}
      <section className="text-center space-y-4">
        <Badge variant="outline" className="px-4 py-1">
          About ThemeVault
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Crafted with Passion
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          ThemeVault is a cutting-edge multi-theme application that demonstrates 
          the power of dynamic design systems and modern web development practices.
        </p>
      </section>

      {/* Mission */}
      <section className="theme-gradient rounded-2xl p-8 md:p-12 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-lg opacity-90 leading-relaxed">
            To showcase how modern web applications can provide users with 
            personalized experiences through dynamic theming, responsive design, 
            and seamless user interactions. Currently displaying the{' '}
            <span className="font-semibold">{themeConfig.name}</span> theme with{' '}
            <span className="font-semibold">{themeConfig.layout}</span> layout.
          </p>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-foreground">Key Features</h2>
        <div className={`
          ${themeConfig.layout === 'grid' ? 'card-grid' : 
            themeConfig.layout === 'sidebar' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' :
            'grid grid-cols-2 md:grid-cols-3 gap-6'}
        `}>
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover:scale-105 transition-all duration-300 theme-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <achievement.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-sm">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold text-primary">{achievement.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center text-foreground">Built With</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {technologies.map((tech, index) => (
            <Card key={index} className="hover:scale-105 transition-all duration-300">
              <CardContent className="p-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Theme Info */}
      <section className="bg-card rounded-xl p-8 border theme-shadow">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            Current Theme: {themeConfig.name}
          </h2>
          <p className="text-muted-foreground">
            {themeConfig.description}
          </p>
          <p className="text-sm text-muted-foreground">
            Layout Style: <span className="capitalize font-medium">{themeConfig.layout}</span>
          </p>
          <Button className="mt-4 hover:scale-105 transition-transform">
            Switch Themes in Header
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;