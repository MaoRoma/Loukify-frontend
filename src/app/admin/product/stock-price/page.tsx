import { StockPriceStats } from "@/components/admin/product/stock-price/StateStockPrice";
import { StockPricesTable } from "@/components/admin/product/stock-price/TableStockPrice";

export default function StockPricePage() {
  return (
    <>
      <StockPriceStats />
      <StockPricesTable />
    </>
  );
}
