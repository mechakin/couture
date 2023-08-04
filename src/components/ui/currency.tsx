"use client";

import { cn, formatter } from "@/lib/utils";
import { useEffect, useState } from "react";

type CurrencyProps = {
  value?: string | number;
  className?: string;
};

export default function Currency({ value = 0, className }: CurrencyProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className={cn("text-lg font-semibold tracking-tight", className)}>
      {formatter.format(Number(value))}
    </div>
  );
}
