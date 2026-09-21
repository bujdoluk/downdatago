"use client";

import { useState } from "react";

// Static stand-in for the source's live catalog search (queried the real
// app's /api/catalog) — no backend endpoint exists for this yet, so this
// filters a small hardcoded list instead of navigating anywhere.
const MOCK_SERVICES = ["GitHub", "Supabase", "Cloudflare", "Vercel", "Stripe", "Slack"];

export default function MockServiceSearch() {
  const [query, setQuery] = useState("");
  const trimmed = query.trim();
  const results = trimmed ? MOCK_SERVICES.filter((name) => name.toLowerCase().startsWith(trimmed.toLowerCase())) : [];

  return (
    <div className="relative w-56 min-w-56">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={`Search ${MOCK_SERVICES.length} services…`}
        className="input input-bordered input-sm w-full"
      />

      {trimmed && (
        <ul className="menu menu-sm border-base-300 absolute top-full left-0 z-20 mt-2 w-full flex-nowrap border bg-[var(--color-surface-2)] p-1 shadow-xl">
          {results.length === 0 ? (
            <li className="text-base-content/50 px-3 py-2.5 text-sm">No services found.</li>
          ) : (
            results.map((name) => (
              <li key={name}>
                <span className="flex items-center gap-2.5">{name}</span>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
