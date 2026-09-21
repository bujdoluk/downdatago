import Link from "next/link";
import ClosingCta from "@/components/landing-page/ClosingCta";
import FaqSection from "@/components/landing-page/FaqSection";
import Footer from "@/components/landing-page/Footer";
import LandingNavbar from "@/components/landing-page/LandingNavbar";
import PricingSection from "@/components/landing-page/PricingSection";
import RevealOnScroll from "@/components/landing-page/RevealOnScroll";
import LiveDashboardPanel from "@/components/landing-page/LiveDashboardPanel";
import { INDICATOR_STYLES } from "@/components/statusStyles";
import { AlertIcon, BoardIcon, BoltIcon, UserGroupIcon } from "@/components/icons/NavIcons";

const mono = "font-mono";

export default function LandingPage() {
  return (
    <div className="bg-base-100 text-base-content">
      <LandingNavbar />

      <header>
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-8 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <div className="flex flex-col items-center gap-7 text-center lg:items-start lg:text-left">
            <h1 className="max-w-xl text-5xl leading-[1.05] font-black tracking-tight text-balance sm:text-6xl">
              If it goes <span className="text-primary">down</span>, you&rsquo;ll know first.
            </h1>

            <p className="text-base-content/70 max-w-lg text-lg leading-relaxed">
              downDATA watches GitHub, Supabase, Cloudflare, and anything else on Atlassian Statuspage, checked every 30s, for a fraction of the price.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link href="/boards" className="btn btn-info rounded-full shadow-lg">
                Start your 14-day trial
              </Link>
              <span className="text-base-content/50 text-sm">No credit card. Full access for 14 days.</span>
            </div>
          </div>

          <LiveDashboardPanel className="mx-auto w-full max-w-md lg:mx-0" />
        </div>
      </header>

      <section className="border-base-300 bg-base-200/40 border-t py-24">
        <div className="mx-auto max-w-6xl px-8">
          <div className="mx-auto mb-14 flex max-w-xl flex-col items-center gap-3 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">Cheaper because the bill behind it is smaller.</h2>
            <p className="text-base-content/70">
              Competitor pricing partly pays for phone/SMS infrastructure and multi-region probe networks we don&rsquo;t carry the same way.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RevealOnScroll className="md:col-span-1 lg:col-span-2">
              <div className="card card-border bg-info/5 border-info/20 hover:border-info/40 h-full transition-colors">
                <div className="card-body gap-4 p-7">
                  <div className="flex items-start justify-between">
                    <div className="bg-info/10 flex h-11 w-11 items-center justify-center rounded-xl">
                      <BoltIcon className="text-info h-6 w-6" />
                    </div>
                    <div className={`text-info flex items-baseline gap-1.5 text-3xl font-bold ${mono}`}>
                      <span className="bg-info animate-pulse-ring inline-block h-2 w-2 rounded-full" aria-hidden="true" />
                      30s
                    </div>
                  </div>
                  <h3 className="card-title text-base">Checks every 30 seconds</h3>
                  <p className="text-base-content/70 text-sm leading-relaxed">
                    Every tracked service is checked every 30 seconds. UptimeRobot&rsquo;s cheapest paid plan only manages 60s.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delayMs={80} className="md:col-span-1 lg:col-span-1">
              <div className="card card-border bg-info/5 border-info/20 hover:border-info/40 h-full transition-colors">
                <div className="card-body gap-4 p-7">
                  <div className="bg-info/10 flex h-11 w-11 items-center justify-center rounded-xl">
                    <AlertIcon className="text-info h-6 w-6" />
                  </div>
                  <h3 className="card-title text-base">Monitor services, see every incident</h3>
                  <p className="text-base-content/70 text-sm leading-relaxed">
                    Add any service and watch its live status update in real time. Click into any incident to see its full timeline, from investigating to
                    resolved.
                  </p>
                  <div className="mt-1 flex gap-1" aria-hidden="true">
                    {["none", "none", "none", "minor", "none", "none", "critical", "none", "none", "none"].map((indicator, i) => (
                      <span key={i} className={`h-4 w-1.5 rounded-full ${INDICATOR_STYLES[indicator]?.dot}`} />
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delayMs={140} className="md:col-span-1 lg:col-span-1">
              <div className="card card-border bg-base-200 hover:border-base-content/20 h-full transition-colors">
                <div className="card-body gap-4 p-7">
                  <div className="bg-info/10 flex h-11 w-11 items-center justify-center rounded-xl">
                    <UserGroupIcon className="text-info h-6 w-6" />
                  </div>
                  <h3 className="card-title text-base">Unlimited seats, every plan</h3>
                  <p className="text-base-content/70 text-sm leading-relaxed">
                    UptimeRobot charges $15-19/month per teammate past the first three. Here, the whole team is included.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delayMs={200} className="md:col-span-1 lg:col-span-2">
              <div className="card card-border bg-base-200 hover:border-base-content/20 h-full transition-colors">
                <div className="card-body gap-4 p-7 sm:flex-row sm:items-center">
                  <div className="bg-info/10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                    <BoardIcon className="text-info h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="card-title text-base">Boards for every team</h3>
                    <p className="text-base-content/70 mt-1 text-sm leading-relaxed">
                      Group your tracked services into boards, so each team only sees the services that matter to them.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <PricingSection />

      <FaqSection />

      <ClosingCta heading="Fourteen days. Full access. No card." ctaLabel="Start your trial" href="/boards" />

      <Footer />
    </div>
  );
}
