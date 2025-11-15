"use client";

import { Search, ShoppingCart, User, Heart } from "lucide-react";
import type {
  ThemeColors,
  ThemeTypography,
  HeaderConfig,
} from "@/lib/types/Theme";
import { useCart } from "@/lib/context/CartContext";
import { getFontFamilyStyle } from "@/lib/utils/ThemeHelper";

interface PreviewHeaderProps {
  colors: ThemeColors;
  typography: ThemeTypography;
  header: HeaderConfig;
  onCartClick: () => void;
}

export function PreviewHeader({
  colors,
  typography,
  header,
  onCartClick,
}: PreviewHeaderProps) {
  const { cartItemCount } = useCart();

  return (
    <>
      {/* Announcement Bar */}
      {header.showAnnouncement && (
        <div
          className="px-6 py-2 text-center text-sm"
          style={{
            backgroundColor: colors.primary,
            color: colors.background,
            fontFamily: getFontFamilyStyle(typography.bodyFont),
          }}
        >
          {header.announcementText}
        </div>
      )}

      {/* Navigation */}
      <div className="border-b px-6 py-4 flex items-center justify-between">
        <div
          className="font-bold text-xl"
          style={{
            color: colors.text,
            fontFamily: getFontFamilyStyle(typography.headingFont),
          }}
        >
          {header.logoText}
        </div>
        <div className="flex items-center gap-6">
          <nav
            className="hidden md:flex items-center gap-6 text-sm"
            style={{
              fontSize: `${typography.bodySize}px`,
              fontFamily: getFontFamilyStyle(typography.bodyFont),
            }}
          >
            {header.navigationItems.map((item, index) => (
              <a key={index} href="#" style={{ color: colors.text }}>
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={onCartClick}
              className="relative hover:opacity-70 transition-opacity"
              aria-label="View cart"
            >
              <ShoppingCart
                className="w-5 h-5"
                style={{ color: colors.text }}
              />
              {cartItemCount > 0 && (
                <span
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold"
                  style={{
                    backgroundColor: colors.primary,
                    color: colors.background,
                  }}
                >
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
