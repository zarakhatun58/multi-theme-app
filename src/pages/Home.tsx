import React from 'react';
import { useApi } from '../hooks/useApi';
import { Product } from '../types/api';
import { useTheme } from '../context/ThemeContext';
import ProductCard from '../components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Sparkles, Zap, Heart } from 'lucide-react';

const Home: React.FC = () => {
  const { data: products, loading, error } = useApi<Product[]>('https://fakestoreapi.com/products?limit=12');
  const { themeConfig } = useTheme();

  const features = [
    { icon: Sparkles, title: 'Dynamic Themes', description: 'Switch between beautiful themes instantly' },
    { icon: Zap, title: 'Fast Loading', description: 'Optimized performance across all devices' },
    { icon: Heart, title: 'User Focused', description: 'Designed with user experience in mind' },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-4">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
          <p className="text-muted-foreground">Loading amazing products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 max-w-md mx-auto">
          <p className="text-destructive font-medium">Error loading products:</p>
          <p className="text-sm text-muted-foreground mt-1">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12 animate-theme-switch">
      <section className="text-center space-y-6">
        <div className="space-y-4">
          <Badge variant="secondary" className="px-4 py-1">
            Current Theme: {themeConfig.name}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Welcome to ThemeVault
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the power of dynamic theming with our multi-layout design system. 
            {themeConfig.description}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="gap-2 hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
            Explore Products
          </Button>
          <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
            Learn More
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="text-center hover:scale-105 transition-all duration-300 theme-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full theme-gradient flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-foreground">Featured Products</h2>
          <p className="text-muted-foreground">
            Discover our curated collection of amazing products
          </p>
        </div>

        <div className={`
          ${themeConfig.layout === 'grid' ? 'card-grid' : 
            themeConfig.layout === 'sidebar' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' :
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'}
        `}>
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section className="text-center py-12 theme-gradient rounded-2xl text-white">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Ready to Transform Your Experience?</h2>
          <p className="text-lg opacity-90 max-w-md mx-auto">
            Try switching between our different themes to see the magic happen!
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            className="mt-6 hover:scale-105 transition-transform"
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;