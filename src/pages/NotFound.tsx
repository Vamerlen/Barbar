
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Scissors } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pattern p-4">
      <div className="glass-card p-12 rounded-xl shadow-lg max-w-md w-full text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-barber-gold/10 rounded-full flex items-center justify-center">
            <Scissors className="h-8 w-8 text-barber-gold" />
          </div>
        </div>
        <h1 className="text-6xl font-bold mb-4 text-barber-gold">404</h1>
        <p className="text-2xl font-medium mb-6">Page Not Found</p>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary inline-block">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
