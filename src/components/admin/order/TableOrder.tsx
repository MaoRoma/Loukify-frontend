import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Mail, Phone, Printer, RefreshCcw } from "lucide-react";

interface Order {
  orderID: string;

  email: string;
  phone: string;
  date: string;
  orders: number;
  totalSpent: string;
  status: "Pending" | "Done";
}

const Orders: Order[] = [
  {
    orderID: "#ORD-001",

    email: "sophea@example.com",
    phone: "+855 12 345 678",
    date: "2023-09-01",
    orders: 5,
    totalSpent: "$217.50",
    status: "Pending",
  },
  {
    orderID: "#ORD-002",
    email: "virak@example.com",
    phone: "+855 98 765 432",
    date: "2023-09-02",
    orders: 2,
    totalSpent: "$85.00",
    status: "Pending",
  },
  {
    orderID: "#ORD-003",
    email: "channary@example.com",
    phone: "+855 77 123 456",
    date: "2023-09-03",
    orders: 8,
    totalSpent: "$425.00",
    status: "Done",
  },
  {
    orderID: "#ORD-004",
    email: "dara@example.com",
    phone: "+855 89 654 321",
    date: "2023-09-04",
    orders: 1,
    totalSpent: "$32.00",
    status: "Done",
  },
  {
    orderID: "#ORD-005",
    email: "sophea@example.com",
    phone: "+855 12 345 678",
    date: "2023-09-05",
    orders: 5,
    totalSpent: "$217.50",
    status: "Pending",
  },
  {
    orderID: "#ORD-006",
    email: "virak@example.com",
    phone: "+855 98 765 432",
    date: "2023-09-06",
    orders: 2,
    totalSpent: "$85.00",
    status: "Done",
  },
  {
    orderID: "#ORD-007",
    email: "channary@example.com",
    phone: "+855 77 123 456",
    date: "2023-09-07",
    orders: 8,
    totalSpent: "$425.00",
    status: "Pending",
  },
  {
    orderID: "#ORD-008",
    email: "dara@example.com",
    phone: "+855 89 654 321",
    date: "2023-09-08",
    orders: 1,
    totalSpent: "$32.00",
    status: "Done",
  },
];

function getStatusVariant(status: Order["status"]) {
  switch (status) {
    case "Pending":
      return "default";

    case "Done":
      return "outline";
  }
}

export function OrderTable() {
  return (
    <Card className="overflow-hidden flex">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Order ID
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Customer
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Total
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Date
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {Orders.map((order) => (
                <tr
                  key={order.orderID}
                  className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-medium text-foreground">
                          {order.orderID}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="w-3 h-3" />
                        {order.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="w-3 h-3" />
                        {order.phone}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge
                      variant={getStatusVariant(order.status)}
                      className={
                        order.status === "Pending"
                          ? "bg-green-100 text-green-700 hover:bg-green-100"
                          : order.status === "Done"
                          ? "bg-foreground text-background hover:bg-foreground"
                          : "bg-blue-100 text-blue-700 hover:bg-blue-100"
                      }
                    >
                      {order.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <div className="font-medium text-foreground">
                      {order.totalSpent}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        {order.date}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="border border-gray-400 h-8 w-8"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="border border-gray-400 h-8 w-8"
                      >
                        <Mail className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="border border-gray-400 h-8 w-8"
                      >
                        <RefreshCcw className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="border border-gray-400 h-8 w-8"
                      >
                        <Printer className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
}
