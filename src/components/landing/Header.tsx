import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="h-14 px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <img
            src="/image/loukify.png"
            alt="Loukify Logo"
            className="inline-block w-8 h-8 mr-2"
          />
          <span className="text-black font-inter">Loukify</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/nav/feature"
            className="text-stone-600 font-inter font-medium px-3 py-1 border border-white rounded-lg hover:bg-stone-200 transition-colors"
          >
            Feature
          </Link>
          <Link
            href="/nav/pricing"
            className="text-stone-600 font-inter font-medium px-3 py-1 border border-white rounded-lg hover:bg-stone-200 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/nav/support"
            className="text-stone-600 font-inter font-medium px-3 py-1 border border-white rounded-lg hover:bg-stone-200 transition-colors"
          >
            Support
          </Link>
          <Link
            href="/auth/login"
            className="bg-white text-stone-600 font-inter font-medium px-6 py-2 rounded-lg border border-stone-600 hover:bg-[#D4D4D4] hover:text-stone-600 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="bg-[#443F3B] text-white font-inter font-bold px-6 py-2 rounded-lg border border-[#443F3B] hover:bg-[#2B2524] hover:text-white transition-colors"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
