import React from "react";
import { ShoppingBag, Store, User, InfoIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const StoreSetting = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-start gap-3 mb-6">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Store Information
          </h2>
          <p className="text-sm text-muted-foreground">
            Configure your store details and business information
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="storeName" className="text-sm font-medium">
              Store Name
            </Label>
            <Input id="storeName" type="text" className="bg-muted/50" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="storedescription" className="text-sm font-medium">
            Store Description
          </Label>
          <Input id="storedescription" type="text" className="bg-muted/50" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="storeurl" className="text-sm font-medium">
            Store URL
          </Label>
          <InputGroup className="bg-muted/50">
            <InputGroupInput placeholder="example.com" className="pl-1!" />
            <InputGroupAddon>
              <InputGroupText>https://</InputGroupText>
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <Tooltip>
                <TooltipTrigger asChild>
                  <InputGroupButton className="rounded-full" size="icon-xs">
                    <InfoIcon />
                  </InputGroupButton>
                </TooltipTrigger>
                <TooltipContent>This is content in a tooltip.</TooltipContent>
              </Tooltip>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default StoreSetting;
