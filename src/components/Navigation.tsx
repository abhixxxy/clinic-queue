import { Button } from "@/components/ui/button";
import { Calendar, Home, User, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <Calendar className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">MediCare</span>
            </Link>
            
            <div className="hidden md:flex space-x-6">
              <Link to="/">
                <Button
                  variant={isActive("/") ? "default" : "ghost"}
                  className="flex items-center gap-2"
                >
                  <Home className="h-4 w-4" />
                  Home
                </Button>
              </Link>
              
              <Link to="/appointments">
                <Button
                  variant={isActive("/appointments") ? "default" : "ghost"}
                  className="flex items-center gap-2"
                >
                  <Calendar className="h-4 w-4" />
                  Book Appointment
                </Button>
              </Link>
              
              <Link to="/profile">
                <Button
                  variant={isActive("/profile") ? "default" : "ghost"}
                  className="flex items-center gap-2"
                >
                  <User className="h-4 w-4" />
                  My Profile
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Button className="flex items-center gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;