import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Section5 = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 bg-[#F1F0EF]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4">
          Ready to start your online business?
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 text-pretty px-4">
          Join thousands of Cambodian entrepreneurs who trust Loukify to power
          their online stores.
        </p>
        <Link
          href="/auth/signup"
          className="inline-block w-full sm:w-auto px-4"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-[#443F3B] text-white hover:bg-[#2B2524] hover:scale-105 transition-all duration-300 px-6 md:px-8 py-3 md:py-4 text-sm sm:text-base md:text-lg font-sans font-semibold"
          >
            Start Building Your Store
          </Button>
        </Link>
        <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4 px-4">
          Free 14-day trial • No setup fees • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default Section5;
