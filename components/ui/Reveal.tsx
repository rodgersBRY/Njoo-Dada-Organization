"use client";

import { createElement, useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delayMs?: number;
  className?: string;
};

export function Reveal({ children, as = "div", delayMs = 0, className = "" }: RevealProps) {
  const [node, setNode] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const hasObserved = useRef(false);

  useEffect(() => {
    if (!node || hasObserved.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    hasObserved.current = true;
    return () => observer.disconnect();
  }, [node]);

  return createElement(
    as,
    {
      ref: setNode,
      style: { transitionDelay: visible ? `${delayMs}ms` : "0ms" },
      className: `transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`,
    },
    children,
  );
}
