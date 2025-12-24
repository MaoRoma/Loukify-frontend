import { Card } from "@/components/ui/card";
import { Package, User } from "lucide-react";

interface StatCardProps {
  value: string | number;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  valueColor?: string;
}

function StateCustomer({
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
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${valueColor}`}
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

export function CustomerStats() {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">
            Customers
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1">
            Manage and engage with your customer base
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <StateCustomer
          value="4"
          label="Total Customers"
          icon={<User className="w-5 h-5 sm:w-6 sm:h-6" />}
        />
        <StateCustomer
          value="1"
          label="New This Month"
          icon={
            <User className="text-shadow-green-600 w-5 h-5 sm:w-6 sm:h-6" />
          }
          valueColor="text-blue-600"
        />
      </div>
    </>
  );
}
