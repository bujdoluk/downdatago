import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INTEGRATION_CATALOG, resolveIntegrationProvider } from "@/lib/integrationCatalog";
import IntegrationPageContent from "@/components/landing-page/IntegrationPageContent";

export function generateStaticParams() {
  return INTEGRATION_CATALOG.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const provider = resolveIntegrationProvider(slug);
  if (!provider) return {};

  const title = `${provider.label} | downDATA`;
  const description = provider.description;

  return {
    title,
    description,
    alternates: { canonical: `/integrations/${provider.slug}` },
    openGraph: { title, description, url: `/integrations/${provider.slug}`, siteName: "downDATA", type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default async function IntegrationProviderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const provider = resolveIntegrationProvider(slug);
  if (!provider) notFound();

  return <IntegrationPageContent slug={provider.slug} />;
}
