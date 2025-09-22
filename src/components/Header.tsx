import { Bell, LogOut, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-lg border-b-4 border-railway-orange">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-railway-orange rounded-full flex items-center justify-center font-bold text-white">
                IR
              </div>
              <div>
                <h1 className="text-2xl font-bold">User Depot Module</h1>
                <p className="text-sm text-primary-foreground/80">Indian Railways - Material Management System</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="relative border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-2 -right-2 bg-railway-orange text-white text-xs h-5 w-5 flex items-center justify-center p-0">
                3
              </Badge>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  <User className="h-4 w-4 mr-2" />
                  Depot Manager
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;