"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false); // Close menu on mobile after clicking
  };

  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="h-16 md:h-14 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/image/loukify.png"
            alt="Loukify Logo"
            className="w-7 h-7 sm:w-8 sm:h-8"
          />
          <span className="text-black font-inter text-xl sm:text-2xl font-bold">
            Loukify
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
          <a
            href="#feature-section"
            onClick={(e) => handleSmoothScroll(e, "feature-section")}
            className="text-stone-600 font-inter font-medium px-3 py-1 border border-white rounded-lg hover:bg-stone-200 transition-colors cursor-pointer"
          >
            Feature
          </a>
          <a
            href="#customer-section"
            onClick={(e) => handleSmoothScroll(e, "customer-section")}
            className="text-stone-600 font-inter font-medium px-3 py-1 border border-white rounded-lg hover:bg-stone-200 transition-colors cursor-pointer"
          >
            Customer
          </a>
          <a
            href="#trusted-section"
            onClick={(e) => handleSmoothScroll(e, "trusted-section")}
            className="text-stone-600 font-inter font-medium px-3 py-1 border border-white rounded-lg hover:bg-stone-200 transition-colors cursor-pointer"
          >
            Trusted
          </a>
          <Link
            href="/auth/login"
            className="bg-white text-stone-600 font-inter font-medium px-4 xl:px-6 py-2 rounded-lg border border-stone-600 hover:bg-[#D4D4D4] hover:text-stone-600 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="bg-[#443F3B] text-white font-inter font-bold px-4 xl:px-6 py-2 rounded-lg border border-[#443F3B] hover:bg-[#2B2524] hover:text-white transition-colors"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-stone-600 hover:bg-stone-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            <a
              href="#feature-section"
              onClick={(e) => handleSmoothScroll(e, "feature-section")}
              className="text-stone-600 font-inter font-medium px-4 py-2.5 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
            >
              Feature
            </a>
            <a
              href="#customer-section"
              onClick={(e) => handleSmoothScroll(e, "customer-section")}
              className="text-stone-600 font-inter font-medium px-4 py-2.5 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
            >
              Customer
            </a>
            <a
              href="#trusted-section"
              onClick={(e) => handleSmoothScroll(e, "trusted-section")}
              className="text-stone-600 font-inter font-medium px-4 py-2.5 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
            >
              Trusted
            </a>
            <Link
              href="/auth/login"
              className="bg-white text-stone-600 font-inter font-medium px-4 py-2.5 rounded-lg border border-stone-600 hover:bg-[#D4D4D4] transition-colors text-center"
            >
              Login
            </Link>
            <Link
              href="/auth/signup"
              className="bg-[#443F3B] text-white font-inter font-bold px-4 py-2.5 rounded-lg border border-[#443F3B] hover:bg-[#2B2524] transition-colors text-center"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
