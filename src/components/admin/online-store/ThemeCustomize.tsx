"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  X,
  Monitor,
  Tablet,
  Smartphone,
  Maximize2,
  RotateCcw,
  Palette,
  Type,
  LayoutGrid,
  Menu,
} from "lucide-react";
import { ThemePreview } from "./ThemePreview";
import { useRouter } from "next/navigation";
import { ThemeTab } from "./tabs/ThemeTab";
import { HeaderTab } from "./tabs/HeaderTab";
import { SectionsTab } from "./tabs/SectionTab";
import { FooterTab } from "./tabs/FooterTab";

export function ThemeCustomizer() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("theme");
  const [viewMode, setViewMode] = useState<"desktop" | "tablet" | "mobile">(
    "desktop"
  );

  // Theme customization state
  const [colors, setColors] = useState({
    primary: "#292524",
    secondary: "#78716c",
    accent: "#0c0a09",
    background: "#ffffff",
    text: "#0c0a09",
  });

  const [typography, setTypography] = useState({
    headingSize: 39,
    bodySize: 16,
  });

  const [layout, setLayout] = useState({
    productsPerRow: 4,
    spacing: 24,
  });

  const [buttonStyle, setButtonStyle] = useState<"square" | "rounded" | "pill">(
    "rounded"
  );

  const [header, setHeader] = useState({
    logoText: "Your Store",
    layout: "minimal",
    showAnnouncement: true,
    announcementText: "Free shipping on orders over $50",
    navigationItems: ["Home", "Shop", "About", "Contact"],
    showSearchBar: true,
    showWishlistIcon: true,
  });

  const [sections, setSections] = useState([
    {
      id: "hero",
      type: "hero",
      name: "Hero Banner",
      subtitle: "Hero",
      enabled: true,
      expanded: false,
      content: {
        heading: "Welcome to Our Store",
        subheading: "Discover amazing products at great prices",
        buttonText: "Shop Now",
      },
    },
    {
      id: "featured",
      type: "featured-products",
      name: "Featured Products",
      subtitle: "Featured-Products",
      enabled: true,
      expanded: false,
      content: {
        heading: "Featured Collection",
        description: "Check out our bestselling products",
      },
    },
    {
      id: "promo",
      type: "promotional-banner",
      name: "Promotional Banner",
      subtitle: "Banner",
      enabled: true,
      expanded: false,
      content: {
        heading: "Summer Sale",
        subheading: "Up to 50% off on selected items",
        buttonText: "View Sale",
      },
    },
    {
      id: "newsletter",
      type: "newsletter",
      name: "Newsletter Signup",
      subtitle: "Newsletter",
      enabled: true,
      expanded: false,
      content: {
        heading: "Stay Updated",
        description:
          "Subscribe to our newsletter for exclusive offers and updates",
        buttonText: "Subscribe",
      },
    },
  ]);

  const [footer, setFooter] = useState({
    columns: 4,
    backgroundColor: "#ffffff",
    columnSettings: {
      column1: {
        title: "Shop",
        links: ["Products", "Collections", "New Arrivals"],
      },
      column2: { title: "About", links: ["Our Story", "Careers", "Press"] },
      column3: {
        title: "Customer Service",
        links: ["Contact Us", "Shipping Info", "Returns"],
      },
      column4: {
        title: "Follow Us",
        links: ["Facebook", "Instagram", "Twitter"],
      },
    },
    showNewsletter: true,
    newsletterTitle: "Subscribe to our newsletter",
    newsletterDescription: "Get the latest updates and exclusive offers",
    showSocialIcons: true,
    socialLinks: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    contactInfo: {
      email: "support@yourstore.com",
      phone: "+855 12 345 678",
      address: "Phnom Penh, Cambodia",
    },
    showPaymentIcons: true,
    copyrightText: "© 2025 Your Store. All rights reserved.",
  });

  const tabs = [
    { id: "theme", label: "Theme", icon: Palette },
    { id: "header", label: "Header", icon: Type },
    { id: "sections", label: "Sections", icon: LayoutGrid },
    { id: "footer", label: "Footer", icon: Menu },
  ];

  const handleReset = () => {
    setColors({
      primary: "#292524",
      secondary: "#78716c",
      accent: "#0c0a09",
      background: "#ffffff",
      text: "#0c0a09",
    });
    setTypography({ headingSize: 39, bodySize: 16 });
    setLayout({ productsPerRow: 4, spacing: 24 });
    setButtonStyle("rounded");
    setHeader({
      logoText: "Your Store",
      layout: "minimal",
      showAnnouncement: true,
      announcementText: "Free shipping on orders over $50",
      navigationItems: ["Home", "Shop", "About", "Contact"],
      showSearchBar: true,
      showWishlistIcon: true,
    });
    setSections([
      {
        id: "hero",
        type: "hero",
        name: "Hero Banner",
        subtitle: "Hero",
        enabled: true,
        expanded: false,
        content: {
          heading: "Welcome to Our Store",
          subheading: "Discover amazing products at great prices",
          buttonText: "Shop Now",
        },
      },
      {
        id: "featured",
        type: "featured-products",
        name: "Featured Products",
        subtitle: "Featured-Products",
        enabled: true,
        expanded: false,
        content: {
          heading: "Featured Collection",
          description: "Check out our bestselling products",
        },
      },
      {
        id: "promo",
        type: "promotional-banner",
        name: "Promotional Banner",
        subtitle: "Banner",
        enabled: true,
        expanded: false,
        content: {
          heading: "Summer Sale",
          subheading: "Up to 50% off on selected items",
          buttonText: "View Sale",
        },
      },
      {
        id: "newsletter",
        type: "newsletter",
        name: "Newsletter Signup",
        subtitle: "Newsletter",
        enabled: true,
        expanded: false,
        content: {
          heading: "Stay Updated",
          description:
            "Subscribe to our newsletter for exclusive offers and updates",
          buttonText: "Subscribe",
        },
      },
    ]);

    setFooter({
      columns: 4,
      backgroundColor: "#ffffff",
      columnSettings: {
        column1: {
          title: "Shop",
          links: ["Products", "Collections", "New Arrivals"],
        },
        column2: { title: "About", links: ["Our Story", "Careers", "Press"] },
        column3: {
          title: "Customer Service",
          links: ["Contact Us", "Shipping Info", "Returns"],
        },
        column4: {
          title: "Follow Us",
          links: ["Facebook", "Instagram", "Twitter"],
        },
      },
      showNewsletter: true,
      newsletterTitle: "Subscribe to our newsletter",
      newsletterDescription: "Get the latest updates and exclusive offers",
      showSocialIcons: true,
      socialLinks: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
      contactInfo: {
        email: "support@yourstore.com",
        phone: "+855 12 345 678",
        address: "Phnom Penh, Cambodia",
      },
      showPaymentIcons: true,
      copyrightText: "© 2025 Your Store. All rights reserved.",
    });
  };

  return (
    <div className="fixed inset-0 bg-background z-50 flex">
      {/* Left Sidebar - Customization Panel */}
      <div className="w-[280px] border-r border-border bg-card flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => router.back()}
              >
                <X className="h-4 w-4" />
              </Button>
              <h2 className="font-semibold text-foreground">Customize Dawn</h2>
            </div>
          </div>
          <p className="text-xs text-muted-foreground ml-10">
            grid layout • Click elements to edit
          </p>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-2 gap-2 p-3 border-b border-border">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab(tab.id)}
                className={`justify-start gap-2 ${
                  activeTab === tab.id
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : ""
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </Button>
            );
          })}
        </div>

        {/* Customization Controls */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {activeTab === "theme" && (
            <ThemeTab
              colors={colors}
              setColors={setColors}
              typography={typography}
              setTypography={setTypography}
              layout={layout}
              setLayout={setLayout}
              buttonStyle={buttonStyle}
              setButtonStyle={setButtonStyle}
            />
          )}

          {activeTab === "header" && (
            <HeaderTab header={header} setHeader={setHeader} />
          )}

          {activeTab === "sections" && (
            <SectionsTab sections={sections} setSections={setSections} />
          )}

          {activeTab === "footer" && (
            <FooterTab footer={footer} setFooter={setFooter} />
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-border flex gap-2">
          <Button
            variant="outline"
            onClick={() => router.back()}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button className="flex-1 bg-foreground text-background hover:bg-foreground/90">
            Save Changes
          </Button>
        </div>
      </div>

      {/* Right Side - Preview Area */}
      <div className="flex-1 flex flex-col bg-muted/30">
        {/* Preview Header */}
        <div className="h-14 border-b border-border bg-card flex items-center justify-between px-4">
          <div className="text-sm font-medium text-foreground">
            Live Preview
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              className="gap-2 bg-transparent"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </Button>
            <div className="flex items-center gap-1 border border-border rounded-lg p-1">
              <Button
                variant={viewMode === "desktop" ? "secondary" : "ghost"}
                size="icon"
                className="h-7 w-7"
                onClick={() => setViewMode("desktop")}
              >
                <Monitor className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "tablet" ? "secondary" : "ghost"}
                size="icon"
                className="h-7 w-7"
                onClick={() => setViewMode("tablet")}
              >
                <Tablet className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "mobile" ? "secondary" : "ghost"}
                size="icon"
                className="h-7 w-7"
                onClick={() => setViewMode("mobile")}
              >
                <Smartphone className="w-4 h-4" />
              </Button>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 bg-transparent"
            >
              <Maximize2 className="w-4 h-4" />
              Full Preview
            </Button>
          </div>
        </div>

        {/* Preview Content */}
        <div className="flex-1 overflow-auto p-8 flex items-start justify-center">
          <ThemePreview
            colors={colors}
            typography={typography}
            layout={layout}
            buttonStyle={buttonStyle}
            header={header}
            sections={sections}
            footer={footer}
            viewMode={viewMode}
          />
        </div>
      </div>
    </div>
  );
}
