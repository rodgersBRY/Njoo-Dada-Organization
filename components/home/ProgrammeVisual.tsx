import type { ReactNode } from "react";
import type { ProgrammeVisualKey } from "@/content/types";

type ProgrammeVisualProps = {
  visual: ProgrammeVisualKey;
  className?: string;
};

// Curves echo the arc in the Njoo Dada logo; strokes inherit currentColor so each
// block controls its own tone.
const paths: Record<ProgrammeVisualKey, ReactNode> = {
  shelter: (
    <>
      <path d="M8 30 L32 10 L56 30" />
      <path d="M14 30 V52 H50 V30" />
      <path d="M26 52 V38 a6 6 0 0 1 12 0 V52" />
    </>
  ),
  book: (
    <>
      <path d="M32 20 C24 13 16 12 8 14 V46 C16 44 24 45 32 52" />
      <path d="M32 20 C40 13 48 12 56 14 V46 C48 44 40 45 32 52" />
      <path d="M32 20 V52" />
    </>
  ),
  connection: (
    <>
      <circle cx="24" cy="32" r="14" />
      <circle cx="40" cy="32" r="14" />
    </>
  ),
  pathway: (
    <>
      <path d="M8 50 C20 50 22 36 32 30 C42 24 46 18 56 14" />
      <path d="M45 14 H56 V25" />
      <circle cx="8" cy="50" r="2.5" />
      <circle cx="32" cy="30" r="2.5" />
    </>
  ),
  community: (
    <>
      <circle cx="32" cy="18" r="7" />
      <circle cx="18" cy="42" r="7" />
      <circle cx="46" cy="42" r="7" />
      <path d="M28 24 L22 36" />
      <path d="M36 24 L42 36" />
      <path d="M25 42 H39" />
    </>
  ),
};

export function ProgrammeVisual({ visual, className = "" }: ProgrammeVisualProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {paths[visual]}
    </svg>
  );
}
