import React from "react";
import { ComputerType } from "@/types";

interface PlaceholderImageProps {
  type: ComputerType;
  className?: string;
}

export function PlaceholderImage({ type, className = "" }: PlaceholderImageProps) {
  const getBackgroundColor = () => {
    switch (type) {
      case "laptop":
        return "bg-blue-100";
      case "desktop":
        return "bg-green-100";
      case "accessory":
        return "bg-purple-100";
      default:
        return "bg-gray-100";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "laptop":
        return "💻";
      case "desktop":
        return "🖥️";
      case "accessory":
        return "🖱️";
      default:
        return "📦";
    }
  };

  return (
    <div className={`flex items-center justify-center ${getBackgroundColor()} rounded-md ${className}`}>
      <span className="text-4xl">{getIcon()}</span>
    </div>
  );
}
