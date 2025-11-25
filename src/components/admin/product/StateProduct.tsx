import { Card } from "@/components/ui/card";
import { DollarSign, Package, Plus, Upload } from "lucide-react";
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
    <Card className="p-4 sm:p-6">
      <div className="flex items-start justify-between mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-medium text-foreground">
          {label}
        </h3>
        {icon && <div className="text-gray-400">{icon}</div>}
      </div>
      <div className="space-y-2">
        <div
          className={`text-3xl sm:text-4xl md:text-5xl font-bold ${valueColor}`}
        >
          {value}
        </div>
        {description && (
          <p className="text-xs sm:text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </Card>
  );
}

export function ProductStats() {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">
            Products
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1">
            Manage and engage with your product catalog
          </p>
        </div>
        <div className="flex space-x-2">
          <a href="/admin/product/add-product">
            <Button className="text-xs sm:text-sm">
              <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
              Add Product
            </Button>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StateProduct
          value="4"
          label="Total Products"
          description="In Your Catelog"
          icon={<Package className="w-5 h-5 sm:w-6 sm:h-6" />}
        />
        <StateProduct
          value="1"
          label="Categories"
          description="Product categories"
          icon={<Package className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />}
        />
        <StateProduct
          value="1"
          label="Low Stock"
          description="Needs restocking"
          icon={<Package className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />}
        />
      </div>
    </>
  );
}
