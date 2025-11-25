"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export function SignupForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Add your signup logic here
    try {
      // Example: await signup(fullName, email, password);

      // Redirect to admin dashboard after successful signup
      router.push("/admin/dashboard");
    } catch (error) {
      console.error("Signup failed:", error);
      // Handle signup error (show toast, error message, etc.)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-semibold text-[#2a2a2a] mb-2">
        Create your account
      </h2>
      <p className="text-[#6a6a6a] text-xs sm:text-sm mb-4 sm:mb-6">
        Start building your online store today
      </p>

      <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
        <div>
          <Label
            htmlFor="fullname"
            className="text-[#2a2a2a] font-semibold mb-2 block text-sm sm:text-base"
          >
            Full Name
          </Label>
          <Input
            id="fullname"
            type="text"
            placeholder="Enter your full name"
            className="h-10 sm:h-12 border-[#e0e0e0] bg-[#fafafa] placeholder:text-[#9a9a9a] text-sm sm:text-base"
            required
          />
        </div>

        <div>
          <Label
            htmlFor="signup-email"
            className="text-[#2a2a2a] font-semibold mb-2 block text-sm sm:text-base"
          >
            Email
          </Label>
          <Input
            id="signup-email"
            type="email"
            placeholder="Enter your email"
            className="h-10 sm:h-12 border-[#e0e0e0] bg-[#fafafa] placeholder:text-[#9a9a9a] text-sm sm:text-base"
            required
          />
        </div>

        <div>
          <Label
            htmlFor="signup-password"
            className="text-[#2a2a2a] font-semibold mb-2 block text-sm sm:text-base"
          >
            Password
          </Label>
          <Input
            id="signup-password"
            type="password"
            placeholder="Create a Password"
            className="h-10 sm:h-12 border-[#e0e0e0] bg-[#fafafa] placeholder:text-[#9a9a9a] text-sm sm:text-base"
            required
          />
        </div>

        <div>
          <Label
            htmlFor="confirm-password"
            className="text-[#2a2a2a] font-semibold mb-2 block text-sm sm:text-base"
          >
            Confirm Password
          </Label>
          <Input
            id="confirm-password"
            type="password"
            placeholder="Confirm your password"
            className="h-10 sm:h-12 border-[#e0e0e0] bg-[#fafafa] placeholder:text-[#9a9a9a] text-sm sm:text-base"
            required
          />
        </div>

        <div className="flex items-start gap-2 pt-2">
          <Checkbox id="terms" className="mt-0.5" required />
          <label
            htmlFor="terms"
            className="text-xs sm:text-sm text-[#4a4a4a] leading-tight cursor-pointer"
          >
            I agree to the Terms of Service and Privacy Policy
          </label>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-10 sm:h-12 bg-[#3a3a3a] hover:bg-[#2a2a2a] text-white font-medium text-sm sm:text-base disabled:opacity-50"
        >
          {isLoading ? "Creating account..." : "Sign up"}
        </Button>
      </form>
    </div>
  );
}
