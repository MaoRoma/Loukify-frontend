"use client";

import { useState } from "react";
import { CartProvider } from "@/lib/context/CartContext";
import { PreviewHeader } from "./preview/PreviewHeader";
import { PreviewFooter } from "./preview/PreviewFooter";
import { HomePage } from "./preview/HomePageStore";
import { CartPage } from "./preview/CartPage";
import { CheckoutPage } from "./preview/CheckoutPageStore";
import { getViewportWidth } from "@/lib/utils/ThemeHelper";
import type {
  ThemeColors,
  ThemeTypography,
  ThemeLayout,
  ButtonStyle,
  HeaderConfig,
  Section,
  FooterConfig,
  PageView,
} from "@/lib/types/Theme";

interface ThemePreviewProps {
  colors: ThemeColors;
  typography: ThemeTypography;
  layout: ThemeLayout;
  buttonStyle: ButtonStyle;
  header: HeaderConfig;
  sections: Section[];
  footer: FooterConfig;
  viewMode: "desktop" | "tablet" | "mobile";
}

export function ThemePreview({
  colors,
  typography,
  layout,
  buttonStyle,
  header,
  sections,
  footer,
  viewMode,
}: ThemePreviewProps) {
  const [currentPage, setCurrentPage] = useState<PageView>("home");

  return (
    <CartProvider>
      <div
        className="bg-white shadow-2xl overflow-hidden transition-all duration-300 relative"
        style={{
          width: getViewportWidth(viewMode),
          maxWidth: "100%",
          backgroundColor: colors.background,
          color: colors.text,
        }}
      >
        <PreviewHeader
          colors={colors}
          typography={typography}
          header={header}
          onCartClick={() => setCurrentPage("cart")}
        />

        {currentPage === "home" && (
          <HomePage
            colors={colors}
            typography={typography}
            layout={layout}
            buttonStyle={buttonStyle}
            sections={sections}
            viewMode={viewMode}
          />
        )}

        {currentPage === "cart" && (
          <CartPage
            colors={colors}
            typography={typography}
            buttonStyle={buttonStyle}
            onContinueShopping={() => setCurrentPage("home")}
            onCheckout={() => setCurrentPage("checkout")}
          />
        )}

        {currentPage === "checkout" && (
          <CheckoutPage
            colors={colors}
            typography={typography}
            buttonStyle={buttonStyle}
            onBackToCart={() => setCurrentPage("cart")}
          />
        )}

        <PreviewFooter
          colors={colors}
          typography={typography}
          footer={footer}
          buttonStyle={buttonStyle}
          viewMode={viewMode}
        />
      </div>
    </CartProvider>
  );
}
