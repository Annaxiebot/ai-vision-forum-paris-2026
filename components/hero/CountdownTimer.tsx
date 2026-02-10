"use client";

import { useState, useEffect } from "react";
import { COUNTDOWN_TARGET } from "@/lib/constants";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/**
 * Countdown timer to May 5, 2026
 * Features flip animation for smooth transitions
 */
export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = COUNTDOWN_TARGET.getTime() - new Date().getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 md:gap-6">
      <TimeUnit value={timeLeft.days} label="Days" />
      <Separator />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <Separator />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <Separator />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-16 w-14 items-center justify-center rounded-lg border border-primary/30 bg-card/80 backdrop-blur-sm md:h-20 md:w-16">
        <span className="text-2xl font-bold text-gradient-primary md:text-3xl">
          {value.toString().padStart(2, "0")}
        </span>
        {/* Flip animation effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      </div>
      <span className="mt-2 text-xs font-medium text-muted-foreground md:text-sm">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <div className="flex flex-col gap-2">
      <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
      <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
    </div>
  );
}
