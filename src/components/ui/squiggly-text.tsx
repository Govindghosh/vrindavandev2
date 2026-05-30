"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const SquigglyText = ({
  children,
  className,
  stepDuration = 70,
  scale = [4, 6],
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  stepDuration?: number;
  scale?: number | [number, number];
} & React.HTMLAttributes<HTMLSpanElement>) => {
  const [currentScale, setCurrentScale] = useState(
    Array.isArray(scale) ? scale[0] : scale
  );
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (Array.isArray(scale)) {
      intervalId = setInterval(() => {
        setSeed((prev) => prev + 1);
        setCurrentScale((prev) => (prev === scale[0] ? scale[1] : scale[0]));
      }, stepDuration);
    } else {
       intervalId = setInterval(() => {
        setSeed((prev) => prev + 1);
      }, stepDuration);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [scale, stepDuration]);

  return (
    <span
      className={cn("relative inline-block", className)}
      style={{
        filter: `url(#squiggly-${seed})`,
      }}
      {...props}
    >
      <svg
        className="absolute w-0 h-0 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={`squiggly-${seed}`}>
            <feTurbulence
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
              seed={seed}
            />
            <feDisplacementMap
              id="displacement"
              in="SourceGraphic"
              in2="noise"
              scale={currentScale}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      {children}
    </span>
  );
};
