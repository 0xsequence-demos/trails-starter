import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

// Tailwind-only base styles; color, border, radius, and shadow come from className
const baseButtonClass =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap h-12 px-7 has-[>svg]:px-5 text-base font-medium transition-colors [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50";

type ButtonProps = React.ComponentProps<"button"> & {
  asChild?: boolean;
};

function Button({ className, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp data-slot="button" className={cn(baseButtonClass, className)} {...props} />
  );
}

export { Button };
