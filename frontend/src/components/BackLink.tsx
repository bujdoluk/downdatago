"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

// Simplified from the source's hasNavigatedClientSide() (a root-layout-
// mounted history tracker, out of scope here) to window.history.length —
// same practical effect: real back-nav when there's somewhere to go back
// to, fallbackHref for a direct/bookmarked visit.
export default function BackLink({ fallbackHref, label }: { fallbackHref: string; label: ReactNode }) {
  const router = useRouter();

  function handleClick() {
    if (window.history.length > 1) router.back();
    else router.push(fallbackHref);
  }

  return (
    <button type="button" onClick={handleClick} className="link link-hover text-base-content/50 hover:text-base-content text-xs font-medium">
      {label}
    </button>
  );
}
