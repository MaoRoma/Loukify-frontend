"use client";

import type {
  ThemeColors,
  ThemeTypography,
  ThemeLayout,
  ButtonStyle,
  Section,
} from "@/lib/types/Theme";
import { getButtonRadius } from "@/lib/utils/ThemeHelper";
import { useCart } from "@/lib/context/CartContext";

interface HomePageProps {
  colors: ThemeColors;
  typography: ThemeTypography;
  layout: ThemeLayout;
  buttonStyle: ButtonStyle;
  sections: Section[];
  viewMode: "desktop" | "tablet" | "mobile";
}

export function HomePage({
  colors,
  typography,
  layout,
  buttonStyle,
  sections,
  viewMode,
}: HomePageProps) {
  const { addToCart } = useCart();
  const gridCols = layout.productsPerRow;

  const renderSection = (section: Section) => {
    if (!section.enabled) return null;

    switch (section.type) {
      case "hero":
        return (
          <div key={section.id} className="px-6 py-16 text-center">
            <h1
              className="font-bold mb-4"
              style={{
                fontSize: `${typography.headingSize}px`,
                color: colors.text,
              }}
            >
              {section.content.heading || "Welcome to Our Store"}
            </h1>
            <p
              className="mb-6"
              style={{
                fontSize: `${typography.bodySize}px`,
                color: colors.secondary,
              }}
            >
              {section.content.subheading ||
                "Discover amazing products at great prices"}
            </p>
            <button
              className="px-8 py-3 font-medium transition-opacity hover:opacity-90"
              style={{
                backgroundColor: colors.primary,
                color: colors.background,
                borderRadius: getButtonRadius(buttonStyle),
                fontSize: `${typography.bodySize}px`,
              }}
            >
              {section.content.buttonText || "Shop Now"}
            </button>
          </div>
        );

      case "featured-products":
        return (
          <div key={section.id} className="px-6 py-12">
            <h2
              className="text-center font-bold mb-8"
              style={{
                fontSize: `${typography.headingSize * 0.7}px`,
                color: colors.text,
              }}
            >
              {section.content.heading || "Featured Collection"}
            </h2>
            {section.content.description && (
              <p
                className="text-center mb-8"
                style={{
                  fontSize: `${typography.bodySize}px`,
                  color: colors.secondary,
                }}
              >
                {section.content.description}
              </p>
            )}
            <div
              className={
                layout.cardStyle === "ordered" ? "space-y-4" : "grid gap-6"
              }
              style={
                layout.cardStyle === "minimal"
                  ? {
                      gridTemplateColumns: `repeat(${Math.min(
                        gridCols,
                        viewMode === "mobile"
                          ? 1
                          : viewMode === "tablet"
                          ? 2
                          : gridCols
                      )}, 1fr)`,
                      gap: `${layout.spacing}px`,
                    }
                  : {}
              }
            >
              {Array.from({ length: 8 }).map((_, i) =>
                layout.cardStyle === "minimal" ? (
                  // Minimal Card Style (existing grid layout)
                  <div
                    key={i}
                    className="border rounded-lg overflow-hidden"
                    style={{ borderColor: colors.secondary }}
                  >
                    <div className="aspect-square bg-gray-100 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                      </svg>
                    </div>
                    <div className="p-4">
                      <h3
                        className="font-semibold mb-1"
                        style={{
                          fontSize: `${typography.bodySize}px`,
                          color: colors.text,
                        }}
                      >
                        Product Name
                      </h3>
                      <p
                        className="mb-3"
                        style={{
                          fontSize: `${typography.bodySize}px`,
                          color: colors.text,
                        }}
                      >
                        $99.00
                      </p>
                      <button
                        onClick={() =>
                          addToCart({
                            id: i + 1,
                            name: "Product Name",
                            price: 99.0,
                          })
                        }
                        className="w-full py-2 font-medium transition-opacity hover:opacity-90"
                        style={{
                          backgroundColor: colors.primary,
                          color: colors.background,
                          borderRadius: getButtonRadius(buttonStyle),
                          fontSize: `${typography.bodySize}px`,
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ) : (
                  // Ordered/List Card Style
                  <div
                    key={i}
                    className="border rounded-lg p-4 flex gap-4 items-center"
                    style={{ borderColor: colors.secondary }}
                  >
                    <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-10 h-10 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3
                        className="font-semibold mb-1"
                        style={{
                          fontSize: `${typography.bodySize}px`,
                          color: colors.text,
                        }}
                      >
                        Product Name
                      </h3>
                      <p
                        className="text-sm mb-2"
                        style={{ color: colors.secondary }}
                      >
                        Category • Brand
                      </p>
                      <p
                        className="font-semibold"
                        style={{
                          fontSize: `${typography.bodySize}px`,
                          color: colors.text,
                        }}
                      >
                        $99.00
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        addToCart({
                          id: i + 1,
                          name: "Product Name",
                          price: 99.0,
                        })
                      }
                      className="px-6 py-2 font-medium transition-opacity hover:opacity-90 flex-shrink-0"
                      style={{
                        backgroundColor: colors.primary,
                        color: colors.background,
                        borderRadius: getButtonRadius(buttonStyle),
                        fontSize: `${typography.bodySize}px`,
                      }}
                    >
                      Quick Add
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        );

      case "promotional-banner":
        return (
          <div
            key={section.id}
            className="px-6 py-16 text-center"
            style={{
              backgroundColor: colors.primary,
              color: colors.background,
            }}
          >
            <h2
              className="font-bold mb-2"
              style={{ fontSize: `${typography.headingSize * 0.8}px` }}
            >
              {section.content.heading || "Summer Sale"}
            </h2>
            <p
              className="mb-6"
              style={{ fontSize: `${typography.bodySize}px`, opacity: 0.9 }}
            >
              {section.content.subheading || "Up to 50% off on selected items"}
            </p>
            <button
              className="px-8 py-3 font-medium transition-opacity hover:opacity-90"
              style={{
                backgroundColor: colors.background,
                color: colors.primary,
                borderRadius: getButtonRadius(buttonStyle),
                fontSize: `${typography.bodySize}px`,
              }}
            >
              {section.content.buttonText || "View Sale"}
            </button>
          </div>
        );

      case "newsletter":
        return (
          <div
            key={section.id}
            className="px-6 py-12 text-center border-b"
            style={{ borderColor: colors.secondary }}
          >
            <h2
              className="font-bold mb-2"
              style={{
                fontSize: `${typography.headingSize * 0.7}px`,
                color: colors.text,
              }}
            >
              {section.content.heading || "Stay Updated"}
            </h2>
            <p
              className="mb-6"
              style={{
                fontSize: `${typography.bodySize}px`,
                color: colors.secondary,
              }}
            >
              {section.content.description ||
                "Subscribe to our newsletter for exclusive offers and updates"}
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded"
                style={{
                  borderColor: colors.secondary,
                  fontSize: `${typography.bodySize}px`,
                  borderRadius: getButtonRadius(buttonStyle),
                }}
              />
              <button
                className="px-6 py-2 font-medium transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: colors.primary,
                  color: colors.background,
                  borderRadius: getButtonRadius(buttonStyle),
                  fontSize: `${typography.bodySize}px`,
                }}
              >
                {section.content.buttonText || "Subscribe"}
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return <>{sections.map((section) => renderSection(section))}</>;
}
