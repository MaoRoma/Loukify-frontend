"use client";

import { Header } from "@/components/admin/dashboard/Header";
import { Sidebar } from "@/components/admin/dashboard/SideBar";
import { useState } from "react";

export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <main className="flex-1 lg:ml-60 mt-14 overflow-y-auto min-h-screen">
          <div className="max-w-8xl mx-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
            {children}
          </div>
        </main>
      </div>
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
}
