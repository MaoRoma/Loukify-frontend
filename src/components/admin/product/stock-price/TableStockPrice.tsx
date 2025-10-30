"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Product {
  Product: string;
  sku: string;
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
    orders: 5,
    price: "$217.50",
    status: "In Stock",
    cost: "$150.00",
    stock: 32,
  },
  {
    Product: "Product 2",
    sku: "SKU 2",
    orders: 2,
    price: "$85.00",
    status: "Low Stock",
    cost: "$60.00",
    stock: 32,
  },
  {
    Product: "Product 3",
    sku: "SKU 3",
    orders: 8,
    price: "$425.00",
    status: "In Stock",
    cost: "$300.00",
    stock: 32,
  },
  {
    Product: "Product 4",
    sku: "SKU 4",
    orders: 1,
    price: "$40.00",
    status: "In Stock",
    cost: "$25.00",
    stock: 32,
  },
  {
    Product: "#ORD-005",
    sku: "SKU 1",
    orders: 5,
    price: "$217.50",
    status: "Low Stock",
    cost: "$150.00",
    stock: 32,
  },
  {
    Product: "#ORD-006",
    sku: "SKU 2",
    orders: 2,
    price: "$85.00",
    status: "In Stock",
    cost: "$60.00",
    stock: 32,
  },
  {
    Product: "#ORD-007",
    sku: "SKU 3",
    orders: 8,
    price: "$425.00",
    status: "Low Stock",
    cost: "$300.00",
    stock: 32,
  },
  {
    Product: "#ORD-008",
    sku: "SKU 4",
    orders: 1,
    price: "$32.00",
    status: "Out Stock",
    cost: "$25.00",
    stock: 32,
  },
];

function calculateProfit(price: string, cost: string): string {
  // Remove $ and parse to numbers
  const priceNum = Number.parseFloat(price.replace("$", ""));
  const costNum = Number.parseFloat(cost.replace("$", ""));

  // Calculate profit
  const profit = priceNum - costNum;

  // Format back to currency
  return `$${profit.toFixed(2)}`;
}

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
  const [products, setProducts] = useState<Product[]>(Products);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleEdit = (product: Product) => {
    setEditingProduct({ ...product });
    setIsEditDialogOpen(true);
  };

  const handleSaveEdit = () => {
    if (editingProduct) {
      setProducts(
        products.map((p) =>
          p.Product === editingProduct.Product ? editingProduct : p
        )
      );
      setIsEditDialogOpen(false);
      setEditingProduct(null);
    }
  };

  return (
    <>
      <Card className="overflow-hidden flex">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Stock & Prices</h2>

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
                    Profit
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
                {products.map((product) => (
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
                          {calculateProfit(product.price, product.cost)}
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
                          onClick={() => handleEdit(product)}
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

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Stock & Price</DialogTitle>
            <DialogDescription>
              Make changes to the product stock and pricing details below.
            </DialogDescription>
          </DialogHeader>
          {editingProduct && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="product">Product Name</Label>
                <Input
                  id="product"
                  value={editingProduct.Product}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      Product: e.target.value,
                    })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="sku">SKU</Label>
                <Input
                  id="sku"
                  value={editingProduct.sku}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      sku: e.target.value,
                    })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  value={editingProduct.price}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      price: e.target.value,
                    })
                  }
                  placeholder="$0.00"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cost">Cost</Label>
                <Input
                  id="cost"
                  value={editingProduct.cost}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      cost: e.target.value,
                    })
                  }
                  placeholder="$0.00"
                />
              </div>
              <div className="grid gap-2">
                <Label>Profit (Calculated)</Label>
                <div className="text-sm font-medium text-green-600 py-2">
                  {calculateProfit(editingProduct.price, editingProduct.cost)}
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="stock">Stock</Label>
                <Input
                  id="stock"
                  type="number"
                  value={editingProduct.stock}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      stock: Number.parseInt(e.target.value) || 0,
                    })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="status">Status</Label>
                <Select
                  value={editingProduct.status}
                  onValueChange={(value: Product["status"]) =>
                    setEditingProduct({ ...editingProduct, status: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="In Stock">In Stock</SelectItem>
                    <SelectItem value="Low Stock">Low Stock</SelectItem>
                    <SelectItem value="Out Stock">Out Stock</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="orders">Orders</Label>
                <Input
                  id="orders"
                  type="number"
                  value={editingProduct.orders}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      orders: Number.parseInt(e.target.value) || 0,
                    })
                  }
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsEditDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleSaveEdit}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
