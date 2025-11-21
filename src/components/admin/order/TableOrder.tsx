"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Mail, Printer } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image?: string;
}

interface Order {
  orderID: string;
  customerID: string;
  email: string;
  phone: string;
  date: string;
  orders: number;
  totalSpent: string;
  status: "Pending" | "Completed";
  items: OrderItem[];
}

const Orders: Order[] = [
  {
    orderID: "#ORD-001",
    customerID: "#001",
    email: "sophea@example.com",
    phone: "+855 12 345 678",
    date: "2023-09-01",
    orders: 5,
    totalSpent: "$217.50",
    status: "Pending",
    items: [
      { id: "1", name: "Wireless Headphones", quantity: 2, price: 45.0 },
      { id: "2", name: "Phone Case", quantity: 1, price: 15.5 },
      { id: "3", name: "USB Cable", quantity: 3, price: 12.0 },
      { id: "4", name: "Screen Protector", quantity: 2, price: 8.0 },
      { id: "5", name: "Power Bank", quantity: 1, price: 35.0 },
    ],
  },
  {
    orderID: "#ORD-002",
    customerID: "#002",
    email: "virak@example.com",
    phone: "+855 98 765 432",
    date: "2023-09-02",
    orders: 2,
    totalSpent: "$85.00",
    status: "Pending",
    items: [
      { id: "1", name: "Bluetooth Speaker", quantity: 1, price: 55.0 },
      { id: "2", name: "Phone Stand", quantity: 2, price: 15.0 },
    ],
  },
  {
    orderID: "#ORD-003",
    customerID: "#003",
    email: "channary@example.com",
    phone: "+855 77 123 456",
    date: "2023-09-03",
    orders: 8,
    totalSpent: "$425.00",
    status: "Completed",
    items: [
      { id: "1", name: "Laptop Bag", quantity: 1, price: 75.0 },
      { id: "2", name: "Wireless Mouse", quantity: 2, price: 35.0 },
      { id: "3", name: "Keyboard", quantity: 1, price: 85.0 },
      { id: "4", name: "Monitor Stand", quantity: 1, price: 45.0 },
      { id: "5", name: "Webcam", quantity: 1, price: 65.0 },
      { id: "6", name: "USB Hub", quantity: 2, price: 25.0 },
      { id: "7", name: "Cable Organizer", quantity: 3, price: 10.0 },
      { id: "8", name: "Desk Lamp", quantity: 1, price: 40.0 },
    ],
  },
  {
    orderID: "#ORD-004",
    customerID: "#004",
    email: "dara@example.com",
    phone: "+855 89 654 321",
    date: "2023-09-04",
    orders: 1,
    totalSpent: "$32.00",
    status: "Completed",
    items: [{ id: "1", name: "Phone Charger", quantity: 1, price: 32.0 }],
  },
  {
    orderID: "#ORD-005",
    customerID: "#001",
    email: "sophea@example.com",
    phone: "+855 12 345 678",
    date: "2023-09-05",
    orders: 5,
    totalSpent: "$217.50",
    status: "Pending",
    items: [
      { id: "1", name: "Smart Watch", quantity: 1, price: 125.0 },
      { id: "2", name: "Watch Band", quantity: 2, price: 18.5 },
      { id: "3", name: "Charging Dock", quantity: 1, price: 35.0 },
      { id: "4", name: "Screen Cleaner", quantity: 3, price: 6.5 },
      { id: "5", name: "Carrying Case", quantity: 1, price: 15.0 },
    ],
  },
  {
    orderID: "#ORD-006",
    customerID: "#002",
    email: "virak@example.com",
    phone: "+855 98 765 432",
    date: "2023-09-06",
    orders: 2,
    totalSpent: "$85.00",
    status: "Completed",
    items: [
      { id: "1", name: "Tablet Stand", quantity: 1, price: 42.0 },
      { id: "2", name: "Stylus Pen", quantity: 1, price: 43.0 },
    ],
  },
  {
    orderID: "#ORD-007",
    customerID: "#003",
    email: "channary@example.com",
    phone: "+855 77 123 456",
    date: "2023-09-07",
    orders: 8,
    totalSpent: "$425.00",
    status: "Pending",
    items: [
      { id: "1", name: "Gaming Headset", quantity: 1, price: 95.0 },
      { id: "2", name: "Gaming Mouse", quantity: 1, price: 65.0 },
      { id: "3", name: "Mouse Pad", quantity: 2, price: 20.0 },
      { id: "4", name: "Keyboard Wrist Rest", quantity: 1, price: 25.0 },
      { id: "5", name: "Cable Management Kit", quantity: 1, price: 30.0 },
      { id: "6", name: "LED Strip Lights", quantity: 2, price: 35.0 },
      { id: "7", name: "Controller", quantity: 1, price: 75.0 },
      {
        id: "8",
        name: "Controller Charging Station",
        quantity: 1,
        price: 40.0,
      },
    ],
  },
  {
    orderID: "#ORD-008",
    customerID: "#004",
    email: "dara@example.com",
    phone: "+855 89 654 321",
    date: "2023-09-08",
    orders: 1,
    totalSpent: "$32.00",
    status: "Completed",
    items: [{ id: "1", name: "AUX Cable", quantity: 1, price: 32.0 }],
  },
];

