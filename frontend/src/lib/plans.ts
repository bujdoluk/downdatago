export const ANNUAL_DISCOUNT = 0.2;

export function discountedMonthlyPrice(monthly: number): number {
  return Math.round(monthly * (1 - ANNUAL_DISCOUNT) * 100) / 100;
}

export function annualBilledTotal(monthly: number): number {
  return Math.round(monthly * 12 * (1 - ANNUAL_DISCOUNT) * 100) / 100;
}

type PlanTier = "free" | "starter" | "growth" | "team" | "business";

type PlanFeatures = {
  monitors: string;
  checkInterval: string;
  boards: string | "unlimited";
  statusPages: string | "unlimited";
  adminUsers: string | "unlimited";
  history: string;
  integrations: string;
};

export type PlanDefinition = {
  tier: PlanTier;
  monthlyPrice: number;
  badge?: "mostTeams" | "inTheMaking";
  trialDays?: number;
  features: PlanFeatures;
};

export const PLAN_CATALOG: Record<PlanTier, PlanDefinition> = {
  free: {
    tier: "free",
    monthlyPrice: 0,
    features: { monitors: "3", checkInterval: "10m", boards: "1", statusPages: "1", adminUsers: "1", history: "1 mo", integrations: "Slack, Email" },
  },
  starter: {
    tier: "starter",
    monthlyPrice: 24.99,
    trialDays: 14,
    features: { monitors: "15", checkInterval: "5m", boards: "1", statusPages: "1", adminUsers: "1", history: "6 mo", integrations: "Slack, Email" },
  },
  growth: {
    tier: "growth",
    monthlyPrice: 49.99,
    trialDays: 14,
    features: { monitors: "30", checkInterval: "2m", boards: "2", statusPages: "2", adminUsers: "2", history: "6 mo", integrations: "All" },
  },
  team: {
    tier: "team",
    monthlyPrice: 99,
    badge: "mostTeams",
    trialDays: 14,
    features: { monitors: "75", checkInterval: "1m", boards: "5", statusPages: "5", adminUsers: "5", history: "12 mo", integrations: "All" },
  },
  business: {
    tier: "business",
    monthlyPrice: 174.99,
    badge: "inTheMaking",
    trialDays: 14,
    features: { monitors: "150", checkInterval: "1m", boards: "unlimited", statusPages: "unlimited", adminUsers: "15", history: "24 mo", integrations: "All" },
  },
};
