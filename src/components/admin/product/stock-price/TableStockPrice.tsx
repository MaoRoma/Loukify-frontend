import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Copy,
  Delete,
  Edit,
  Eye,
  Mail,
  Phone,
  Printer,
  RefreshCcw,
  Trash2,
} from "lucide-react";

interface Product {
  Product: string;
  sku: string;
  profit: string;
  orders: number;
  price: string;
  cost: string;
  stock: number;
  status: "In Stock" | "Low Stock" | "Out Stock";
}

const Products: Product[] = [
  {
    Product: "Product 1",
    sku: "SKU 1",
    profit: "$15.00",
    orders: 5,
    price: "$217.50",
    status: "In Stock",
    cost: "$150.00",
    stock: 32,
  },
  {
    Product: "Product 2",
    sku: "SKU 2",
    profit: "$15.00",
    orders: 2,
    price: "$85.00",
    status: "Low Stock",
    cost: "$60.00",
    stock: 32,
  },
  {
    Product: "Product 3",
    sku: "SKU 3",
    profit: "$15.00",
    orders: 8,
    price: "$425.00",
    status: "In Stock",
    cost: "$300.00",
    stock: 32,
  },
  {
    Product: "Product 4",
    sku: "SKU 4",
    profit: "$15.00",
    orders: 1,
    price: "$$15.00.00",
    status: "In Stock",
    cost: "$25.00",
    stock: 32,
  },
  {
    Product: "#ORD-005",
    sku: "SKU 1",
    profit: "$15.00",
    orders: 5,
    price: "$217.50",
    status: "Low Stock",
    cost: "$150.00",
    stock: 32,
  },
  {
    Product: "#ORD-006",
    sku: "SKU 2",
    profit: "$15.00",
    orders: 2,
    price: "$85.00",
    status: "In Stock",
    cost: "$60.00",
    stock: 32,
  },
  {
    Product: "#ORD-007",
    sku: "SKU 3",
    profit: "$15.00",
    orders: 8,
    price: "$425.00",
    status: "Low Stock",
    cost: "$300.00",
    stock: 32,
  },
  {
    Product: "#ORD-008",
    sku: "SKU 4",
    profit: "$15.00",
    orders: 1,
    price: "$32.00",
    status: "Out Stock",
    cost: "$25.00",
    stock: 32,
  },
];

function getStatusVariant(status: Product["status"]) {
  switch (status) {
    case "In Stock":
      return "secondary";
    case "Low Stock":
      return "default";

    case "Out Stock":
      return "outline";
  }
}

export function StockPricesTable() {
  return (
    <Card className="overflow-hidden flex">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">All Products</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Product
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  SKU
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Price
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Cost
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Product
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Stock
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
              {Products.map((product) => (
                <tr
                  key={product.Product}
                  className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-medium text-foreground">
                          {product.Product}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        {product.sku}
                      </div>
                    </div>
                  </td>

                  <td className="py-4 px-4">
                    <div className="font-medium text-foreground">
                      {product.price}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="font-medium text-foreground">
                      {product.cost}
                    </div>
                  </td>

                  <td className="py-4 px-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        {product.profit}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="font-medium text-foreground">
                      {product.stock}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge
                      variant={getStatusVariant(product.status)}
                      className={
                        product.status === "In Stock"
                          ? "bg-green-100 text-green-700 hover:bg-green-100"
                          : product.status === "Low Stock"
                          ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                          : "bg-red-100 text-red-700 hover:bg-red-100"
                      }
                    >
                      {product.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="border border-gray-400 h-8 w-8"
                      >
                        <Edit className="w-4 h-4" />
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
