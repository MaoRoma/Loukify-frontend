import { ProductSearch } from "@/components/admin/product/SearchProduct";
import { ProductTable } from "@/components/admin/product/TableProduct";
import { ProductStats } from "@/components/admin/product/StateProduct";
import React from "react";

export default function ProductsPage() {
  return (
    <>
      <ProductStats />
      <ProductSearch />
      <ProductTable />
    </>
  );
}
