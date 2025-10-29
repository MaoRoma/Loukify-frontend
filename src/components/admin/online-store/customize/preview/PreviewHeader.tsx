"use client";

import { Search, ShoppingCart, User, Heart } from "lucide-react";
import type {
  ThemeColors,
  ThemeTypography,
  HeaderConfig,
} from "@/lib/types/Theme";
import { useCart } from "@/lib/context/CartContext";

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
