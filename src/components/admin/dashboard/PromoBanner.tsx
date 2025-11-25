"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-semibold">Welcome to Loukify</h1>
      <div className="bg-[#1C1917] text-primary-foreground px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 rounded-lg">
        <p className="text-xs sm:text-sm flex-1">
          {"Select a plan to get 3 months for $1/month"}
        </p>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Button
            variant="secondary"
            size="sm"
            className="bg-white text-primary hover:bg-white/90 flex-1 sm:flex-none text-xs sm:text-sm"
          >
            Select a plan
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/10 shrink-0"
            onClick={() => setIsVisible(false)}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </>
  );
}
