import React, { useEffect, useRef } from "react";
import { motion, useSpring, useTransform, useInView } from "motion/react";

export function AnimatedNumber({ 
  value, 
  suffix = "", 
  prefix = "", 
  decimals = 0,
  duration = 2500
}: { 
  value: number, 
  suffix?: string, 
  prefix?: string, 
  decimals?: number,
  duration?: number
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const spring = useSpring(0, { bounce: 0, duration });
  
  const display = useTransform(spring, (current) => {
    const formatted = Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(current);
    return `${prefix}${formatted}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}
