import Link from "next/link";
import Logo from "@/components/navbar/Logo";
import ThemeToggle from "@/components/navbar/ThemeToggle";
import FeaturesMegaMenu from "@/components/landing-page/FeaturesMegaMenu";
import IntegrationsMegaMenu from "@/components/landing-page/IntegrationsMegaMenu";
import MobileMenu from "@/components/landing-page/MobileMenu";
import MockServiceSearch from "@/components/landing-page/MockServiceSearch";

export default function LandingNavbar() {
  return (
    <nav className="border-base-300 border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5 text-lg font-extrabold tracking-tight">
            <Logo className="h-6 w-6" />
            <span>
              <span className="text-primary">down</span>DATA
            </span>
          </Link>
          <div className="hidden md:block">
            <MockServiceSearch />
          </div>
        </div>
        <div className="hidden items-center gap-6 text-sm md:flex">
          <FeaturesMegaMenu />
          <IntegrationsMegaMenu />
          <Link href="/pricing" className="text-base-content/70 hover:text-base-content transition-colors">
            Pricing
          </Link>
          <Link href="/blog" className="text-base-content/70 hover:text-base-content transition-colors">
            Blog
          </Link>
          <Link href="/login?mode=signup" className="text-base-content/70 hover:text-base-content transition-colors">
            Sign up
          </Link>
          <Link href="/boards" className="btn btn-info btn-sm rounded-full">
            Start trial
          </Link>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
}
