import type { ComponentType } from "react";
import ChromeLogo from "@/components/landing-page/ChromeLogo";
import ChromeExtensionCard from "@/components/landing-page/ChromeExtensionCard";

export type FreeToolSlug = "chromeExtension";

export type FreeToolCatalogEntry = {
  slug: FreeToolSlug;
  icon: ComponentType<{ className?: string }>;
  Content: ComponentType;
  title: string;
  description: string;
};

export const FREE_TOOLS_CATALOG: FreeToolCatalogEntry[] = [
  {
    slug: "chromeExtension",
    icon: ChromeLogo,
    Content: ChromeExtensionCard,
    title: "Chrome Extension",
    description: "Check if any service is down directly from your browser. The downDATA Chrome extension gives you instant access to real-time service status without leaving your current tab.",
  },
];

export function resolveFreeTool(slug: string): FreeToolCatalogEntry | undefined {
  return FREE_TOOLS_CATALOG.find((entry) => entry.slug === slug);
}
