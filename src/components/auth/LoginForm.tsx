"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FaGoogle } from "react-icons/fa";

export function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Add your authentication logic here
    try {
      // Example: await login(email, password);

      // Redirect to admin dashboard after successful login
      router.push("/admin/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login error (show toast, error message, etc.)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2a2a] mb-2">
        Log in to your account
      </h2>
      <p className="text-[#6a6a6a] text-xs sm:text-sm mb-4 sm:mb-6">
        Enter your email and password to access your dashboard
      </p>
      <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
        <div>
          <Label
            htmlFor="login-email"
            className="text-[#2a2a2a] font-semibold mb-2 block text-sm sm:text-base"
          >
            Email
          </Label>
          <Input
            id="login-email"
            type="email"
            placeholder="Enter your email"
            className="h-10 sm:h-12 border-[#e0e0e0] bg-[#fafafa] placeholder:text-[#9a9a9a] text-sm sm:text-base"
            required
          />
        </div>

        <div>
          <Label
            htmlFor="login-password"
            className="text-[#2a2a2a] font-semibold mb-2 block text-sm sm:text-base"
          >
            Password
          </Label>
          <Input
            id="login-password"
            type="password"
            placeholder="Enter your password"
            className="h-10 sm:h-12 border-[#e0e0e0] bg-[#fafafa] placeholder:text-[#9a9a9a] text-sm sm:text-base"
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-2 gap-2 sm:gap-0">
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <label
              htmlFor="remember"
              className="text-xs sm:text-sm text-[#4a4a4a] cursor-pointer"
            >
              Remember me
            </label>
          </div>
          <Link
            href="/auth/forgotpassword"
            className="text-xs sm:text-sm text-[#6a6a6a] hover:text-[#2a2a2a] transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-10 sm:h-12 bg-[#3a3a3a] hover:bg-[#2a2a2a] text-white font-medium text-sm sm:text-base disabled:opacity-50"
        >
          {isLoading ? "Logging in..." : "Log in"}
        </Button>
      </form>
      <br />
      <br />
      <div className="w-full max-w-lg">
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="flex-1 h-px bg-[#e0e0e0]" />
          <span className="text-[#6a6a6a] text-xs sm:text-sm whitespace-nowrap">
            Or continue with
          </span>
          <div className="flex-1 h-px bg-[#e0e0e0]" />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
          <Button
            variant="outline"
            className="w-full sm:flex-1 h-10 sm:h-11 md:h-12 border-[#e0e0e0] hover:bg-[#f5f5f5] bg-transparent text-sm sm:text-base"
          >
            <FaGoogle />
            <span className="ml-2">Google</span>
          </Button>
        </div>

        <p className="text-center text-xs sm:text-sm text-[#9a9a9a] px-4">
          Protected by industry-standard security measures
        </p>
      </div>
    </div>
  );
}
