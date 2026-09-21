"use client";

import { useEffect, type RefObject } from "react";

export function useCloseDetailsOnOutsideClick(ref: RefObject<HTMLDetailsElement | null>, onOutsideClick?: () => void) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      if (onOutsideClick) onOutsideClick();
      else ref.current.open = false;
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, onOutsideClick]);
}
