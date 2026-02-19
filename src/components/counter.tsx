"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  value: string;
  suffix?: string;
  label: string;
  className?: string;
  duration?: number;
}

export function Counter({ value, suffix = "", label, className = "", duration = 2 }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
    if (isNaN(numericValue)) {
      setDisplay(value);
      return;
    }

    const isFloat = value.includes(".");
    const startTime = Date.now();
    const durationMs = duration * 1000;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numericValue * eased;

      if (isFloat) {
        setDisplay(current.toFixed(1));
      } else {
        const formatted = Math.floor(current);
        if (formatted >= 1000000) {
          setDisplay(Math.floor(current / 1000000) + "M");
        } else if (formatted >= 1000) {
          setDisplay(Math.floor(current / 1000) + "K");
        } else {
          setDisplay(formatted.toString());
        }
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplay(value.replace(/[^0-9.KMB+]/g, ""));
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      <div className="text-4xl md:text-5xl font-bold tracking-tight">
        {display}{suffix}
      </div>
      <div className="text-sm text-text-muted mt-1">{label}</div>
    </motion.div>
  );
}
