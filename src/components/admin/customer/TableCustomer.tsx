"use client";

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

interface CustomerTableProps {
  searchQuery?: string;
}

export function CustomerTable({ searchQuery = "" }: CustomerTableProps) {
  // Filter customers based on search query
  const filteredCustomers = customers.filter((customer) => {
    const query = searchQuery.toLowerCase();
    return (
      customer.name.toLowerCase().includes(query) ||
      customer.email.toLowerCase().includes(query) ||
      customer.phone.toLowerCase().includes(query) ||
      customer.location.toLowerCase().includes(query)
    );
  });

  return (
    <Card className="overflow-hidden">
      <div className="p-4 sm:p-6">
        <h2 className="text-base sm:text-lg font-semibold mb-4">
          Customer Directory
        </h2>

        {/* Mobile Card View */}
        <div className="block md:hidden space-y-3">
          {filteredCustomers.length === 0 ? (
            <div className="py-8 text-center text-muted-foreground text-sm">
              No customers found matching your search.
            </div>
          ) : (
            filteredCustomers.map((customer) => (
              <Card key={customer.id} className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium text-foreground">
                      {customer.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      #{customer.id.toString().padStart(3, "0")}
                    </div>
                  </div>
                  <div className="font-semibold text-foreground">
                    {customer.totalSpent}
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-3 h-3 shrink-0" />
                    <span className="truncate">{customer.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-3 h-3 shrink-0" />
                    <span>{customer.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span>{customer.location}</span>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
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
              {filteredCustomers.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="py-8 text-center text-muted-foreground"
                  >
                    No customers found matching your search.
                  </td>
                </tr>
              ) : (
                filteredCustomers.map((customer) => (
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
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
}
