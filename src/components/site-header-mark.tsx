"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { ChanhDaiMark } from "./chanhdai-mark";

export function SiteHeaderMark() {
  const pathname = usePathname();
  return pathname === "/" ? <ChanhDaiMarkMotion /> : <ChanhDaiMark />;
}

function ChanhDaiMarkMotion() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const distanceRef = useRef(160);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= distanceRef.current);
  });

  useEffect(() => {
    const coverMark = document.getElementById("js-cover-mark");
    if (!coverMark) return;

    distanceRef.current = calcDistance(coverMark);

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark);
    });
    resizeObserver.observe(coverMark);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-3 -1 20 10"
      shapeRendering="crispEdges"
      aria-label="SK pixel logo"
      initial={{
        opacity: 0,
        transform: "translateY(8px)",
      }}
      animate={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(8px)",
      }}
      transition={{ duration: 0.3 }}
    //   {...props}
    >
      <g fill="currentColor">
        {/* S */}
        <rect x="1" y="0" width="1" height="1" />
        <rect x="2" y="0" width="1" height="1" />
        <rect x="3" y="0" width="1" height="1" />

        <rect x="0" y="1" width="1" height="1" />
        <rect x="4" y="1" width="1" height="1" />

        <rect x="0" y="2" width="1" height="1" />

        <rect x="1" y="3" width="1" height="1" />
        <rect x="2" y="3" width="1" height="1" />
        <rect x="3" y="3" width="1" height="1" />

        <rect x="4" y="4" width="1" height="1" />

        <rect x="0" y="5" width="1" height="1" />
        <rect x="4" y="5" width="1" height="1" />

        <rect x="1" y="6" width="1" height="1" />
        <rect x="2" y="6" width="1" height="1" />
        <rect x="3" y="6" width="1" height="1" />

        {/* K */}
        <rect x="7" y="0" width="1" height="1" />
        <rect x="11" y="0" width="1" height="1" />

        <rect x="7" y="1" width="1" height="1" />
        <rect x="10" y="1" width="1" height="1" />

        <rect x="7" y="2" width="1" height="1" />
        <rect x="9" y="2" width="1" height="1" />

        <rect x="7" y="3" width="1" height="1" />
        <rect x="8" y="3" width="1" height="1" />

        <rect x="7" y="4" width="1" height="1" />
        <rect x="9" y="4" width="1" height="1" />

        <rect x="7" y="5" width="1" height="1" />
        <rect x="10" y="5" width="1" height="1" />

        <rect x="7" y="6" width="1" height="1" />
        <rect x="11" y="6" width="1" height="1" />
      </g>
    </motion.svg>
  );
}
const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;
  const headerHeight = 56;
  return scrollTop + rect.top + rect.height - headerHeight;
};
