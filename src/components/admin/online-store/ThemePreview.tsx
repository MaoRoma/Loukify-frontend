"use client";

import {
  Search,
  ShoppingCart,
  User,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";

interface Section {
  id: string;
  type: string;
  name: string;
  subtitle: string;
  enabled: boolean;
  expanded: boolean;
  content: {
    heading?: string;
    subheading?: string;
    description?: string;
    buttonText?: string;
  };
}

interface ThemePreviewProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  typography: {
    headingSize: number;
    bodySize: number;
  };
  layout: {
    productsPerRow: number;
    spacing: number;
  };
  buttonStyle: "square" | "rounded" | "pill";
  header: {
    logoText: string;
    layout: string;
    showAnnouncement: boolean;
    announcementText: string;
    navigationItems: string[];
    showSearchBar: boolean;
    showWishlistIcon: boolean;
  };
  sections: Section[];
  viewMode: "desktop" | "tablet" | "mobile";
}

export function ThemePreview({
  colors,
  typography,
  layout,
  buttonStyle,
  header,
  sections,
  viewMode,
}: ThemePreviewProps) {
  const getButtonRadius = () => {
    switch (buttonStyle) {
      case "square":
        return "0px";
      case "rounded":
        return "6px";
      case "pill":
        return "9999px";
    }
  };

  const getViewportWidth = () => {
    switch (viewMode) {
      case "desktop":
        return "100%";
      case "tablet":
        return "768px";
      case "mobile":
        return "375px";
    }
  };

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
                borderRadius: getButtonRadius(),
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
              className="grid gap-6"
              style={{
                gridTemplateColumns: `repeat(${Math.min(
                  gridCols,
                  viewMode === "mobile"
                    ? 1
                    : viewMode === "tablet"
                    ? 2
                    : gridCols
                )}, 1fr)`,
                gap: `${layout.spacing}px`,
              }}
            >
              {Array.from({ length: 8 }).map((_, i) => (
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
                      className="w-full py-2 font-medium transition-opacity hover:opacity-90"
                      style={{
                        backgroundColor: colors.primary,
                        color: colors.background,
                        borderRadius: getButtonRadius(),
                        fontSize: `${typography.bodySize}px`,
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
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
                borderRadius: getButtonRadius(),
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
                  borderRadius: getButtonRadius(),
                }}
              />
              <button
                className="px-6 py-2 font-medium transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: colors.primary,
                  color: colors.background,
                  borderRadius: getButtonRadius(),
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

  return (
    <div
      className="bg-white shadow-2xl overflow-hidden transition-all duration-300"
      style={{
        width: getViewportWidth(),
        maxWidth: "100%",
        backgroundColor: colors.background,
        color: colors.text,
      }}
    >
      {/* Announcement Bar */}
      {header.showAnnouncement && (
        <div
          className="px-6 py-2 text-center text-sm"
          style={{
            backgroundColor: colors.primary,
            color: colors.background,
          }}
        >
          {header.announcementText}
        </div>
      )}

      {/* Navigation */}
      <div className="border-b px-6 py-4 flex items-center justify-between">
        <div className="font-bold text-xl" style={{ color: colors.text }}>
          {header.logoText}
        </div>
        <div className="flex items-center gap-6">
          <nav
            className="hidden md:flex items-center gap-6 text-sm"
            style={{ fontSize: `${typography.bodySize}px` }}
          >
            {header.navigationItems.map((item, index) => (
              <a key={index} href="#" style={{ color: colors.text }}>
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {header.showSearchBar && (
              <Search className="w-5 h-5" style={{ color: colors.text }} />
            )}
            {header.showWishlistIcon && (
              <Heart className="w-5 h-5" style={{ color: colors.text }} />
            )}
            <User className="w-5 h-5" style={{ color: colors.text }} />
            <ShoppingCart className="w-5 h-5" style={{ color: colors.text }} />
          </div>
        </div>
      </div>

      {sections.map((section) => renderSection(section))}

      {/* Footer */}
      <footer
        className="px-6 py-12"
        style={{ backgroundColor: colors.background }}
      >
        {/* Newsletter Section */}
        <div
          className="text-center mb-12 pb-12 border-b"
          style={{ borderColor: colors.secondary }}
        >
          <h3
            className="font-bold mb-2"
            style={{
              fontSize: `${typography.headingSize * 0.6}px`,
              color: colors.text,
            }}
          >
            Subscribe to our newsletter
          </h3>
          <p className="mb-4 text-sm" style={{ color: colors.secondary }}>
            Get the latest updates and exclusive offers
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border rounded text-sm"
              style={{
                borderColor: colors.secondary,
                borderRadius: getButtonRadius(),
              }}
            />
            <button
              className="px-6 py-2 font-medium text-sm transition-opacity hover:opacity-90"
              style={{
                backgroundColor: colors.primary,
                color: colors.background,
                borderRadius: getButtonRadius(),
              }}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Shop Column */}
          <div>
            <h4
              className="font-semibold mb-4"
              style={{
                fontSize: `${typography.bodySize}px`,
                color: colors.text,
              }}
            >
              Shop
            </h4>
            <ul
              className="space-y-2 text-sm"
              style={{ color: colors.secondary }}
            >
              <li>New Arrivals</li>
              <li>Best Sellers</li>
              <li>Sale</li>
              <li>Collections</li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h4
              className="font-semibold mb-4"
              style={{
                fontSize: `${typography.bodySize}px`,
                color: colors.text,
              }}
            >
              About
            </h4>
            <ul
              className="space-y-2 text-sm"
              style={{ color: colors.secondary }}
            >
              <li>Our Story</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div>
            <h4
              className="font-semibold mb-4"
              style={{
                fontSize: `${typography.bodySize}px`,
                color: colors.text,
              }}
            >
              Customer Service
            </h4>
            <ul
              className="space-y-2 text-sm"
              style={{ color: colors.secondary }}
            >
              <li>Contact Us</li>
              <li>Shipping Info</li>
              <li>Returns</li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h4
              className="font-semibold mb-4"
              style={{
                fontSize: `${typography.bodySize}px`,
                color: colors.text,
              }}
            >
              Follow Us
            </h4>
            <ul
              className="space-y-2 text-sm"
              style={{ color: colors.secondary }}
            >
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 pb-8 border-b text-sm"
          style={{ borderColor: colors.secondary, color: colors.secondary }}
        >
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>support@yourstore.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+855 12 345 678</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Phnom Penh, Cambodia</span>
          </div>
        </div>

        {/* Payment Icons & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-xs font-semibold"
              style={{ color: colors.text }}
            >
              VISA
            </div>
            <div
              className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-xs font-semibold"
              style={{ color: colors.text }}
            >
              MC
            </div>
            <div
              className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-xs font-semibold"
              style={{ color: colors.text }}
            >
              PP
            </div>
            <div
              className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-xs font-semibold"
              style={{ color: colors.text }}
            >
              AE
            </div>
          </div>
          <p className="text-sm" style={{ color: colors.secondary }}>
            © 2025 Your Store. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
