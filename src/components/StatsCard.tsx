import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  className?: string;
  valuePrefix?: string;
  valueSuffix?: string;
}

const StatsCard = ({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  className,
  valuePrefix = "",
  valueSuffix = ""
}: StatsCardProps) => {
  return (
    <Card className={cn("shadow-md hover:shadow-lg transition-shadow", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {valuePrefix}{typeof value === 'number' ? value.toLocaleString() : value}{valueSuffix}
        </div>
        {trend && (
          <Badge 
            variant={trend.isPositive ? "default" : "destructive"}
            className={cn(
              "text-xs mt-1",
              trend.isPositive 
                ? "bg-success text-success-foreground" 
                : "bg-destructive text-destructive-foreground"
            )}
          >
            {trend.isPositive ? "+" : ""}{trend.value}
          </Badge>
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;