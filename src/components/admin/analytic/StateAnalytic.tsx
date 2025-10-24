import { Card } from "@/components/ui/card";
import {
  CalendarRange,
  DollarSign,
  Download,
  Package,
  ShoppingBag,
  TrendingUp,
  Upload,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

interface StatCardProps {
  value: string | number;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  valueColor?: string;
}

function StateAnalytics({
  value,
  label,
  description,
  icon,
  valueColor = "text-foreground",
}: StatCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-6">
        <h3 className="text-lg font-medium text-foreground">{label}</h3>
        {icon && <div className="text-gray-400">{icon}</div>}
      </div>
      <div className="space-y-2">
        <div className={`text-5xl font-bold ${valueColor}`}>{value}</div>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </Card>
  );
}

export function StateAnalytic() {
  return (
    <>
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">Tracking</h1>
          <p className="text-muted-foreground mt-1">
            Track your store's performance and growth
          </p>
        </div>
        <div className="flex space-x-2">
          <Button className="bg-white text-black border border-gray-500">
            <CalendarRange className="w-4 h-4" />
            Last 6 Months
          </Button>
          <Button className="bg- text-black border border-gray-500">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <StateAnalytics
          value="4"
          label="Total Revenue"
          description="In Your Catelog"
          icon={<DollarSign className="w-6 h-6" />}
        />
        <StateAnalytics
          value="2"
          label="Total Value"
          description="Total Orders"
          icon={<ShoppingBag className="w-6 h-6 text-orange-600" />}
        />
        <StateAnalytics
          value="1"
          label="New Customers"
          description="Product categories"
          icon={<UserRound className="w-6 h-6 text-green-600" />}
        />
        <StateAnalytics
          value="1"
          label="Conversion Rate"
          description="Needs restocking"
          icon={<TrendingUp className="w-6 h-6 text-green-600" />}
        />
      </div>
    </>
  );
}
