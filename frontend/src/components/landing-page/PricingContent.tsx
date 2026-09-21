import ClosingCta from "@/components/landing-page/ClosingCta";
import Footer from "@/components/landing-page/Footer";
import LandingNavbar from "@/components/landing-page/LandingNavbar";
import PricingSection from "@/components/landing-page/PricingSection";

export default function PricingContent() {
  return (
    <div className="bg-base-100 text-base-content">
      <LandingNavbar />
      <h1 className="sr-only">Pricing</h1>
      <PricingSection />
      <ClosingCta heading="Fourteen days. Full access. No card." ctaLabel="Start your trial" href="/boards" />
      <Footer />
    </div>
  );
}
