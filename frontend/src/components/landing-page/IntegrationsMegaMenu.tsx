"use client";

import { INTEGRATION_CATALOG } from "@/lib/integrationCatalog";
import CatalogMegaMenu from "@/components/landing-page/CatalogMegaMenu";

export default function IntegrationsMegaMenu() {
  return (
    <CatalogMegaMenu
      label="Integrations"
      entries={INTEGRATION_CATALOG}
      hrefPrefix="/integrations"
      menuClassName="w-72"
      renderIcon={(entry) => <entry.logo size={24} className="mt-0.5 shrink-0" />}
      renderLabel={(entry) => entry.label}
      renderDescription={(entry) => entry.description}
    />
  );
}
