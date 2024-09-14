import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full transition-colors  duration-200 focus-visible:outline-none focus-visible:ring-2",
  {
    variants: {
      intent: {
        outline:
          "font-normal border border-purple-primary hover:bg-light-purple text-purple-primary",
        gradient:
          "bg-button-gradient font-semibold text-white hover:bg-button-hover-gradient",
        ghost: "hover:bg-background hover:text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ intent, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
