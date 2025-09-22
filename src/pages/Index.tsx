import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import StatsCard from "@/components/StatsCard";
import RecentTransactions from "@/components/RecentTransactions";
import AlertsWidget from "@/components/AlertsWidget";
import { 
  Package, 
  TrendingUp, 
  AlertTriangle, 
  IndianRupee,
  Truck,
  ShoppingCart,
  BarChart3,
  Users
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex h-[calc(100vh-80px)]">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="space-y-6">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg p-6 shadow-lg">
              <h1 className="text-3xl font-bold mb-2">Welcome to UDM Portal</h1>
              <p className="text-primary-foreground/80">
                User Depot Module - Comprehensive Material Management System for Indian Railways
              </p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Total Stock Value"
                value={15680000}
                valuePrefix="₹"
                icon={IndianRupee}
                trend={{ value: "12.5%", isPositive: true }}
                className="border-l-4 border-l-success-green"
              />
              <StatsCard
                title="Active Items"
                value={1247}
                icon={Package}
                trend={{ value: "3.2%", isPositive: true }}
                className="border-l-4 border-l-railway-blue"
              />
              <StatsCard
                title="Pending Receipts"
                value={23}
                icon={TrendingUp}
                trend={{ value: "5.1%", isPositive: false }}
                className="border-l-4 border-l-warning-amber"
              />
              <StatsCard
                title="Critical Alerts"
                value={8}
                icon={AlertTriangle}
                className="border-l-4 border-l-destructive"
              />
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-success-green/10 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-success-green" />
                  </div>
                  <div>
                    <h3 className="font-medium">Material Receipt</h3>
                    <p className="text-sm text-muted-foreground">Record new arrivals</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-railway-orange/10 rounded-lg">
                    <Truck className="h-5 w-5 text-railway-orange" />
                  </div>
                  <div>
                    <h3 className="font-medium">Material Issue</h3>
                    <p className="text-sm text-muted-foreground">Issue materials</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-railway-blue/10 rounded-lg">
                    <ShoppingCart className="h-5 w-5 text-railway-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium">New Requisition</h3>
                    <p className="text-sm text-muted-foreground">Create demand</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Generate Report</h3>
                    <p className="text-sm text-muted-foreground">View analytics</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <RecentTransactions />
              </div>
              <div>
                <AlertsWidget />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
