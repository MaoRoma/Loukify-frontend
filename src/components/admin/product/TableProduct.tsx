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
  category: string;
  stock: string;
  orders: number;
  price: string;
  status: "Pending" | "Done";
}

const Products: Product[] = [
  {
    Product: "Product 1",
    category: "Category 1",
    stock: "32",
    orders: 5,
    price: "$217.50",
    status: "Pending",
  },
  {
    Product: "Product 2",
    category: "Category 2",
    stock: "32",
    orders: 2,
    price: "$85.00",
    status: "Pending",
  },
  {
    Product: "Product 3",
    category: "Category 3",
    stock: "32",
    orders: 8,
    price: "$425.00",
    status: "Done",
  },
  {
    Product: "Product 4",
    category: "Category 4",
    stock: "32",
    orders: 1,
    price: "$32.00",
    status: "Done",
  },
  {
    Product: "#ORD-005",
    category: "Category 1",
    stock: "32",
    orders: 5,
    price: "$217.50",
    status: "Pending",
  },
  {
    Product: "#ORD-006",
    category: "Category 2",
    stock: "32",
    orders: 2,
    price: "$85.00",
    status: "Done",
  },
  {
    Product: "#ORD-007",
    category: "Category 3",
    stock: "32",
    orders: 8,
    price: "$425.00",
    status: "Pending",
  },
  {
    Product: "#ORD-008",
    category: "Category 4",
    stock: "32",
    orders: 1,
    price: "$32.00",
    status: "Done",
  },
];

function getStatusVariant(status: Product["status"]) {
  switch (status) {
    case "Pending":
      return "default";

    case "Done":
      return "outline";
  }
}

export function ProductTable() {
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
                  Category
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Price
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
                        {product.category}
                      </div>
                    </div>
                  </td>

                  <td className="py-4 px-4">
                    <div className="font-medium text-foreground">
                      {product.price}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        {product.stock}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge
                      variant={getStatusVariant(product.status)}
                      className={
                        product.status === "Pending"
                          ? "bg-green-100 text-green-700 hover:bg-green-100"
                          : product.status === "Done"
                          ? "bg-foreground text-background hover:bg-foreground"
                          : "bg-blue-100 text-blue-700 hover:bg-blue-100"
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
                      <Button
                        variant="ghost"
                        size="icon"
                        className="border border-gray-400 h-8 w-8"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="border border-gray-400 text-red-500 h-8 w-8"
                      >
                        <Trash2 className="w-4 h-4" />
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
