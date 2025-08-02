import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { themeConfig } = useTheme();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center animate-theme-switch">
      <Card className="max-w-md w-full mx-4 text-center theme-shadow">
        <CardContent className="p-8 space-y-6">
          <div className="space-y-4">
            <div className="w-16 h-16 rounded-full theme-gradient flex items-center justify-center mx-auto">
              <Search className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-6xl font-bold text-primary">404</h1>
            <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
            <p className="text-muted-foreground">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <p className="text-sm text-muted-foreground">
              Current theme: <span className="font-medium">{themeConfig.name}</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="gap-2 hover:scale-105 transition-transform">
              <Link to="/">
                <Home className="w-4 h-4" />
                Go Home
              </Link>
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="gap-2 hover:scale-105 transition-transform"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
