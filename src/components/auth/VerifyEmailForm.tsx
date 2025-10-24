"use client";

import type React from "react";

import { useState, useRef, type KeyboardEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function VerifyEmailForm() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value[0];
    }

    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newCode = [...code];
    pastedData.split("").forEach((char, index) => {
      if (index < 6) {
        newCode[index] = char;
      }
    });
    setCode(newCode);

    const nextEmptyIndex = newCode.findIndex((val) => !val);
    const focusIndex = nextEmptyIndex === -1 ? 5 : nextEmptyIndex;
    inputRefs.current[focusIndex]?.focus();
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#2a2a2a] mb-2">
        Verify your email
      </h2>
      <p className="text-[#6a6a6a] text-sm mb-6">
        We've sent a 6-digit verification code to your email address. Please
        enter it below.
      </p>

      <form className="space-y-6">
        <div>
          <label className="text-[#2a2a2a] font-semibold mb-3 block text-sm">
            Verification Code
          </label>
          <div className="flex gap-2 justify-between">
            {code.map((digit, index) => (
              <Input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="h-14 w-14 text-center text-xl font-semibold border-[#e0e0e0] bg-[#fafafa] focus:bg-white"
              />
            ))}
          </div>
        </div>

        <Button
          type="submit"
          className="w-full h-12 bg-[#3a3a3a] hover:bg-[#2a2a2a] text-white font-medium text-base"
        >
          Verify Email
        </Button>

        <div className="text-center">
          <p className="text-sm text-[#6a6a6a]">
            Didn't receive the code?{" "}
            <button
              type="button"
              className="text-[#2a2a2a] font-medium hover:underline"
            >
              Resend code
            </button>
          </p>
        </div>

        <div className="text-center pt-2">
          <Link
            href="/login"
            className="text-sm text-[#6a6a6a] hover:text-[#2a2a2a] transition-colors"
          >
            Back to login
          </Link>
        </div>
      </form>
    </div>
  );
}
