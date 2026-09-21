import Link from "next/link";
import Logo from "@/components/navbar/Logo";
import { FEATURE_CATALOG } from "@/lib/featureCatalog";
import { INTEGRATION_CATALOG } from "@/lib/integrationCatalog";
import { FREE_TOOLS_CATALOG } from "@/lib/freeToolsCatalog";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <aside>
        <div className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
          <Logo className="h-6 w-6" />
          <span>
            <span className="text-primary">down</span>DATA
          </span>
        </div>
        <p className="mt-2">
          © {year} <span className="text-primary">down</span>DATA. All rights reserved.
        </p>
      </aside>

      <nav>
        <h3 className="footer-title">Features</h3>
        {FEATURE_CATALOG.filter(({ slug }) => slug !== "integrations").map(({ slug, icon: Icon, label }) => (
          <Link key={slug} href={`/features/${slug}`} className="link link-hover inline-flex items-center gap-1.5">
            <Icon className="h-3.5 w-3.5 shrink-0" />
            {label}
          </Link>
        ))}
      </nav>

      <nav>
        <h3 className="footer-title">Integrations</h3>
        {INTEGRATION_CATALOG.map(({ slug, logo: Logo, label }) => (
          <Link key={slug} href={`/integrations/${slug}`} className="link link-hover inline-flex items-center gap-1.5">
            <Logo size={14} />
            {label}
          </Link>
        ))}
      </nav>

      <nav>
        <h3 className="footer-title">Free Tools</h3>
        {FREE_TOOLS_CATALOG.map(({ slug, icon: Icon, title }) => (
          <Link key={slug} href={`/free-tools/${slug}`} className="link link-hover inline-flex items-center gap-1.5">
            <Icon className="h-3.5 w-3.5 shrink-0" />
            {title}
          </Link>
        ))}
      </nav>

      <nav>
        <h3 className="footer-title">Company</h3>
        <Link href="/pricing" className="link link-hover">
          Pricing
        </Link>
        <Link href="/blog" className="link link-hover">
          Blog
        </Link>
        <Link href="/about" className="link link-hover">
          About
        </Link>
        <Link href="/faq" className="link link-hover">
          FAQ
        </Link>
        <Link href="/support" className="link link-hover">
          Support
        </Link>
      </nav>

      <nav>
        <h3 className="footer-title">Legal</h3>
        <Link href="/privacy" className="link link-hover">
          Privacy Policy
        </Link>
        <Link href="/terms" className="link link-hover">
          Terms of Service
        </Link>
      </nav>
    </footer>
  );
}
