"use client";

import { Suspense } from "react";
import { ThemeCustomizer } from "@/components/admin/online-store/customize/theme/ThemeCustomize";
import { ThemeProvider } from "@/lib/context/ThemeContext";

export default function CustomizeThemePage() {
  return (
    <ThemeProvider>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            Loading theme customizer...
          </div>
        }
      >
        <ThemeCustomizer />
      </Suspense>
    </ThemeProvider>
  );
}
