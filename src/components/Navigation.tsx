import { Link, useLocation } from "react-router-dom";
import { Home, TrendingUp, Users, Trophy, Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Dashboard" },
    { path: "/progress", icon: TrendingUp, label: "Progress" },
    { path: "/friends", icon: Users, label: "Friends" },
    { path: "/leagues", icon: Trophy, label: "Leagues" },
  ];

  return (
    <nav className="bg-card border-b border-border/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-fitness p-2 rounded-lg shadow-glow">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-fitness bg-clip-text text-transparent">
              FitTracker
            </span>
          </div>

          <div className="flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-gradient-fitness text-white shadow-glow"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;