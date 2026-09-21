import type { ReactNode } from "react";
import Footer from "@/components/landing-page/Footer";
import LandingNavbar from "@/components/landing-page/LandingNavbar";

export default function CatalogDetailPage({ title, description, icon }: { title: string; description: string; icon: ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <LandingNavbar />
      <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
        <div className="bg-info/10 text-info mb-4 flex h-14 w-14 items-center justify-center rounded-2xl">{icon}</div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-base-content/70 mt-4 max-w-xl text-lg leading-relaxed">{description}</p>
      </div>
      <Footer />
    </div>
  );
}
