import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, Package, TrendingDown } from "lucide-react";

const alerts = [
  {
    id: 1,
    type: "Stock Alert",
    message: "Steel Rails - 52 kg/m stock below minimum threshold",
    severity: "high",
    icon: AlertTriangle,
    time: "2 mins ago",
    details: "Current: 15 MT, Minimum: 20 MT"
  },
  {
    id: 2,
    type: "Expiry Alert",
    message: "Lubricating Oil expires in 15 days",
    severity: "medium",
    icon: Clock,
    time: "1 hour ago",
    details: "Batch: LO-2023-0456, Qty: 50 Ltrs"
  },
  {
    id: 3,
    type: "Non-Moving Stock",
    message: "Signal Relays - No movement in 90 days",
    severity: "low",
    icon: TrendingDown,
    time: "3 hours ago",
    details: "Current Stock: 25 Nos, Value: ₹1,25,000"
  },
  {
    id: 4,
    type: "Pending Receipt",
    message: "Awaiting receipt acknowledgment",
    severity: "medium",
    icon: Package,
    time: "6 hours ago",
    details: "Consignment: CNS-2024-1567 from Stores Depot"
  }
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "high":
      return "bg-destructive text-destructive-foreground";
    case "medium":
      return "bg-warning text-warning-foreground";
    case "low":
      return "bg-secondary text-secondary-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const AlertsWidget = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-warning" />
          Alerts & Notifications
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
              <alert.icon className="h-4 w-4 mt-1 text-muted-foreground" />
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <Badge className={getSeverityColor(alert.severity)} variant="outline">
                    {alert.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{alert.time}</span>
                </div>
                <p className="text-sm font-medium">{alert.message}</p>
                <p className="text-xs text-muted-foreground">{alert.details}</p>
              </div>
              <Button size="sm" variant="outline" className="text-xs">
                View
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Button variant="outline" size="sm">
            View All Alerts
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AlertsWidget;