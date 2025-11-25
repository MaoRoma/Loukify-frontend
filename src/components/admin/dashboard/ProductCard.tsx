import { Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ProductCard() {
  return (
    <Card className="rounded-2xl lg:rounded-3xl h-auto lg:h-[400px] w-full bg-ring border-2 border-[#C9C8C7]">
      <CardContent className="p-4 sm:p-6 flex flex-col items-center justify-center min-h-[300px] lg:min-h-[400px]">
        <div className="w-32 h-24 sm:w-40 sm:h-28 lg:w-40 lg:h-[100px] rounded-2xl lg:rounded-3xl bg-white flex items-center justify-center mb-4 sm:mb-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-[50px] lg:h-[50px] border border-[#C9C8C7] rounded-xl lg:rounded-2xl bg-muted flex items-center justify-center">
            <Package className="w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16 text-muted-foreground" />
          </div>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
          No products yet
        </p>
        <a href="/admin/product/add-product">
          <Button className="text-xs sm:text-sm lg:text-base px-4 sm:px-6">
            Add product
          </Button>
        </a>
      </CardContent>
    </Card>
  );
}
