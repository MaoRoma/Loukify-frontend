import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeCard() {
  return (
    <Card className="rounded-2xl lg:rounded-3xl h-auto lg:h-[400px] w-full bg-ring border-2 border-[#C9C8C7]">
      <CardContent className="p-4 sm:p-6 flex flex-col items-center justify-center min-h-[300px] lg:min-h-[400px]">
        <div className="w-32 h-24 sm:w-40 sm:h-28 lg:w-40 lg:h-[100px] rounded-2xl lg:rounded-3xl bg-white flex items-center justify-center mb-4 sm:mb-6">
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-1 sm:gap-1.5 lg:gap-2">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-6 h-6 sm:w-7 sm:h-7 lg:w-10 lg:h-10 rounded",
                    i === 4 ? "bg-muted-foreground" : "bg-muted"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mb-3 sm:mb-4">
          <CardTitle className="text-sm sm:text-base mb-2">
            Choose your store theme
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            Select from 8 professionally designed themes including Dawn, Sense,
            Craft, and more
          </CardDescription>
        </div>
        <a href="/admin/online-store" className="w-full">
          <Button
            className="w-full text-xs sm:text-sm lg:text-base"
            variant="default"
          >
            <Palette className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 mr-2" />
            Browse Themes
          </Button>
        </a>
      </CardContent>
    </Card>
  );
}
