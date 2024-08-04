import { cn } from "@/lib/utils";
import { IconType } from "@icons-pack/react-simple-icons";
import { LucideIcon } from "lucide-react";
import React from "react";

export const Contact = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, children, ...props }, ref) => (
  <table ref={ref} className={cn("table-auto", className)} {...props}>
    <tbody>{children}</tbody>
  </table>
));
Contact.displayName = "Contact";

export const ContactEntry = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & {
    icon: LucideIcon | IconType;
    label: string;
  }
>(({ className, icon: Icon, label, children, ...props }, ref) => (
  <tr ref={ref} className={cn("h-8", className)} {...props}>
    <td className="w-0 min-w-fit pr-2">
      <span className="flex flex-row items-center gap-3">
        <Icon size={20} />
        <span className="font-semibold">{label}:</span>{" "}
      </span>
    </td>
    <td>
      <span className="text-muted-foreground">{children}</span>
    </td>
  </tr>
));
ContactEntry.displayName = "ContactRow";
