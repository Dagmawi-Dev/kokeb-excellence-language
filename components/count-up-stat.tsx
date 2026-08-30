"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Presentation } from "lucide-react";

type CountUpStatProps = {
  value: number;
  suffix?: string;
  label: string;
  type: "students" | "teachers";
};

export function CountUpStat({ value, suffix = "", label, type }: CountUpStatProps) {
  const [count, setCount] = useState(0);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = statRef.current;
    if (!node) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setCount(value);
      return;
    }

    let frame = 0;
    let started = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        const start = performance.now();
        const duration = 1700;

        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(value * eased));
          if (progress < 1) frame = requestAnimationFrame(animate);
        };

        frame = requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.65 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <div className="community-proof-stat" ref={statRef}>
      <span className="community-proof-icon" aria-hidden="true">
        {type === "students" ? <GraduationCap /> : <Presentation />}
      </span>
      <span className="community-proof-number">
        <strong aria-label={`${value}${suffix}`}>{count}{suffix}</strong>
        <span>{label}</span>
      </span>
    </div>
  );
}
