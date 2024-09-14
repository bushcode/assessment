import React from "react";
import { cn } from "@lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl border border-card transition-all shadow-sm  overflow-hidden divide-y-thin bg-white font-normal",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
