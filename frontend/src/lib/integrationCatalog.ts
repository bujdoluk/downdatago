import type { ComponentType } from "react";
import SlackLogo from "@/components/integrations/SlackLogo";
import EmailLogo from "@/components/integrations/EmailLogo";
import SmsLogo from "@/components/integrations/SmsLogo";
import WebhookLogo from "@/components/integrations/WebhookLogo";

export type IntegrationProviderSlug = "slack" | "email" | "sms" | "webhook";

export type IntegrationCatalogEntry = {
  slug: IntegrationProviderSlug;
  logo: ComponentType<{ size?: number; className?: string }>;
  label: string;
  description: string;
};

export const INTEGRATION_CATALOG: IntegrationCatalogEntry[] = [
  {
    slug: "slack",
    logo: SlackLogo,
    label: "Slack",
    description:
      "Post new incidents and status updates straight to a Slack channel your team already watches. Connect it in a couple of clicks, no bot to configure.",
  },
  {
    slug: "email",
    logo: EmailLogo,
    label: "Email",
    description:
      "Get incident and status updates delivered straight to an email distribution list. Connect one or more addresses and everyone stays in the loop, no login required.",
  },
  {
    slug: "sms",
    logo: SmsLogo,
    label: "SMS",
    description:
      "Get a text the moment something major or critical breaks. Add one or more numbers and choose which severities are worth a text, from critical-only up to everything.",
  },
  {
    slug: "webhook",
    logo: WebhookLogo,
    label: "Webhook",
    description:
      "Send incident and status updates as a signed JSON payload to any URL you control. Pipe them into your own tools, a custom bot, or another platform's inbound webhook, no vendor SDK required.",
  },
];

export function resolveIntegrationProvider(slug: string): IntegrationCatalogEntry | undefined {
  return INTEGRATION_CATALOG.find((entry) => entry.slug === slug);
}
