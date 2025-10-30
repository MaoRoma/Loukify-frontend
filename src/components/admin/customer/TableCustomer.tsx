import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  totalSpent: string;
}

const customers: Customer[] = [
  {
    id: 1,
    name: "Sophea Chen",
    email: "sophea@example.com",
    phone: "+855 12 345 678",
    location: "Phnom Penh",
    totalSpent: "$217.50",
  },
  {
    id: 2,
    name: "Virak Phan",
    email: "virak@example.com",
    phone: "+855 98 765 432",
    location: "Siem Reap",
    totalSpent: "$85.00",
  },
  {
    id: 3,
    name: "Channary Lim",
    email: "channary@example.com",
    phone: "+855 77 123 456",
    location: "Battambang",
    totalSpent: "$425.00",
  },
  {
    id: 4,
    name: "Dara Sok",
    email: "dara@example.com",
    phone: "+855 89 654 321",
    location: "Phnom Penh",
    totalSpent: "$32.00",
  },
  {
    id: 5,
    name: "Sophea Chen",
    email: "sophea@example.com",
    phone: "+855 12 345 678",
    location: "Phnom Penh",
    totalSpent: "$217.50",
  },
  {
    id: 6,
    name: "Virak Phan",
    email: "virak@example.com",
    phone: "+855 98 765 432",
    location: "Siem Reap",
    totalSpent: "$85.00",
  },
  {
    id: 7,
    name: "Channary Lim",
    email: "channary@example.com",
    phone: "+855 77 123 456",
    location: "Battambang",
    totalSpent: "$425.00",
  },
  {
    id: 8,
    name: "Dara Sok",
    email: "dara@example.com",
    phone: "+855 89 654 321",
    location: "Phnom Penh",
    totalSpent: "$32.00",
  },
];

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
                  Customer ID
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Name
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Email
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Phone Number
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Location
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Total Spent
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
                    <div className="font-medium text-foreground">
                      #{customer.id.toString().padStart(3, "0")}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="font-medium text-foreground">
                      {customer.name}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-3 h-3" />
                      {customer.email}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-3 h-3" />
                      {customer.phone}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {customer.location}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="font-medium text-foreground">
                      {customer.totalSpent}
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
