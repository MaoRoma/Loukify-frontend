import { Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

export function Header() {
  return (
    <header className="h-14 border-b border-border bg-linear-to-r from-[#292524] to-[#44403B] flex items-center justify-between px-6 fixed top-0 left-0 right-0 z-50">
      <Link href="/" className="text-2xl font-bold">
        <img
          src="/image/loukify.png"
          alt="Loukify Logo"
          className="inline-block w-8 h-8 mr-2"
        />
        <span className="text-card font-inter">Loukify</span>
      </Link>
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products, orders, customers..."
            className="pl-9 bg-muted border-0"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="text-card relative">
          <Bell className="w-5 h-5" />
        </Button>
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-card text-primary text-sm">
              A
            </AvatarFallback>
          </Avatar>
          <span className="text-card font-medium">Admin</span>
        </div>
      </div>
    </header>
  );
}
