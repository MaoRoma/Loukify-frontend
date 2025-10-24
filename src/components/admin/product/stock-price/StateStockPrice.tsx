import { Card } from "@/components/ui/card";
import {
  ArrowBigLeft,
  DollarSign,
  Package,
  TrendingUp,
  Upload,
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

function StateProduct({
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

export function StockPriceStats() {
  return (
    <>
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">
            Stock & Prices
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage and engage with your product catalog
          </p>
        </div>
        <div className="flex space-x-2">
          <a href="/admin/product">
            <Button className="bg-white text-black border border-gray-500">
              <ArrowBigLeft className="w-4 h-4" />
              Back
            </Button>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <StateProduct
          value="4"
          label="Inventory Value"
          description="Total stock value"
          icon={<Package className="w-6 h-6 text-black" />}
        />
        <StateProduct
          value="2"
          label="Total Product"
          description="Products tracked"
          icon={<DollarSign className="w-6 h-6 text-black" />}
        />
        <StateProduct
          value="1"
          label="Low Stock"
          description="Needs restocking"
          icon={<Package className="w-6 h-6 text-yellow-600" />}
        />
        <StateProduct
          value="1"
          label="Out Stock"
          description="Unavailable items"
          icon={<TrendingUp className="w-6 h-6 text-red-600" />}
        />
      </div>
    </>
  );
}
