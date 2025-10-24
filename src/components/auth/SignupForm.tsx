"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export function SignupForm() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#2a2a2a] mb-2">
        Create your account
      </h2>
      <p className="text-[#6a6a6a] text-sm mb-6">
        Start building your online store today
      </p>

      <form className="space-y-5">
        <div>
          <Label
            htmlFor="fullname"
            className="text-[#2a2a2a] font-semibold mb-2 block"
          >
            Full Name
          </Label>
          <Input
            id="fullname"
            type="text"
            placeholder="Enter your full name"
            className="h-12 border-[#e0e0e0] bg-[#fafafa] placeholder:text-[#9a9a9a]"
          />
        </div>

        <div>
          <Label
            htmlFor="signup-email"
            className="text-[#2a2a2a] font-semibold mb-2 block"
          >
            Email
          </Label>
          <Input
            id="signup-email"
            type="email"
            placeholder="Enter your email"
            className="h-12 border-[#e0e0e0] bg-[#fafafa] placeholder:text-[#9a9a9a]"
          />
        </div>

        <div>
          <Label
            htmlFor="signup-password"
            className="text-[#2a2a2a] font-semibold mb-2 block"
          >
            Password
          </Label>
          <Input
            id="signup-password"
            type="password"
            placeholder="Create a Password"
            className="h-12 border-[#e0e0e0] bg-[#fafafa] placeholder:text-[#9a9a9a]"
          />
        </div>

        <div>
          <Label
            htmlFor="confirm-password"
            className="text-[#2a2a2a] font-semibold mb-2 block"
          >
            Confirm Password
          </Label>
          <Input
            id="confirm-password"
            type="password"
            placeholder="Confirm your password"
            className="h-12 border-[#e0e0e0] bg-[#fafafa] placeholder:text-[#9a9a9a]"
          />
        </div>

        <div className="flex items-start gap-2 pt-2">
          <Checkbox id="terms" className="mt-0.5" />
          <label
            htmlFor="terms"
            className="text-sm text-[#4a4a4a] leading-tight cursor-pointer"
          >
            I agree to the Terms of Service and Privacy Policy
          </label>
        </div>

        <Button
          type="submit"
          className="w-full h-12 bg-[#3a3a3a] hover:bg-[#2a2a2a] text-white font-medium text-base"
        >
          Sign up
        </Button>
      </form>
    </div>
  );
}
