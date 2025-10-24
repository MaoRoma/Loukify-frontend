import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Mail, Phone, MapPin, TrendingUp } from "lucide-react";

interface Customer {
  id: number;
  name: string;
  initials: string;
  email: string;
  phone: string;
  location: string;
  orders: number;
  totalSpent: string;
  status: "Active" | "VIP" | "New";
}

const customers: Customer[] = [
  {
    id: 1,
    name: "Sophea Chen",
    initials: "SC",
    email: "sophea@example.com",
    phone: "+855 12 345 678",
    location: "Phnom Penh",
    orders: 5,
    totalSpent: "$217.50",
    status: "Active",
  },
  {
    id: 2,
    name: "Virak Phan",
    initials: "VP",
    email: "virak@example.com",
    phone: "+855 98 765 432",
    location: "Siem Reap",
    orders: 2,
    totalSpent: "$85.00",
    status: "Active",
  },
  {
    id: 3,
    name: "Channary Lim",
    initials: "CL",
    email: "channary@example.com",
    phone: "+855 77 123 456",
    location: "Battambang",
    orders: 8,
    totalSpent: "$425.00",
    status: "VIP",
  },
  {
    id: 4,
    name: "Dara Sok",
    initials: "DS",
    email: "dara@example.com",
    phone: "+855 89 654 321",
    location: "Phnom Penh",
    orders: 1,
    totalSpent: "$32.00",
    status: "New",
  },
  {
    id: 5,
    name: "Sophea Chen",
    initials: "SC",
    email: "sophea@example.com",
    phone: "+855 12 345 678",
    location: "Phnom Penh",
    orders: 5,
    totalSpent: "$217.50",
    status: "Active",
  },
  {
    id: 6,
    name: "Virak Phan",
    initials: "VP",
    email: "virak@example.com",
    phone: "+855 98 765 432",
    location: "Siem Reap",
    orders: 2,
    totalSpent: "$85.00",
    status: "Active",
  },
  {
    id: 7,
    name: "Channary Lim",
    initials: "CL",
    email: "channary@example.com",
    phone: "+855 77 123 456",
    location: "Battambang",
    orders: 8,
    totalSpent: "$425.00",
    status: "VIP",
  },
  {
    id: 8,
    name: "Dara Sok",
    initials: "DS",
    email: "dara@example.com",
    phone: "+855 89 654 321",
    location: "Phnom Penh",
    orders: 1,
    totalSpent: "$32.00",
    status: "New",
  },
];

function getStatusVariant(status: Customer["status"]) {
  switch (status) {
    case "Active":
      return "default";
    case "VIP":
      return "secondary";
    case "New":
      return "outline";
  }
}

export function CustomerTable() {
  return (
    <Card className="overflow-hidden">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">Customer Directory</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Customer
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Contact
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Location
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Orders
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Total Spent
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-medium text-sm">
                        {customer.initials}
                      </div>
                      <div>
                        <div className="font-medium text-foreground">
                          {customer.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          ID: {customer.id}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="w-3 h-3" />
                        {customer.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="w-3 h-3" />
                        {customer.phone}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {customer.location}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="w-3 h-3 text-muted-foreground" />
                      {customer.orders}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="font-medium text-foreground">
                      {customer.totalSpent}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge
                      variant={getStatusVariant(customer.status)}
                      className={
                        customer.status === "Active"
                          ? "bg-green-100 text-green-700 hover:bg-green-100"
                          : customer.status === "VIP"
                          ? "bg-foreground text-background hover:bg-foreground"
                          : "bg-blue-100 text-blue-700 hover:bg-blue-100"
                      }
                    >
                      {customer.status}
                    </Badge>
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
                        <Phone className="w-4 h-4" />
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
