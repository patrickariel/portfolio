import { cn } from "@/lib/utils";
import * as React from "react";

export const Pane = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <article
    ref={ref}
    className={cn("flex flex-col justify-start", className)}
    {...props}
  />
));
Pane.displayName = "Pane";

export const PaneTab = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "max-w-52 rounded-t-xl border-x border-t bg-muted p-2 px-5 font-semibold",
      className,
    )}
    {...props}
  />
));
PaneTab.displayName = "PaneTab";

export const PaneContent = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <article
    ref={ref}
    className={cn(
      "flex flex-col gap-3 rounded-r-xl rounded-bl-xl border p-5",
      className,
    )}
    {...props}
  />
));
PaneContent.displayName = "PaneContent";
