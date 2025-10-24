import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

export function ProductSearch() {
  return (
    <div className="flex gap-3">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search products by ID, name, or status..."
          className="pl-10 bg-card"
        />
      </div>
      <Button variant="outline" className="gap-2 bg-transparent">
        <Filter className="w-4 h-4" />
        Filter
      </Button>
    </div>
  );
}
