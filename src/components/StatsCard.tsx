import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: ReactNode;
  gradient?: boolean;
  className?: string;
}

const StatsCard = ({ title, value, subtitle, icon, gradient = false, className }: StatsCardProps) => {
  return (
    <Card className={cn(
      "relative overflow-hidden transition-all duration-300 hover:scale-105 animate-slide-up",
      gradient ? "bg-gradient-card border-fitness-orange/20" : "",
      className
    )}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold text-foreground">{value}</p>
            {subtitle && (
              <p className="text-xs text-muted-foreground">{subtitle}</p>
            )}
          </div>
          <div className={cn(
            "p-3 rounded-full",
            gradient ? "bg-gradient-fitness shadow-glow" : "bg-accent"
          )}>
            <div className="text-white">{icon}</div>
          </div>
        </div>
        {gradient && (
          <div className="absolute inset-0 bg-gradient-to-r from-fitness-orange/10 to-fitness-blue/10 pointer-events-none" />
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;