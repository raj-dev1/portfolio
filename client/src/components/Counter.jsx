import { useEffect, useRef, useState } from "react";

// Parses values like "40+", "98%", "4+" → animates the numeric part,
// keeps the prefix/suffix (+, %, etc.) static.
export default function Counter({ value, duration = 1400 }) {
  const match = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);
  const prefix = match ? match[1] : "";
  const target = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : "";
  const isDecimal = match && match[2].includes(".");

  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const start = performance.now();

          function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
            setDisplay(target * eased);
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  const shown = isDecimal ? display.toFixed(1) : Math.round(display);

  return (
    <span ref={ref}>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}
