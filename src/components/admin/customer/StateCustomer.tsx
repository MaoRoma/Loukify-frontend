import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UserPlus } from "lucide-react";

interface StatCardProps {
  value: string | number;
  label: string;
  valueColor?: string;
}

function StatCard({
  value,
  label,
  valueColor = "text-foreground",
}: StatCardProps) {
  return (
    <Card className="p-6 flex flex-col items-center justify-center">
      <div className={`text-4xl font-semibold ${valueColor}`}>{value}</div>
      <div className="text-sm text-muted-foreground mt-2">{label}</div>
    </Card>
  );
}

export function CustomerStats() {
  return (
    <>
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">Customers</h1>
          <p className="text-muted-foreground mt-1">
            Manage and engage with your customer base
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard value="4" label="Total Customers" />
        <StatCard value="2" label="Active" valueColor="text-green-600" />
        <StatCard value="1" label="VIP Members" />
        <StatCard value="1" label="New This Month" valueColor="text-blue-600" />
      </div>
    </>
  );
}
