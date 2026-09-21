"use client";

import { FEATURE_CATALOG } from "@/lib/featureCatalog";
import CatalogMegaMenu from "@/components/landing-page/CatalogMegaMenu";

export default function FeaturesMegaMenu() {
  return (
    <CatalogMegaMenu
      label="Features"
      entries={FEATURE_CATALOG}
      hrefPrefix="/features"
      menuClassName="w-96 xl:w-[40rem] xl:grid-cols-2"
      renderIcon={(entry) => <entry.icon className="text-info mt-0.5 h-5 w-5 shrink-0" />}
      renderLabel={(entry) => entry.label}
      renderDescription={(entry) => entry.description}
    />
  );
}
