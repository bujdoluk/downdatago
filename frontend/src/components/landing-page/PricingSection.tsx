"use client";

import { useState } from "react";
import Link from "next/link";
import { annualBilledTotal, discountedMonthlyPrice, PLAN_CATALOG } from "@/lib/plans";
import RevealOnScroll from "@/components/landing-page/RevealOnScroll";

const mono = "font-mono";

function ComingSoonRow({ label }: { label: string }) {
  return (
    <li className="flex flex-wrap justify-between gap-x-4 gap-y-1">
      {label} <span className="badge badge-ghost badge-sm">Coming soon</span>
    </li>
  );
}

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);
  const interval = annual ? "year" : "month";

  const plans = [
    { key: "starter" as const, badge: null as string | null, ctaClass: "btn-outline", cardClass: "" },
    { key: "growth" as const, badge: null as string | null, ctaClass: "btn-outline", cardClass: "" },
  ];

  const freeEntry = PLAN_CATALOG.free;
  const teamEntry = PLAN_CATALOG.team;
  const businessEntry = PLAN_CATALOG.business;

  function priceDisplay(monthlyPrice: number) {
    return (annual ? discountedMonthlyPrice(monthlyPrice) : monthlyPrice).toFixed(2);
  }

  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-[96rem] px-8">
        <div className="mx-auto mb-10 flex max-w-xl flex-col items-center gap-3 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">Pricing</h2>
          <p className="text-base-content/70">Instead, a real 14-day trial with full access, no card required. Pick a plan when you&rsquo;re ready, not before.</p>
        </div>

        <div className="mb-10 flex items-center justify-center gap-3">
          <span className={`text-sm font-medium ${annual ? "text-base-content/50" : "text-base-content"}`}>Monthly</span>
          <input
            type="checkbox"
            className="toggle toggle-info"
            checked={annual}
            onChange={(e) => setAnnual(e.target.checked)}
            aria-label="Annual"
          />
          <span className={`flex items-center gap-2 text-sm font-medium ${annual ? "text-base-content" : "text-base-content/50"}`}>
            Annual
            <span className="badge badge-success badge-soft">Save 20%</span>
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <RevealOnScroll delayMs={0}>
            <div className="card card-border bg-base-200">
              <div className="card-body gap-6 p-8">
                <div className="flex flex-col gap-1">
                  <div className="text-base font-bold">Free</div>
                  <div className={`text-4xl font-bold ${mono}`}>
                    $0<span className="text-base-content/50 text-base font-normal">/mo</span>
                  </div>
                  <div className="h-4" />
                </div>
                <ul className="text-base-content/70 flex flex-1 flex-col gap-3 text-sm">
                  <li className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                    Monitors <span className={`${mono} text-base-content`}>{freeEntry.features.monitors}</span>
                  </li>
                  <li className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                    Check interval <span className={`${mono} text-base-content`}>{freeEntry.features.checkInterval}</span>
                  </li>
                  <li className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                    Boards <span className={`${mono} text-base-content`}>{freeEntry.features.boards}</span>
                  </li>
                  <li className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                    Status pages <span className={`${mono} text-base-content`}>{freeEntry.features.statusPages}</span>
                  </li>
                  <li className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                    Admin users <span className={`${mono} text-base-content`}>{freeEntry.features.adminUsers}</span>
                  </li>
                  <li className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                    History <span className={`${mono} text-base-content`}>{freeEntry.features.history}</span>
                  </li>
                  <li className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                    Integrations <span className={`${mono} text-base-content`}>{freeEntry.features.integrations}</span>
                  </li>
                </ul>
                <div className="card-actions">
                  <Link href="/login" className="btn btn-outline w-full rounded-full">
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {plans.map((plan, i) => {
            const catalogEntry = PLAN_CATALOG[plan.key];
            const monthlyPrice = catalogEntry.monthlyPrice;
            const rows: [string, string][] = [
              ["Monitors", catalogEntry.features.monitors],
              ["Check interval", catalogEntry.features.checkInterval],
              ["Boards", catalogEntry.features.boards === "unlimited" ? "Unlimited" : catalogEntry.features.boards],
              ["Status pages", catalogEntry.features.statusPages === "unlimited" ? "Unlimited" : catalogEntry.features.statusPages],
              ["Admin users", catalogEntry.features.adminUsers === "unlimited" ? "Unlimited" : catalogEntry.features.adminUsers],
              ["History", catalogEntry.features.history],
              ["Integrations", catalogEntry.features.integrations],
            ];
            const planLabel = plan.key === "starter" ? "Starter" : "Growth";
            return (
              <RevealOnScroll key={plan.key} delayMs={(i + 1) * 80}>
                <div className={`card card-border bg-base-200 transition-transform duration-300 hover:-translate-y-1 ${plan.cardClass}`}>
                  <div className="card-body gap-6 p-8">
                    <div className="flex flex-col gap-1">
                      <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-base font-bold">
                        {planLabel}
                        {plan.badge && <span className={`badge badge-info ${mono}`}>{plan.badge}</span>}
                      </div>
                      <div className={`text-4xl font-bold ${mono}`}>
                        ${priceDisplay(monthlyPrice)}
                        <span className="text-base-content/50 text-base font-normal">/mo</span>
                      </div>
                      <div className="text-base-content/50 h-4 text-xs">
                        {annual && `billed annually · $${annualBilledTotal(monthlyPrice).toFixed(2)}/yr`}
                      </div>
                    </div>
                    <ul className="text-base-content/70 flex flex-1 flex-col gap-3 text-sm">
                      {rows.map(([label, value]) => (
                        <li key={label} className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                          {label} <span className={`${mono} text-base-content`}>{value}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="card-actions">
                      <Link href={`/billing?plan=${plan.key}&interval=${interval}`} className={`btn ${plan.ctaClass} w-full rounded-full`}>
                        {catalogEntry.trialDays ? "Start free trial" : "Get started"}
                      </Link>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}

          <RevealOnScroll delayMs={3 * 80}>
            <div className="card card-border bg-base-200 border-info/40 shadow-2xl transition-transform duration-300 hover:-translate-y-1">
              <div className="card-body gap-6 p-8">
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-base font-bold">
                    Team
                    <span className={`badge badge-info ${mono}`}>Most teams</span>
                  </div>
                  <div className={`text-4xl font-bold ${mono}`}>
                    ${priceDisplay(teamEntry.monthlyPrice)}
                    <span className="text-base-content/50 text-base font-normal">/mo</span>
                  </div>
                  <div className="text-base-content/50 h-4 text-xs">
                    {annual && `billed annually · $${annualBilledTotal(teamEntry.monthlyPrice).toFixed(2)}/yr`}
                  </div>
                </div>
                <ul className="text-base-content/70 flex flex-1 flex-col gap-3 text-sm">
                  <li className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                    Monitors <span className={`${mono} text-base-content`}>{teamEntry.features.monitors}</span>
                  </li>
                  <li className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                    Check interval <span className={`${mono} text-base-content`}>{teamEntry.features.checkInterval}</span>
                  </li>
                  <li className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                    Boards <span className={`${mono} text-base-content`}>{teamEntry.features.boards}</span>
                  </li>
                  <li className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                    Status pages <span className={`${mono} text-base-content`}>{teamEntry.features.statusPages}</span>
                  </li>
                  <li className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                    Admin users <span className={`${mono} text-base-content`}>{teamEntry.features.adminUsers}</span>
                  </li>
                  <li className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                    History <span className={`${mono} text-base-content`}>{teamEntry.features.history}</span>
                  </li>
                  <li className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                    Integrations <span className={`${mono} text-base-content`}>{teamEntry.features.integrations}</span>
                  </li>
                  <ComingSoonRow label="Admin SSO" />
                  <ComingSoonRow label="Authenticated status pages" />
                </ul>
                <div className="card-actions">
                  <button type="button" disabled className="btn btn-disabled w-full rounded-full">
                    Get notified
                  </button>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delayMs={4 * 80}>
            <div className="card card-border card-dash bg-base-200/60">
              <div className="card-body gap-6 p-8">
                <div className="flex flex-col gap-1">
                  <div className="text-base-content/70 flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-base font-bold">
                    Business
                    <span className={`badge badge-ghost ${mono}`}>In the making</span>
                  </div>
                  <div className={`text-2xl font-bold ${mono}`}>
                    ${priceDisplay(businessEntry.monthlyPrice)}
                    <span className="text-base-content/50 text-base font-normal">/mo</span>
                  </div>
                  <div className="text-base-content/50 h-4 text-xs">
                    {annual && `billed annually · $${annualBilledTotal(businessEntry.monthlyPrice).toFixed(2)}/yr`}
                  </div>
                </div>
                <ul className="text-base-content/50 flex flex-1 flex-col gap-3 text-sm">
                  <li className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                    Monitors <span className={mono}>{businessEntry.features.monitors}</span>
                  </li>
                  <li className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                    Check interval <span className={mono}>{businessEntry.features.checkInterval}</span>
                  </li>
                  <li className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                    Boards <span className={mono}>Unlimited</span>
                  </li>
                  <li className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                    Status pages <span className={mono}>Unlimited</span>
                  </li>
                  <li className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                    Admin users <span className={mono}>{businessEntry.features.adminUsers}</span>
                  </li>
                  <li className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                    History <span className={mono}>{businessEntry.features.history}</span>
                  </li>
                  <li className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                    Integrations <span className={mono}>{businessEntry.features.integrations}</span>
                  </li>
                  <ComingSoonRow label="Admin SSO" />
                  <ComingSoonRow label="Authenticated status pages" />
                  <ComingSoonRow label="API access" />
                </ul>
                <div className="border-base-300 text-base-content/50 border-t border-dashed pt-4 text-xs">
                  SSO, audit logs, and priority support are still being built. Leave your email and we&rsquo;ll tell you the day it ships.
                </div>
                <div className="card-actions">
                  <button type="button" disabled className="btn btn-disabled w-full rounded-full">
                    Get notified
                  </button>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <p className="text-base-content/70 mt-10 text-center text-sm">
          Need more than 1,000 monitors?{" "}
          <Link href="/support" className="link link-hover text-base-content font-medium">
            Get in touch.
          </Link>
        </p>
      </div>
    </section>
  );
}
