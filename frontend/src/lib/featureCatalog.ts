import type { ComponentType } from "react";
import { ActivityIcon, AlertIcon, WrenchIcon, PlugIcon, HistoryIcon, BoardIcon, GlobeIcon } from "@/components/icons/NavIcons";

export type FeatureSlug = "monitors" | "incidents" | "maintenances" | "integrations" | "history" | "boards" | "statusPages";

export type FeatureEntry = {
  slug: FeatureSlug;
  icon: ComponentType<{ className?: string }>;
  label: string;
  description: string;
};

export const FEATURE_CATALOG: FeatureEntry[] = [
  {
    slug: "monitors",
    icon: ActivityIcon,
    label: "Monitors",
    description:
      "Track the live status of any service on Atlassian Statuspage (GitHub, Supabase, Cloudflare, and anything else your team depends on), checked as often as every 30 seconds.",
  },
  {
    slug: "incidents",
    icon: AlertIcon,
    label: "Incidents",
    description:
      "A unified timeline of incidents across every service you track, so you don't have to check five different status pages to know what's actually going on.",
  },
  {
    slug: "maintenances",
    icon: WrenchIcon,
    label: "Maintenances",
    description:
      "Scheduled and in-progress maintenance windows across all your tracked services, in one place. Planned downtime never looks like an outage.",
  },
  {
    slug: "integrations",
    icon: PlugIcon,
    label: "Integrations",
    description:
      "Connect Slack and send status updates straight to a channel your team already watches, so no one has to remember to check a dashboard.",
  },
  {
    slug: "history",
    icon: HistoryIcon,
    label: "History",
    description:
      "Pick any tracked service and see its incident history over the last 12 months, useful the next time someone asks whether this has happened before.",
  },
  {
    slug: "boards",
    icon: BoardIcon,
    label: "Boards",
    description: "Group your tracked services into boards for different teams, so everyone sees only the services that matter to them.",
  },
  {
    slug: "statusPages",
    icon: GlobeIcon,
    label: "Status Pages",
    description:
      "Publish a public, read-only status page for any board's tracked services, so your customers can check for themselves before they open a ticket.",
  },
];

export function resolveFeature(slug: string): FeatureEntry | undefined {
  return FEATURE_CATALOG.find((feature) => feature.slug === slug);
}
