import Image from "next/image";
import Footer from "@/components/landing-page/Footer";
import LandingNavbar from "@/components/landing-page/LandingNavbar";
import Logo from "@/components/navbar/Logo";
import BackLink from "@/components/BackLink";
import PageHeader from "@/components/PageHeader";
import lukasPhoto from "./lukas.webp";

// TODO: replace with downDATA's real X/Twitter handle once one exists.
const DOWNDATA_X_URL = "[Insert downDATA's X handle here]";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function AboutContent() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <LandingNavbar />
      <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
        <PageHeader back={<BackLink fallbackHref="/" label="← Back" />}>
          <h1 className="text-3xl font-bold">
            About <span className="text-primary">down</span>DATA
          </h1>
        </PageHeader>

        <h2 className="mt-8 mb-3 text-xl font-bold">The story</h2>
        <p>
          <span className="text-primary">down</span>DATA started in August 2026, built by one developer annoyed that checking whether the tools your app
          depends on are having a bad day required either babysitting five different status pages or paying a service like StatusGator hundreds of dollars
          a month for something that&rsquo;s fundamentally just polling a public API. <span className="text-primary">down</span>DATA does the same job,
          tracking GitHub, Supabase, Cloudflare, and anything else on Atlassian Statuspage, for a fraction of the price.
        </p>

        <h2 className="mt-8 mb-3 text-xl font-bold">Who&rsquo;s behind it</h2>
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Image src={lukasPhoto} alt="Lukáš Bujdoš" className="h-20 w-20 shrink-0 rounded-full object-cover" />
          <p className="flex-1">
            <span className="text-primary">down</span>DATA is built and maintained by Lukáš Bujdoš, a web developer based in Slovakia, currently as a solo
            project. It&rsquo;s new, actively built in the open, one feature at a time, rather than a company with a headcount to pad out an About page.
          </p>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <a href="https://x.com/bujdoluk" target="_blank" rel="noopener noreferrer" className="link link-hover inline-flex items-center gap-1.5">
            <XIcon className="h-3.5 w-3.5" />
            Follow Lukáš on X
          </a>
          <a href={DOWNDATA_X_URL} target="_blank" rel="noopener noreferrer" className="link link-hover inline-flex items-center gap-1.5">
            <Logo className="h-3.5 w-3.5" />
            Follow downDATA on X
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
