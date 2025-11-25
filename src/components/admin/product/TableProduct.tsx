"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Product {
  Product: string;
  category: string;
  stock: string;
  orders: number;
  price: string;
}

const Products: Product[] = [
  {
    Product: "Product 1",
    category: "Category 1",
    stock: "32",
    orders: 5,
    price: "$217.50",
  },
  {
    Product: "Product 2",
    category: "Category 2",
    stock: "32",
    orders: 2,
    price: "$85.00",
  },
  {
    Product: "Product 3",
    category: "Category 3",
    stock: "32",
    orders: 8,
    price: "$425.00",
  },
  {
    Product: "Product 4",
    category: "Category 4",
    stock: "32",
    orders: 1,
    price: "$32.00",
  },
  {
    Product: "#ORD-005",
    category: "Category 1",
    stock: "32",
    orders: 5,
    price: "$217.50",
  },
  {
    Product: "#ORD-006",
    category: "Category 2",
    stock: "32",
    orders: 2,
    price: "$85.00",
  },
  {
    Product: "#ORD-007",
    category: "Category 3",
    stock: "32",
    orders: 8,
    price: "$425.00",
  },
  {
    Product: "#ORD-008",
    category: "Category 4",
    stock: "32",
    orders: 1,
    price: "$32.00",
  },
];

interface ProductTableProps {
  searchQuery?: string;
}

export function ProductTable({ searchQuery = "" }: ProductTableProps) {
  const [products, setProducts] = useState<Product[]>(Products);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [deletingProduct, setDeletingProduct] = useState<Product | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  // Filter products based on search query
  const filteredProducts = products.filter((product) => {
    const query = searchQuery.toLowerCase();
    return (
      product.Product.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.price.toLowerCase().includes(query) ||
      product.stock.toLowerCase().includes(query)
    );
  });

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

  const handleDeleteClick = (product: Product) => {
    setDeletingProduct(product);
    setIsDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (deletingProduct) {
      setProducts(
        products.filter((p) => p.Product !== deletingProduct.Product)
      );
      setIsDeleteDialogOpen(false);
      setDeletingProduct(null);
    }
  };

  // Removed handleCopy function since we're removing the copy button

  return (
    <>
      <Card className="overflow-hidden flex flex-col">
        <div className="p-4 sm:p-6">
          <h2 className="text-base sm:text-lg font-semibold mb-4">
            All Products
          </h2>

          {/* Mobile Card View */}
          <div className="block md:hidden space-y-3">
            {filteredProducts.length === 0 ? (
              <div className="py-8 text-center text-sm text-muted-foreground">
                No products found matching your search.
              </div>
            ) : (
              filteredProducts.map((product) => (
                <Card key={product.Product} className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="font-medium text-sm text-foreground mb-1">
                        {product.Product}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {product.category}
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-foreground">
                      {product.price}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-3 text-xs">
                    <span className="text-muted-foreground">
                      Stock: {product.stock}
                    </span>
                    <span className="text-muted-foreground">
                      Orders: {product.orders}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(product)}
                      className="flex-1 text-xs"
                    >
                      <Edit className="w-3 h-3 mr-1" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteClick(product)}
                      className="flex-1 text-xs text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-3 h-3 mr-1" />
                      Delete
                    </Button>
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
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="py-8 text-center text-muted-foreground"
                    >
                      No products found matching your search.
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((product) => (
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
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="border border-gray-400 h-8 w-8"
                            onClick={() => handleEdit(product)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="border border-gray-400 text-red-500 h-8 w-8"
                            onClick={() => handleDeleteClick(product)}
                          >
                            <Trash2 className="w-4 h-4" />
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

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
            <DialogDescription>
              Make changes to the product details below.
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
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  value={editingProduct.category}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      category: e.target.value,
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
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="stock">Stock</Label>
                <Input
                  id="stock"
                  value={editingProduct.stock}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      stock: e.target.value,
                    })
                  }
                />
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

      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete {deletingProduct?.Product}. This
              action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmDelete}
              className="bg-red-500 hover:bg-red-600"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
