"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import WindowsIcon from "@/components/icons/windows-icon";
import LinuxIcon from "@/components/icons/linux-icon";

type OS = "windows" | "linux" | "macos";

function detectOS(): OS {
  if (typeof navigator === "undefined") return "windows";
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("mac")) return "macos";
  if (ua.includes("linux")) return "linux";
  return "windows";
}

const OS_CONFIG: Record<
  OS,
  { label: string; href: string; icon: React.ComponentType<{ className?: string }> }
> = {
  windows: {
    label: "Download for Windows",
    href: "https://github.com/Parcoil/dotline/releases/latest",
    icon: WindowsIcon,
  },
  linux: {
    label: "Download for Linux",
    href: "https://github.com/Parcoil/dotline/releases/latest",
    icon: LinuxIcon,
  },
  macos: {
    label: "Build for macOS",
    href: "https://github.com/Parcoil/dotline#building-from-source",
    icon: Download,
  },
};

interface DownloadButtonProps {
  size?: "default" | "lg";
}

export function DownloadButton({ size = "lg" }: DownloadButtonProps) {
  const [os, setOS] = useState<OS>("windows");

  useEffect(() => {
    setOS(detectOS());
  }, []);

  const config = OS_CONFIG[os];
  const Icon = config.icon;

  return (
    <Button
      size={size}
      className="gap-2 px-6"
      render={
        <a href={config.href} target="_blank" rel="noopener noreferrer" />
      }
    >
      <Icon className="size-5" />
      {config.label}
    </Button>
  );
}
