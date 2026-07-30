import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import type { CtaVariant } from "@/content/types";
import { cn } from "@/lib/cn";

const variantClasses: Record<CtaVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 border border-primary",
  secondary:
    "bg-transparent text-foreground border border-foreground/30 hover:border-foreground hover:bg-foreground/5",
  ghost:
    "bg-transparent text-accent border border-transparent hover:underline underline-offset-4",
};

type ButtonProps = {
  href: string;
  variant?: CtaVariant;
  children: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-11 items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200",
        variantClasses[variant],
        className,
      )}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-200 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
