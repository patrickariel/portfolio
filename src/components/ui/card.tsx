import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import * as React from "react";
import { IconType } from "react-icons";

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex w-full min-w-[300px] max-w-4xl flex-col gap-14 rounded-xl bg-card pt-10 text-card-foreground shadow-sm sm:border sm:p-16",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-8", className)} {...props}>
    <Separator className="hidden w-5/6 self-center sm:block" />
    <article className="flex flex-col items-center gap-4 font-serif">
      {children}
    </article>
    <Separator className="hidden w-5/6 self-center sm:block" />
  </div>
));
CardHeader.displayName = "CardHeader";

export const CardProfile = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <article
    ref={ref}
    className={cn(
      "flex flex-col items-center gap-7 sm:mr-12 sm:flex-row sm:justify-start",
      className,
    )}
    {...props}
  />
));
CardProfile.displayName = "CardProfile";

export const CardBio = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <article
    ref={ref}
    className={cn("flex flex-col items-center gap-2 sm:items-start", className)}
    {...props}
  />
));
CardBio.displayName = "CardBio";

export const CardName = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-nowrap font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
CardName.displayName = "CardName";

export const CardRole = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-nowrap text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardRole.displayName = "CardFooter";

export const CardContent = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <article
    ref={ref}
    className={cn("flex flex-col gap-7", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

export const CardTopic = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & { icon: LucideIcon; label: string }
>(({ className, icon: Icon, label, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("flex flex-row items-center gap-4", className)}
    {...props}
  >
    <div className="rounded-full bg-zinc-900/80 p-2">
      <Icon size={30} />
    </div>
    <span className="text-2xl font-bold">{label}</span>
  </h3>
));
CardTopic.displayName = "CardTopic";

export const CardContact = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <table ref={ref} className={cn("table-auto", className)} {...props} />
));
CardContact.displayName = "CardContact";

export const CardContactEntry = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & {
    icon: LucideIcon | IconType;
    label: string;
  }
>(({ className, icon: Icon, label, children, ...props }, ref) => (
  <tr ref={ref} className={cn("h-8", className)} {...props}>
    <td className="w-0 min-w-fit pr-2">
      <span className="flex flex-row gap-3">
        <Icon size={20} />
        <span className="font-semibold">{label}:</span>{" "}
      </span>
    </td>
    <td>
      <span className="text-muted-foreground">{children}</span>
    </td>
  </tr>
));
CardContactEntry.displayName = "CardContactRow";
