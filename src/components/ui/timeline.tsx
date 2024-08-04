import { cn } from "@/lib/utils";
import { GitCommitHorizontal } from "lucide-react";
import * as React from "react";

export const Timeline = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col [&>*]:pb-4", className)}
    {...props}
  >
    {children}
  </div>
));
Timeline.displayName = "Timeline";

export const TimelineEntry = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & { connect?: boolean }
>(({ className, connect = true, ...props }, ref) => (
  <article
    ref={ref}
    className={cn(
      `relative flex gap-5 ${connect && "before:absolute before:left-[11px] before:h-full before:border-l-2 before:border-border before:content-['']"}`,
      className,
    )}
    {...props}
  />
));
TimelineEntry.displayName = "TimelineEntry";

export const TimelineContent = React.forwardRef<
  HTMLTableCellElement,
  React.HTMLAttributes<HTMLTableCellElement>
>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={cn("flex-grow pl-9", className)} {...props}>
    {children}
    <GitCommitHorizontal className="absolute left-0 top-0 bg-background" />
  </div>
));
TimelineContent.displayName = "TimelineContent";

export const TimelinePeriod = React.forwardRef<
  HTMLTableCellElement,
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-nowrap text-[15px] text-muted-foreground", className)}
    {...props}
  />
));
TimelinePeriod.displayName = "TimelinePeriod";
