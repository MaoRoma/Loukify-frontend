import { OrderStats } from "@/components/admin/order/StateOrder";
import { OrderSearch } from "@/components/admin/order/SearchOrder";
import { OrderTable } from "@/components/admin/order/TableOrder";
export default function CustomersPage() {
  return (
    <>
      <OrderStats />
      <OrderSearch />
      <OrderTable />
    </>
  );
}
