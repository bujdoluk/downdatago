import Link from "next/link";
import Footer from "@/components/landing-page/Footer";
import LandingNavbar from "@/components/landing-page/LandingNavbar";
import BackLink from "@/components/BackLink";
import PageHeader from "@/components/PageHeader";
import { SUPPORT_EMAIL } from "@/lib/constants";

// Source's SupportContent branches on isAuthenticated to render the real
// app's dashboard Sidebar instead of the public navbar/footer — that
// requires a whole auth system this project doesn't have yet, so only the
// public branch is ported.
export default function SupportContent() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <LandingNavbar />
      <div className="w-full flex-1 p-6">
        <PageHeader back={<BackLink fallbackHref="/" label="← Back" />}>
          <div className="mx-auto w-full max-w-3xl">
            <h1 className="text-lg font-semibold">Support</h1>
            <p className="text-base-content/70 mt-2">Need a hand? Here&rsquo;s the fastest way to reach us.</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="card border-base-300 bg-base-200 border">
                <div className="card-body">
                  <h2 className="card-title text-lg">Email</h2>
                  <p className="text-base-content/70 text-sm">Prefer email? Write to us and we&rsquo;ll get back to you.</p>
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="link mt-2 inline-block font-medium">
                    {SUPPORT_EMAIL}
                  </a>
                </div>
              </div>
            </div>

            <h2 className="mt-10 mb-2 text-xl font-bold">Check the FAQ</h2>
            <p className="text-base-content/70">
              Common questions about how downDATA works are already answered there.{" "}
              <Link href="/faq" className="link link-hover link-info font-medium">
                Visit the FAQ
              </Link>
            </p>
          </div>
        </PageHeader>
      </div>
      <Footer />
    </div>
  );
}
