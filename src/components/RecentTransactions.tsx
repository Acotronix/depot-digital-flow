import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Download } from "lucide-react";

const transactions = [
  {
    id: "TXN-2024-001234",
    type: "Receipt",
    material: "Steel Rails - 52 kg/m",
    quantity: "50 MT",
    value: "₹15,25,000",
    status: "Completed",
    date: "2024-01-15",
    depot: "Mumbai Central Depot"
  },
  {
    id: "TXN-2024-001235",
    type: "Issue",
    material: "Concrete Sleepers",
    quantity: "200 Nos",
    value: "₹8,50,000",
    status: "Pending",
    date: "2024-01-15",
    depot: "Kurla Workshop"
  },
  {
    id: "TXN-2024-001236",
    type: "Requisition",
    material: "Ballast Grade-I",
    quantity: "100 MT",
    value: "₹2,25,000",
    status: "Approved",
    date: "2024-01-14",
    depot: "Stores Depot"
  },
  {
    id: "TXN-2024-001237",
    type: "Receipt",
    material: "Signal Cables",
    quantity: "5 KM",
    value: "₹12,75,000",
    status: "Under Inspection",
    date: "2024-01-14",
    depot: "Signal Depot"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-success text-success-foreground";
    case "Pending":
      return "bg-warning text-warning-foreground";
    case "Approved":
      return "bg-primary text-primary-foreground";
    case "Under Inspection":
      return "bg-secondary text-secondary-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "Receipt":
      return "bg-success-green text-white";
    case "Issue":
      return "bg-railway-orange text-white";
    case "Requisition":
      return "bg-railway-blue text-white";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const RecentTransactions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <Badge className={getTypeColor(transaction.type)}>
                    {transaction.type}
                  </Badge>
                  <span className="font-mono text-sm text-muted-foreground">
                    {transaction.id}
                  </span>
                </div>
                <p className="font-medium">{transaction.material}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Qty: {transaction.quantity}</span>
                  <span>Value: {transaction.value}</span>
                  <span>Date: {transaction.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">{transaction.depot}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge className={getStatusColor(transaction.status)}>
                  {transaction.status}
                </Badge>
                <div className="flex gap-1">
                  <Button size="sm" variant="outline">
                    <Eye className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;