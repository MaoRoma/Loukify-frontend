import { Button } from "@/components/ui/button";
import { Eye, Palette } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export function CurrentTheme() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-foreground mb-2">Themes</h1>
        <p className="text-muted-foreground">
          Choose and customize the look and feel of your online store
        </p>
      </div>
      <div className="border border-border rounded-2xl p-6 mb-8 bg-card">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
              <Palette className="w-6 h-6 text-muted-foreground" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-foreground">Current Theme</h3>
                <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20 border-green-500/20">
                  Active
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Dawn - grid layout
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 bg-transparent"
            >
              <Eye className="w-4 h-4" />
              Preview
            </Button>
            <Button
              size="sm"
              className="gap-2 bg-foreground text-background hover:bg-foreground/90"
            >
              <Palette className="w-4 h-4" />
              Customize
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-video bg-muted rounded-lg" />
          <div>
            <p className="text-sm text-foreground mb-4">
              A modern, minimalist theme perfect for any store. Clean design
              with focus on products.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="font-normal">
                Fashion
              </Badge>
              <Badge variant="secondary" className="font-normal">
                Electronics
              </Badge>
              <Badge variant="secondary" className="font-normal">
                Home & Garden
              </Badge>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium text-foreground">4.8</span>
                <span>(1234 reviews)</span>
              </div>
              <span>•</span>
              <span>Modern Style</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
