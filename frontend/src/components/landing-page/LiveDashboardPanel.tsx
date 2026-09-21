import { INDICATOR_STYLES } from "@/components/statusStyles";

const mono = "font-mono";

const demoRows = [
  { name: "Supabase", indicator: "minor", outages24h: 1 },
  { name: "GitHub", indicator: "none", outages24h: 0 },
  { name: "Cloudflare", indicator: "none", outages24h: 0 },
] as const;

// Simplified stand-in for the source's CatalogServiceCard (which reads live
// status via react-query) — demoRows above is already static hardcoded
// data even in the source, so this just drops the logo lookup and the
// removable/add-state affordances this hero mockup never used anyway.
function MockServiceRow({ name, indicator, outages24h }: { name: string; indicator: string; outages24h: number }) {
  const style = INDICATOR_STYLES[indicator];

  return (
    <div className="card card-border hover:border-base-content/20 relative flex w-full min-w-0 flex-col bg-base-200 shadow-md transition-colors lg:max-w-[370px]">
      <div className="flex flex-1 flex-row items-center overflow-hidden rounded-[inherit]">
        <div className="card-body min-w-0 flex-1 gap-0 p-4">
          <div className="flex items-center gap-3 text-base-content">
            <span className="bg-base-300 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold">{name[0]}</span>
            <h3 className="card-title min-w-0 truncate text-base">{name}</h3>
          </div>
          <div className="mt-3 flex items-center gap-2.5">
            <span className="text-base-content/50 shrink-0 text-[11px] whitespace-nowrap">
              {outages24h} outage{outages24h === 1 ? "" : "s"} in the last 24 h
            </span>
          </div>
        </div>
        <div role="img" aria-label={style?.label} className={`ml-3 w-3 shrink-0 self-stretch ${style?.dot ?? "bg-base-content/20"}`} />
      </div>
    </div>
  );
}

export default function LiveDashboardPanel({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="bg-info/10 absolute inset-0 translate-x-3 translate-y-3 rounded-2xl" aria-hidden="true" />
      <div className="card card-border bg-base-200 relative shadow-2xl">
        <div className="card-body gap-3 p-6">
          <div className="flex items-center justify-between px-1">
            <span className={`text-base-content/50 text-xs tracking-widest uppercase ${mono}`}>Live dashboard</span>
            <span className="flex gap-1.5">
              <span className="bg-base-content/10 h-2.5 w-2.5 rounded-full" />
              <span className="bg-base-content/10 h-2.5 w-2.5 rounded-full" />
              <span className="bg-base-content/10 h-2.5 w-2.5 rounded-full" />
            </span>
          </div>
          <div className="text-success flex items-center gap-2 px-1 pb-1 text-xs">
            <span className="bg-success animate-signal-pulse h-2 w-2 rounded-full" />
            All monitored services operational
          </div>
          {demoRows.map((row) => (
            <MockServiceRow key={row.name} name={row.name} indicator={row.indicator} outages24h={row.outages24h} />
          ))}
        </div>
      </div>
    </div>
  );
}
