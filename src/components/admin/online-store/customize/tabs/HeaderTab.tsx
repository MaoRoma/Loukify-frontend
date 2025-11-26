"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Trash2, Plus } from "lucide-react";

interface HeaderTabProps {
  header: {
    logoText: string;
    layout: string;
    showAnnouncement: boolean;
    announcementText: string;
    navigationItems: string[];
    showSearchBar: boolean;
    showWishlistIcon: boolean;
  };
  setHeader: (header: any) => void;
}

export function HeaderTab({ header, setHeader }: HeaderTabProps) {
  const [newMenuItem, setNewMenuItem] = useState("");

  const addMenuItem = () => {
    if (newMenuItem.trim()) {
      setHeader({
        ...header,
        navigationItems: [...header.navigationItems, newMenuItem.trim()],
      });
      setNewMenuItem("");
    }
  };

  const removeMenuItem = (index: number) => {
    setHeader({
      ...header,
      navigationItems: header.navigationItems.filter((_, i) => i !== index),
    });
  };

  return (
    <>
      {/* Logo & Branding */}
      <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
        <h3 className="font-semibold text-xs sm:text-sm mb-2 sm:mb-3">
          Logo & Branding
        </h3>
        <div>
          <Label className="text-xs text-muted-foreground">
            Store Logo Text
          </Label>
          <Input
            type="text"
            value={header.logoText}
            onChange={(e) => setHeader({ ...header, logoText: e.target.value })}
            className="mt-1 text-xs sm:text-sm"
          />
        </div>
      </div>

      {/* Header Style */}
      <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
        <h3 className="font-semibold text-xs sm:text-sm mb-2 sm:mb-3">
          Header Style
        </h3>
        <div>
          <Label className="text-xs text-muted-foreground">Layout</Label>
          <Select
            value={header.layout}
            onValueChange={(value) => setHeader({ ...header, layout: value })}
          >
            <SelectTrigger className="mt-1 text-xs sm:text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="minimal" className="text-xs sm:text-sm">
                Minimal
              </SelectItem>
              <SelectItem value="centered" className="text-xs sm:text-sm">
                Centered
              </SelectItem>
              <SelectItem value="split" className="text-xs sm:text-sm">
                Split
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Announcement Bar */}
      <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
        <h3 className="font-semibold text-xs sm:text-sm mb-2 sm:mb-3">
          Announcement Bar
        </h3>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-xs text-muted-foreground">
              Show Announcement
            </Label>
            <Switch
              checked={header.showAnnouncement}
              onCheckedChange={(checked) =>
                setHeader({ ...header, showAnnouncement: checked })
              }
            />
          </div>
          {header.showAnnouncement && (
            <div>
              <Label className="text-xs text-muted-foreground">
                Announcement Text
              </Label>
              <Input
                type="text"
                value={header.announcementText}
                onChange={(e) =>
                  setHeader({ ...header, announcementText: e.target.value })
                }
                className="mt-1 text-xs sm:text-sm"
              />
            </div>
          )}
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
        <h3 className="font-semibold text-xs sm:text-sm mb-2 sm:mb-3">
          Navigation Menu
        </h3>
        <div className="space-y-2">
          {header.navigationItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <Input
                type="text"
                value={item}
                readOnly
                className="flex-1 text-xs sm:text-sm"
              />
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 sm:h-9 sm:w-9 text-destructive hover:text-destructive shrink-0"
                onClick={() => removeMenuItem(index)}
              >
                <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          ))}
          <div className="flex items-center gap-2 mt-3">
            <Input
              type="text"
              placeholder="Add menu item"
              value={newMenuItem}
              onChange={(e) => setNewMenuItem(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addMenuItem();
                }
              }}
              className="flex-1 text-xs sm:text-sm"
            />
            <Button
              size="icon"
              className="h-8 w-8 sm:h-9 sm:w-9 bg-foreground text-background hover:bg-foreground/90 shrink-0"
              onClick={addMenuItem}
            >
              <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
        <h3 className="font-semibold text-xs sm:text-sm mb-2 sm:mb-3">
          Features
        </h3>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-xs text-muted-foreground">Search Bar</Label>
            <Switch
              checked={header.showSearchBar}
              onCheckedChange={(checked) =>
                setHeader({ ...header, showSearchBar: checked })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Label className="text-xs text-muted-foreground">
              Wishlist Icon
            </Label>
            <Switch
              checked={header.showWishlistIcon}
              onCheckedChange={(checked) =>
                setHeader({ ...header, showWishlistIcon: checked })
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
