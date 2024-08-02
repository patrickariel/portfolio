import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { GitCommitHorizontal } from "lucide-react";
import * as React from "react";

export const Timeline = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <table ref={ref} className={cn("table-auto", className)} {...props} />
));
Timeline.displayName = "Timeline";

export const TimelineEntry = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>((props, ref) => <tr ref={ref} {...props} />);
TimelineEntry.displayName = "TimelineEntry";

export const TimelinePoint = React.forwardRef<
  HTMLTableCellElement,
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td ref={ref} className={cn("w-0 min-w-fit pr-7", className)} {...props}>
    <GitCommitHorizontal
      className="mx-auto stroke-muted-foreground"
      size={35}
    />
  </td>
));
TimelinePoint.displayName = "TimelinePoint";

export const TimelineContent = React.forwardRef<
  HTMLTableCellElement,
  React.HTMLAttributes<HTMLTableCellElement>
>(({ children, className, ...props }, ref) => (
  <td ref={ref} className={cn("pr-4", className)} {...props}>
    <p className="font-semibold">{children}</p>
  </td>
));
TimelineContent.displayName = "TimelineContent";

export const TimelinePeriod = React.forwardRef<
  HTMLTableCellElement,
  React.HTMLAttributes<HTMLTableCellElement>
>(({ className, children, ...props }, ref) => (
  <td ref={ref} className={cn("w-0 min-w-fit", className)} {...props}>
    <p className="font-semibold text-muted-foreground">{children}</p>
  </td>
));
TimelinePeriod.displayName = "TimelinePeriod";

export const TimelineSeparator = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>((props, ref) => (
  <tr ref={ref} {...props}>
    <td className="w-0 min-w-fit pr-7">
      <Separator orientation="vertical" className="mx-auto h-5 w-1" />
    </td>
  </tr>
));
TimelineSeparator.displayName = "TimelineSeparator";
