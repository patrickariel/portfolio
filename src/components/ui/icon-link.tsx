import { cn } from "@/lib/utils";
import { ExternalLink, type LucideIcon } from "lucide-react";
import React from "react";

export const IconLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { icon?: LucideIcon }
>(({ className, icon: Icon = ExternalLink, children, ...props }, ref) => (
  <a
    ref={ref}
    className={cn("group flex w-fit flex-row items-center gap-2", className)}
    {...props}
  >
    <span className="group-hover:underline">{children}</span>
    <Icon size={15} />
  </a>
));
IconLink.displayName = "IconLink";
