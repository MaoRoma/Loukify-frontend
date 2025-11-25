"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Facebook } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/auth/login";
  const isSignupPage = pathname === "/auth/signup";

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center px-4 sm:px-6 py-4 sm:py-6 md:py-8">
      <div className="w-full max-w-2xl mb-4 sm:mb-6 md:mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#4a4a4a] hover:text-[#2a2a2a] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">Back to home</span>
        </Link>
      </div>

      <div className="flex flex-col items-center mb-4 sm:mb-6 md:mb-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-2">
          <img
            src="/image/loukify.png"
            alt="Loukify Logo"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
          />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2a2a2a]">
          Loukify
        </h1>

        <p className="text-[#6a6a6a] text-xs sm:text-sm md:text-base text-center mt-1">
          Welcome back to your store builder
        </p>
      </div>

      {(isLoginPage || isSignupPage) && (
        <div className="flex gap-1 sm:gap-2 md:gap-4 mb-4 sm:mb-6 md:mb-8 bg-[#e8e8e8] p-1 sm:p-1.5 rounded-full w-full max-w-lg">
          <Link
            className={`w-full px-4 sm:px-6 md:px-8 lg:px-22 py-2 sm:py-3 md:py-4 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all text-center ${
              isLoginPage
                ? "bg-white text-[#2a2a2a] shadow-sm"
                : "bg-transparent text-[#6a6a6a] hover:text-[#2a2a2a]"
            }`}
            href="/auth/login"
          >
            Log in
          </Link>
          <Link
            className={`w-full px-4 sm:px-6 md:px-8 lg:px-22 py-2 sm:py-3 md:py-4 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all text-center ${
              isSignupPage
                ? "bg-white text-[#2a2a2a] shadow-sm"
                : "bg-transparent text-[#6a6a6a] hover:text-[#2a2a2a]"
            }`}
            href="/auth/signup"
          >
            Sign up
          </Link>
        </div>
      )}

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8">
        {children}
      </div>
    </div>
  );
}
