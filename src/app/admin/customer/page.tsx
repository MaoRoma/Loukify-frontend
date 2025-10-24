import { CustomerStats } from "@/components/admin/customer/StateCustomer";
import { CustomerSearch } from "@/components/admin/customer/SearchCustomer";
import { CustomerTable } from "@/components/admin/customer/TableCustomer";

export default function CustomersPage() {
  return (
    <>
      <CustomerStats />
      <CustomerSearch />
      <CustomerTable />
    </>
  );
}
