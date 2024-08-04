import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface AnimatedShinyTextProps {
  shimmerWidth?: number;
}

export function AnimatedShinyText({
  className,
  shimmerWidth = 100,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & AnimatedShinyTextProps) {
  return (
    <p
      style={
        {
          "--shimmer-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        // Shimmer effect
        "animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

        // Shimmer gradient
        "bg-gradient-to-r from-transparent via-current via-50%",

        className,
      )}
      {...props}
    />
  );
}
