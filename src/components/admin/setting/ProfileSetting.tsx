"use client";

import type React from "react";

import { useState, useRef } from "react";
import { User, Save, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ProfileSetting() {
  const [formData, setFormData] = useState({
    firstName: "Store",
    lastName: "Owner",
    email: "owner@loukify.com",
    phone: "+855 12 345 678",
  });

  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should be less than 5MB");
        return;
      }

      setImageFile(file);

      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const getInitials = () => {
    return `${formData.firstName.charAt(0)}${formData.lastName.charAt(0)}`;
  };

  const handleSave = () => {
    console.log("Saving profile:", formData);
    if (imageFile) {
      console.log("Uploading image:", imageFile.name);
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-start gap-3 mb-6">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Profile Information
          </h2>
          <p className="text-sm text-muted-foreground">
            Update your personal information and contact details
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Profile Picture</Label>
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src={profileImage || undefined} alt="Profile" />
              <AvatarFallback className="text-lg bg-primary/10 text-primary">
                {getInitials()}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleUploadClick}
                className="w-fit bg-transparent"
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload Photo
              </Button>
              <p className="text-xs text-muted-foreground">
                JPG, PNG or GIF. Max size 5MB
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-sm font-medium">
              First Name
            </Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className="bg-muted/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-sm font-medium">
              Last Name
            </Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className="bg-muted/50"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="bg-muted/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium">
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="bg-muted/50"
          />
        </div>

        <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>
    </div>
  );
}
