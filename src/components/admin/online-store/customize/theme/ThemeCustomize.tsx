"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
import { ThemePreview } from "../theme/ThemePreview";
import { ThemePreviewModal } from "../theme/ThemePreviewModal";
import { Header } from "@/components/admin/dashboard/Header";
import { useRouter, useSearchParams } from "next/navigation";
// Add these type imports
import type {
  ThemeColors,
  ThemeTypography,
  ThemeLayout,
  ButtonStyle,
  HeaderConfig,
  Section,
  FooterConfig,
} from "@/lib/types/Theme";
import { ThemeTab } from "../tabs/ThemeTab";
import { HeaderTab } from "../tabs/HeaderTab";
import { SectionsTab } from "../tabs/SectionsTab";
import { FooterTab } from "../tabs/FooterTab";
import { getThemeById, dawnTheme } from "@/lib/constants/themePresets";
import { useTheme } from "@/lib/context/ThemeContext";

export function ThemeCustomizer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { currentThemeId } = useTheme();

  // Use URL theme parameter, fallback to current theme from context
  const themeId = searchParams.get("theme") || currentThemeId;

  const [activeTab, setActiveTab] = useState("theme");
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Auto-detect device and set appropriate view mode (start with desktop to avoid hydration mismatch)
  const [viewMode, setViewMode] = useState<"desktop" | "tablet" | "mobile">(
    "desktop"
  );
  const [isClient, setIsClient] = useState(false);

  // Update view mode on client mount and window resize
  useEffect(() => {
    setIsClient(true);

    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setViewMode("mobile");
      } else if (width < 1024) {
        setViewMode("tablet");
      } else {
        setViewMode("desktop");
      }
    };

    // Set initial view mode
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Load initial theme preset
  const initialTheme = getThemeById(themeId);

  // Add type annotations to your state
  const [colors, setColors] = useState<ThemeColors>(initialTheme.colors);
  const [typography, setTypography] = useState<ThemeTypography>(
    initialTheme.typography
  );
  const [layout, setLayout] = useState<ThemeLayout>(initialTheme.layout);
  const [buttonStyle, setButtonStyle] = useState<ButtonStyle>(
    initialTheme.buttonStyle
  );
  const [header, setHeader] = useState<HeaderConfig>(initialTheme.header);
  const [sections, setSections] = useState<Section[]>(initialTheme.sections);
  const [footer, setFooter] = useState<FooterConfig>(initialTheme.footer);
  const [currentThemeName, setCurrentThemeName] = useState(initialTheme.name);

  // Update theme when themeId changes
  useEffect(() => {
    const theme = getThemeById(themeId);
    setColors(theme.colors);
    setTypography(theme.typography);
    setLayout(theme.layout);
    setButtonStyle(theme.buttonStyle);
    setHeader(theme.header);
    setSections(theme.sections);
    setFooter(theme.footer);
    setCurrentThemeName(theme.name);
  }, [themeId]);

  const tabs = [
    { id: "theme", label: "Theme", icon: Palette },
    { id: "header", label: "Header", icon: Type },
    { id: "sections", label: "Sections", icon: LayoutGrid },
    { id: "footer", label: "Footer", icon: Menu },
  ];

  const handleReset = () => {
    const theme = getThemeById(themeId);
    setColors(theme.colors);
    setTypography(theme.typography);
    setLayout(theme.layout);
    setButtonStyle(theme.buttonStyle);
    setHeader(theme.header);
    setSections(theme.sections);
    setFooter(theme.footer);
  };

  return (
    <>
      {/* Header */}
      <Header />

      <div className="fixed inset-0 top-14 bg-background z-40 flex">
        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Left Sidebar - Customization Panel */}
        <div
          className={`
            fixed lg:relative inset-y-0 left-0 z-50
            w-[280px] sm:w-[340px] lg:w-[300px] xl:w-[320px]
            border-r border-border/50 bg-linear-to-b from-card via-card to-muted/20
            backdrop-blur-xl flex flex-col shadow-2xl lg:shadow-lg
            transform transition-all duration-300 ease-in-out
            ${
              isSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }
          `}
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-border/50 bg-linear-to-r from-primary/10 via-accent/10 to-primary/10 backdrop-blur-md shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-primary/20 hover:scale-110 shrink-0 transition-all duration-200"
                  onClick={() => router.back()}
                >
                  <X className="h-4 w-4" />
                </Button>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="h-7 w-1 rounded-full bg-linear-to-b from-primary to-accent shadow-sm" />
                    <h2 className="text-sm sm:text-base font-bold truncate bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                      Theme Studio
                    </h2>
                  </div>
                  <p className="text-xs text-muted-foreground truncate pl-3 font-medium">
                    {currentThemeName}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full lg:hidden hover:bg-destructive/10 hover:text-destructive hover:rotate-90 shrink-0 transition-all duration-200"
                onClick={() => setIsSidebarOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground pl-3">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50"></div>
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-400 animate-ping"></div>
              </div>
              <span className="font-medium">
                Live Preview • Auto-Save Enabled
              </span>
            </div>
          </div>

          {/* Tabs */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 p-3 sm:p-4 border-b border-border/50 bg-linear-to-br from-muted/40 via-muted/20 to-muted/40">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setActiveTab(tab.id);
                    if (window.innerWidth < 1024) {
                      // Auto-close sidebar on mobile after tab selection for better UX
                    }
                  }}
                  className={cn(
                    "justify-start gap-2 text-xs sm:text-sm transition-all duration-300 group relative overflow-hidden",
                    activeTab === tab.id
                      ? "bg-linear-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20 scale-105 font-semibold border-0"
                      : "border-border/50 bg-muted/30 hover:bg-muted/60 hover:border-primary/30 hover:shadow-md"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300",
                      activeTab === tab.id && "scale-110"
                    )}
                  />
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute inset-0 bg-linear-to-r from-white/10 to-transparent pointer-events-none" />
                  )}
                </Button>
              );
            })}
          </div>

          {/* Customization Controls */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 sm:space-y-6">
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
                themeId={themeId}
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
          <div className="shrink-0 p-4 sm:p-5 border-t border-border/50 bg-linear-to-r from-muted/50 via-muted/40 to-muted/50 backdrop-blur-sm">
            <div className="flex gap-2 sm:gap-3">
              <Button
                variant="outline"
                onClick={() => router.back()}
                className="flex-1 text-xs sm:text-sm hover:bg-destructive/10 hover:text-destructive hover:border-destructive/50 transition-all duration-200"
              >
                Cancel
              </Button>
              <Button
                className="flex-1 bg-linear-to-r from-primary via-accent to-primary text-primary-foreground hover:from-primary/90 hover:via-accent/90 hover:to-primary/90 text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={() => {
                  // Save changes logic here
                  console.log("Saving changes...");
                }}
              >
                <span className="flex items-center gap-2">Save Changes</span>
              </Button>
            </div>
            <p className="text-[10px] text-muted-foreground text-center mt-3 font-medium">
              Changes will be applied immediately • Auto-saved every 30s
            </p>
          </div>
        </div>

        {/* Right Side - Preview Area */}
        <div className="flex-1 flex flex-col bg-linear-to-br from-muted/20 to-muted/40">
          {/* Preview Header */}
          <div className="h-12 sm:h-14 border-b border-border/50 bg-card/95 backdrop-blur-sm flex items-center justify-between px-2 sm:px-4 shadow-sm">
            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden gap-2 hover:bg-primary/10"
            >
              <Menu className="w-4 h-4" />
              <span className="hidden sm:inline">Customize</span>
            </Button>

            <div className="lg:flex items-center gap-2 hidden">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium text-foreground">
                Live Preview
              </span>
            </div>

            <div className="flex items-center gap-1 sm:gap-2 ml-auto lg:ml-0">
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                className="gap-1 sm:gap-2 bg-transparent text-xs sm:text-sm px-2 sm:px-3 hover:bg-destructive/10 hover:text-destructive"
              >
                <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Reset</span>
              </Button>
              <div className="flex items-center gap-0.5 sm:gap-1 border border-border rounded-lg p-0.5 sm:p-1 bg-muted/30">
                <Button
                  variant={viewMode === "desktop" ? "secondary" : "ghost"}
                  size="icon"
                  className={`h-6 w-6 sm:h-7 sm:w-7 ${
                    viewMode === "desktop"
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }`}
                  onClick={() => setViewMode("desktop")}
                  title="Desktop View"
                >
                  <Monitor className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
                <Button
                  variant={viewMode === "tablet" ? "secondary" : "ghost"}
                  size="icon"
                  className={`h-6 w-6 sm:h-7 sm:w-7 ${
                    viewMode === "tablet"
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }`}
                  onClick={() => setViewMode("tablet")}
                  title="Tablet View"
                >
                  <Tablet className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
                <Button
                  variant={viewMode === "mobile" ? "secondary" : "ghost"}
                  size="icon"
                  className={`h-6 w-6 sm:h-7 sm:w-7 ${
                    viewMode === "mobile"
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }`}
                  onClick={() => setViewMode("mobile")}
                  title="Mobile View"
                >
                  <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsPreviewModalOpen(true)}
                className="gap-1 sm:gap-2 bg-transparent text-xs sm:text-sm px-2 sm:px-3 hidden md:flex"
              >
                <Maximize2 className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden lg:inline">Full Preview</span>
              </Button>
            </div>
          </div>

          {/* Preview Content */}
          <div className="flex-1 overflow-auto p-2 sm:p-4 lg:p-8 flex items-start justify-center">
            <ThemePreview
              themeId={themeId}
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

      {/* Full Preview Modal */}
      <ThemePreviewModal
        isOpen={isPreviewModalOpen}
        onClose={() => setIsPreviewModalOpen(false)}
        themeId={themeId}
        themeName={currentThemeName}
        colors={colors}
        typography={typography}
        layout={layout}
        buttonStyle={buttonStyle}
        header={header}
        sections={sections}
        footer={footer}
      />
    </>
  );
}
