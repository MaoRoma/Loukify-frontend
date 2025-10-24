import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#F1F0EF] from-green-600/10 to-lime-500/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-2xl animate-fade-in-up">
          <div className="mb-8 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-black mb-6 md:mb-8 font-inter leading-tight">
              Build your online store in{" "}
              <span className="text-stone-600">Cambodia </span>
              <span className="text-black">easily.</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-600 mb-8 md:mb-12 max-w-4xl mx-auto font-sans leading-relaxed px-4">
              Create a beautiful online store in minutes with local payment
              support, Cambodia friendly shipping, and everything you need to
              sell online successfully.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center animate-fade-in-up animate-delay-200 px-4">
            <Link href="/auth/signup">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#443F3B] text-white hover:bg-[#2B2524] hover:scale-105 transition-all duration-300 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-sans font-semibold"
              >
                Start Build Your Store
              </Button>
            </Link>
            <Link href="/LearnMore">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-stone-600 text-stone-600 hover:bg-[#D4D4D4] hover:text-stone-600 hover:scale-105 transition-all duration-300 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-sans font-semibold bg-transparent"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
