import { 
  Package, 
  TrendingUp, 
  FileText, 
  ClipboardList, 
  BarChart3, 
  AlertTriangle,
  Home,
  Truck,
  ShoppingCart,
  Archive
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Package, label: "Stock Management" },
  { icon: TrendingUp, label: "Material Receipts" },
  { icon: Truck, label: "Material Issues" },
  { icon: ShoppingCart, label: "Requisitions" },
  { icon: FileText, label: "Reports" },
  { icon: BarChart3, label: "Analytics" },
  { icon: AlertTriangle, label: "Alerts & Notifications" },
  { icon: Archive, label: "Document Management" },
  { icon: ClipboardList, label: "Audit Trail" },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-card border-r shadow-sm h-full">
      <div className="p-4">
        <nav className="space-y-2">
          {sidebarItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "default" : "ghost"}
              className={cn(
                "w-full justify-start text-left",
                item.active 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "hover:bg-muted"
              )}
            >
              <item.icon className="mr-3 h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;