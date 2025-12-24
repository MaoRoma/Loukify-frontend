import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShoppingBag,
  CreditCard,
  Truck,
  BarChart3,
  Shield,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: ShoppingBag,
    title: "Easy Store Setup",
    description:
      "Launch your online store in minutes with our intuitive drag-and-drop builder",
  },
  {
    icon: CreditCard,
    title: "Local Payment Support",
    description:
      "Accept payments through ABA Bank, Wing, Visa, PayPal, and other popular methods",
  },
  {
    icon: Truck,
    title: "Cambodia-Friendly Shipping",
    description:
      "Integrated shipping solutions that work seamlessly within Cambodia",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Track sales, customers, and performance with detailed insights and reports",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Bank-level security with 99.9% uptime to keep your store running smoothly",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized for speed to provide the best experience for your customers",
  },
];

const FeatureSection = () => {
  return (
    <section
      id="feature-section"
      className="py-12 sm:py-16 md:py-20 px-4 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-balance">
            Everything you need to sell online
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
            Powerful tools designed specifically for Cambodian businesses to
            succeed online
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-border/50 hover:border-primary/20 hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="pt-6 p-5 sm:p-6">
                <div className="mb-4">
                  <feature.icon className="w-9 h-9 sm:w-10 sm:h-10 text-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
