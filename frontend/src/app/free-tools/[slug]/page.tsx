import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FREE_TOOLS_CATALOG, resolveFreeTool } from "@/lib/freeToolsCatalog";
import FreeToolPageContent from "@/components/landing-page/FreeToolPageContent";

export function generateStaticParams() {
  return FREE_TOOLS_CATALOG.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = resolveFreeTool(slug);
  if (!tool) return {};

  const title = `${tool.title} | downDATA`;
  const description = tool.description;

  return {
    title,
    description,
    alternates: { canonical: `/free-tools/${tool.slug}` },
    openGraph: { title, description, url: `/free-tools/${tool.slug}`, siteName: "downDATA", type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default async function FreeToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = resolveFreeTool(slug);
  if (!tool) notFound();

  return <FreeToolPageContent slug={tool.slug} />;
}
