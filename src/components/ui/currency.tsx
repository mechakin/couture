"use client";

import { cn, formatter } from "@/lib/utils";

type CurrencyProps = {
  value?: string | number;
  className?: string;
};

export default function Currency({ value = 0, className }: CurrencyProps) {
  return (
    <div className={cn("text-lg font-semibold tracking-tight", className)}>
      {formatter.format(Number(value))}
    </div>
  );
}
