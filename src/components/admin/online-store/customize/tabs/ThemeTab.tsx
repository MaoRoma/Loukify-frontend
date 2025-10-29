"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface ThemeTabProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  setColors: (colors: any) => void;
  typography: {
    headingSize: number;
    bodySize: number;
  };
  setTypography: (typography: any) => void;
  layout: {
    productsPerRow: number;
    spacing: number;
  };
  setLayout: (layout: any) => void;
  buttonStyle: "square" | "rounded" | "pill";
  setButtonStyle: (style: "square" | "rounded" | "pill") => void;
}

export function ThemeTab({
  colors,
  setColors,
  typography,
  setTypography,
  layout,
  setLayout,
  buttonStyle,
  setButtonStyle,
}: ThemeTabProps) {
  return (
    <>
      {/* Colors */}
      <div>
        <h3 className="font-semibold text-sm mb-3">Colors</h3>
        <div className="space-y-3">
          <div>
            <Label className="text-xs text-muted-foreground">
              Primary Color
            </Label>
            <div className="flex gap-2 mt-1">
              <Input
                type="color"
                value={colors.primary}
                onChange={(e) =>
                  setColors({ ...colors, primary: e.target.value })
                }
                className="w-10 h-10 p-1 cursor-pointer"
              />
              <Input
                type="text"
                value={colors.primary}
                onChange={(e) =>
                  setColors({ ...colors, primary: e.target.value })
                }
                className="flex-1 text-sm"
              />
            </div>
          </div>

          <div>
            <Label className="text-xs text-muted-foreground">
              Secondary Color
            </Label>
            <div className="flex gap-2 mt-1">
              <Input
                type="color"
                value={colors.secondary}
                onChange={(e) =>
                  setColors({ ...colors, secondary: e.target.value })
                }
                className="w-10 h-10 p-1 cursor-pointer"
              />
              <Input
                type="text"
                value={colors.secondary}
                onChange={(e) =>
                  setColors({ ...colors, secondary: e.target.value })
                }
                className="flex-1 text-sm"
              />
            </div>
          </div>

          <div>
            <Label className="text-xs text-muted-foreground">
              Accent Color
            </Label>
            <div className="flex gap-2 mt-1">
              <Input
                type="color"
                value={colors.accent}
                onChange={(e) =>
                  setColors({ ...colors, accent: e.target.value })
                }
                className="w-10 h-10 p-1 cursor-pointer"
              />
              <Input
                type="text"
                value={colors.accent}
                onChange={(e) =>
                  setColors({ ...colors, accent: e.target.value })
                }
                className="flex-1 text-sm"
              />
            </div>
          </div>

          <div>
            <Label className="text-xs text-muted-foreground">
              Background Color
            </Label>
            <div className="flex gap-2 mt-1">
              <Input
                type="color"
                value={colors.background}
                onChange={(e) =>
                  setColors({ ...colors, background: e.target.value })
                }
                className="w-10 h-10 p-1 cursor-pointer"
              />
              <Input
                type="text"
                value={colors.background}
                onChange={(e) =>
                  setColors({ ...colors, background: e.target.value })
                }
                className="flex-1 text-sm"
              />
            </div>
          </div>

          <div>
            <Label className="text-xs text-muted-foreground">Text Color</Label>
            <div className="flex gap-2 mt-1">
              <Input
                type="color"
                value={colors.text}
                onChange={(e) => setColors({ ...colors, text: e.target.value })}
                className="w-10 h-10 p-1 cursor-pointer"
              />
              <Input
                type="text"
                value={colors.text}
                onChange={(e) => setColors({ ...colors, text: e.target.value })}
                className="flex-1 text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div>
        <h3 className="font-semibold text-sm mb-3">Typography</h3>
        <div className="space-y-4">
          <div>
            <Label className="text-xs text-muted-foreground">
              Heading Font
            </Label>
            <Input
              type="text"
              placeholder="Font family"
              className="mt-1 text-sm"
            />
          </div>

          <div>
            <Label className="text-xs text-muted-foreground">Body Font</Label>
            <Input
              type="text"
              placeholder="Font family"
              className="mt-1 text-sm"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <Label className="text-xs text-muted-foreground">
                Heading Size: {typography.headingSize}px
              </Label>
            </div>
            <Slider
              value={[typography.headingSize]}
              onValueChange={([value]) =>
                setTypography({ ...typography, headingSize: value })
              }
              min={24}
              max={60}
              step={1}
              className="w-full"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <Label className="text-xs text-muted-foreground">
                Body Text Size: {typography.bodySize}px
              </Label>
            </div>
            <Slider
              value={[typography.bodySize]}
              onValueChange={([value]) =>
                setTypography({ ...typography, bodySize: value })
              }
              min={12}
              max={24}
              step={1}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Layout Style */}
      <div>
        <h3 className="font-semibold text-sm mb-3">Layout Style</h3>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <Label className="text-xs text-muted-foreground">
                Products Per Row: {layout.productsPerRow}
              </Label>
            </div>
            <Slider
              value={[layout.productsPerRow]}
              onValueChange={([value]) =>
                setLayout({ ...layout, productsPerRow: value })
              }
              min={2}
              max={6}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
            </div>
          </div>

          <div>
            <Label className="text-xs text-muted-foreground">Card Style</Label>
            <Input
              type="text"
              placeholder="Select style"
              className="mt-1 text-sm"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <Label className="text-xs text-muted-foreground">
                Spacing: {layout.spacing}px
              </Label>
            </div>
            <Slider
              value={[layout.spacing]}
              onValueChange={([value]) =>
                setLayout({ ...layout, spacing: value })
              }
              min={8}
              max={48}
              step={4}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div>
        <h3 className="font-semibold text-sm mb-3">Buttons</h3>
        <div>
          <Label className="text-xs text-muted-foreground mb-2 block">
            Style
          </Label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setButtonStyle("square")}
              className={`p-3 border rounded-lg flex flex-col items-center gap-2 transition-colors ${
                buttonStyle === "square"
                  ? "border-foreground bg-foreground/5"
                  : "border-border hover:border-foreground/50"
              }`}
            >
              <div className="w-full h-8 bg-foreground rounded-none" />
              <span className="text-xs">Square</span>
            </button>
            <button
              onClick={() => setButtonStyle("rounded")}
              className={`p-3 border rounded-lg flex flex-col items-center gap-2 transition-colors ${
                buttonStyle === "rounded"
                  ? "border-foreground bg-foreground/5"
                  : "border-border hover:border-foreground/50"
              }`}
            >
              <div className="w-full h-8 bg-foreground rounded-md" />
              <span className="text-xs">Rounded</span>
            </button>
            <button
              onClick={() => setButtonStyle("pill")}
              className={`p-3 border rounded-lg flex flex-col items-center gap-2 transition-colors ${
                buttonStyle === "pill"
                  ? "border-foreground bg-foreground/5"
                  : "border-border hover:border-foreground/50"
              }`}
            >
              <div className="w-full h-8 bg-foreground rounded-full" />
              <span className="text-xs">Pill</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