function getStatusVariant(status: Order["status"]) {
  switch (status) {
    case "Pending":
      return "default";
    case "Completed":
      return "outline";
  }
}

interface OrderTableProps {
  searchQuery?: string;
  sortByPriority?: boolean;
}

export function OrderTable({ searchQuery = "", sortByPriority = false }: OrderTableProps) {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [orders, setOrders] = useState<Order[]>(Orders);

  // Filter orders based on search query
  let filteredOrders = orders.filter((order) => {
    const query = searchQuery.toLowerCase();
    return (
      order.orderID.toLowerCase().includes(query) ||
      order.email.toLowerCase().includes(query) ||
      order.customerID.toLowerCase().includes(query) ||
      order.status.toLowerCase().includes(query) ||
      order.phone.toLowerCase().includes(query)
    );
  });

  // Sort by priority if filter is active
  if (sortByPriority) {
    filteredOrders = [...filteredOrders].sort((a, b) => {
      // First priority: Pending orders come before Completed orders
      if (a.status === "Pending" && b.status === "Completed") return -1;
      if (a.status === "Completed" && b.status === "Pending") return 1;
      
      // Second priority: Within same status, sort by date (oldest first - FIFO)
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateA - dateB;
    });
  }

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
    setIsDialogOpen(true);
  };

  const handleStatusChange = (orderID: string, newStatus: "Pending" | "Completed") => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.orderID === orderID ? { ...order, status: newStatus } : order
      )
    );
  };

  const handlePrintReceipt = (order: Order) => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const receiptHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Receipt - ${order.orderID}</title>
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: 'Courier New', monospace;
              padding: 20px;
              max-width: 400px;
              margin: 0 auto;
            }
            .receipt {
              border: 2px solid #000;
              padding: 20px;
            }
            .header {
              text-align: center;
              border-bottom: 2px dashed #000;
              padding-bottom: 15px;
              margin-bottom: 15px;
            }
            .store-name {
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 5px;
            }
            .store-info {
              font-size: 12px;
              line-height: 1.5;
            }
            .section {
              margin-bottom: 15px;
              padding-bottom: 15px;
              border-bottom: 1px dashed #000;
            }
            .section:last-child {
              border-bottom: none;
            }
            .label {
              font-weight: bold;
              display: inline-block;
              width: 120px;
            }
            .items-table {
              width: 100%;
              margin-top: 10px;
            }
            .items-table th {
              text-align: left;
              border-bottom: 1px solid #000;
              padding: 5px 0;
              font-size: 12px;
            }
            .items-table td {
              padding: 8px 0;
              font-size: 12px;
            }
            .text-right {
              text-align: right;
            }
            .text-center {
              text-align: center;
            }
            .total-section {
              margin-top: 15px;
              padding-top: 15px;
              border-top: 2px solid #000;
            }
            .total-row {
              display: flex;
              justify-content: space-between;
              font-size: 18px;
              font-weight: bold;
              margin-top: 10px;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              font-size: 12px;
            }
            @media print {
              body {
                padding: 0;
              }
              .receipt {
                border: none;
              }
            }
          </style>
        </head>
        <body>
          <div class="receipt">
            <div class="header">
              <div class="store-name">YOUR STORE</div>
              <div class="store-info">
                123 Business Street<br>
                City, State 12345<br>
                Tel: +855 12 345 678<br>
                Email: store@example.com
              </div>
            </div>

            <div class="section">
              <div><span class="label">Order ID:</span> ${order.orderID}</div>
              <div><span class="label">Customer ID:</span> ${
                order.customerID
              }</div>
              <div><span class="label">Date:</span> ${order.date}</div>
              <div><span class="label">Status:</span> ${order.status}</div>
            </div>

            <div class="section">
              <div style="font-weight: bold; margin-bottom: 8px;">CUSTOMER INFORMATION</div>
              <div><span class="label">Email:</span> ${order.email}</div>
              <div><span class="label">Phone:</span> ${order.phone}</div>
            </div>

            <div class="section">
              <div style="font-weight: bold; margin-bottom: 8px;">ITEMS PURCHASED</div>
              <table class="items-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th class="text-center">Qty</th>
                    <th class="text-right">Price</th>
                    <th class="text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${order.items
                    .map(
                      (item) => `
                    <tr>
                      <td>${item.name}</td>
                      <td class="text-center">${item.quantity}</td>
                      <td class="text-right">$${item.price.toFixed(2)}</td>
                      <td class="text-right">$${(
                        item.quantity * item.price
                      ).toFixed(2)}</td>
                    </tr>
                  `
                    )
                    .join("")}
                </tbody>
              </table>
            </div>

            <div class="total-section">
              <div class="total-row">
                <span>TOTAL:</span>
                <span>${order.totalSpent}</span>
              </div>
            </div>

            <div class="footer">
              <p>Thank you for your purchase!</p>
              <p>Please come again</p>
            </div>
          </div>
          <script>
            window.onload = function() {
              window.print();
            }
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(receiptHTML);
    printWindow.document.close();
  };

  return (
    <>
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
                    Customer ID
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
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-muted-foreground">
                      No orders found matching your search.
                    </td>
                  </tr>
                ) : (
                  filteredOrders.map((order) => (
                    <tr
                      key={order.orderID}
                      className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
                    >
                    <td className="py-4 px-4">
                      <div className="font-medium text-foreground">
                        {order.orderID}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="space-y-1">
                        <div className="font-medium text-foreground">
                          {order.customerID}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {order.email}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Select
                        value={order.status}
                        onValueChange={(value) =>
                          handleStatusChange(order.orderID, value as "Pending" | "Completed")
                        }
                      >
                        <SelectTrigger
                          className={`w-[130px] ${
                            order.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700 border-yellow-300 hover:bg-yellow-100"
                              : "bg-green-100 text-green-700 border-green-300 hover:bg-green-100"
                          }`}
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Pending">Pending</SelectItem>
                          <SelectItem value="Completed">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-medium text-foreground">
                        {order.totalSpent}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm text-muted-foreground">
                        {order.date}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="border border-gray-400 h-8 w-8"
                          onClick={() => handleViewOrder(order)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="border border-gray-400 h-8 w-8"
                          onClick={() => handlePrintReceipt(order)}
                        >
                          <Printer className="w-4 h-4" />
                        </Button>
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Order Details - {selectedOrder?.orderID}</DialogTitle>
            <DialogDescription>
              View complete order information and items purchased
            </DialogDescription>
          </DialogHeader>

          {selectedOrder && (
            <div className="space-y-6">
              {/* Customer Information */}
              <div className="space-y-3">
                <h3 className="font-semibold text-sm text-muted-foreground">
                  Customer Information
                </h3>
                <div className="grid grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Customer ID</p>
                    <p className="text-sm font-medium">
                      {selectedOrder.customerID}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-sm font-medium">{selectedOrder.email}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-sm font-medium">{selectedOrder.phone}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Order Date</p>
                    <p className="text-sm font-medium">{selectedOrder.date}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Status</p>
                    <Badge
                      variant={getStatusVariant(selectedOrder.status)}
                      className={
                        selectedOrder.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-100 w-fit"
                          : "bg-green-100 text-green-700 hover:bg-green-100 w-fit"
                      }
                    >
                      {selectedOrder.status}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Items Purchased */}
              <div className="space-y-3">
                <h3 className="font-semibold text-sm text-muted-foreground">
                  Items Purchased ({selectedOrder.items.length})
                </h3>
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                          Item
                        </th>
                        <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">
                          Quantity
                        </th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">
                          Price
                        </th>
                        <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">
                          Subtotal
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedOrder.items.map((item) => (
                        <tr
                          key={item.id}
                          className="border-t border-border hover:bg-muted/30"
                        >
                          <td className="py-3 px-4">
                            <p className="text-sm font-medium">{item.name}</p>
                          </td>
                          <td className="py-3 px-4 text-center">
                            <p className="text-sm">{item.quantity}</p>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <p className="text-sm">${item.price.toFixed(2)}</p>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <p className="text-sm font-medium">
                              ${(item.quantity * item.price).toFixed(2)}
                            </p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-muted/50 border-t-2 border-border">
                      <tr>
                        <td
                          colSpan={3}
                          className="py-3 px-4 text-right font-semibold"
                        >
                          Total:
                        </td>
                        <td className="py-3 px-4 text-right font-bold text-lg">
                          {selectedOrder.totalSpent}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
