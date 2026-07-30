type StoryJourneyProps = {
  steps: string[];
  className?: string;
};

// A distinctive, connected pathway for the featured story — a soft curved
// line (echoing the curl in the Njoo Dada logo) threading through each
// stage, rather than a row of generic cards.
export function StoryJourney({ steps, className = "" }: StoryJourneyProps) {
  return (
    <ol className={`relative flex flex-col gap-8 pl-10 ${className}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 100"
        preserveAspectRatio="none"
        className="absolute inset-y-0 left-0 h-full w-6 text-accent"
      >
        <path
          d="M12 0 C 22 10, 2 23, 12 33 C 22 43, 2 56, 12 66 C 22 76, 2 89, 12 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>
      {steps.map((step) => (
        <li key={step} className="relative flex items-center gap-4">
          <span
            aria-hidden="true"
            className="absolute -left-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#f7c948] bg-background"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#f7c948]" />
          </span>
          <span className="font-display text-lg text-foreground">{step}</span>
        </li>
      ))}
    </ol>
  );
}
