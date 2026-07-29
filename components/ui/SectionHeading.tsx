import type { ElementType, ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  as?: ElementType;
  children: ReactNode;
  supporting?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  as: Tag = "h2",
  children,
  supporting,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
      ) : null}
      <Tag className="font-display text-4xl leading-[1.1] text-balance sm:text-5xl md:text-6xl">
        {children}
      </Tag>
      {supporting ? (
        <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
          {supporting}
        </p>
      ) : null}
    </div>
  );
}
