import React from "react";
import { VariantProps, cva } from "class-variance-authority";

const tagVariants = cva(
  "rounded-full inline-flex items-center justify-center text-base font-bold",
  {
    variants: {
      size: {
        sm: "px-3 py-1.5",
        lg: "px-6 py-3",
      },
      intent: {
        purple: "bg-light-purple text-purple-primary",
        crayola: "bg-light-crayola text-crayola",
        blue: "bg-light-blue text-blue-primary",
        mandarin: "bg-light-mandarin text-mandarin",
        turquoise: "bg-light-turquoise text-turquoise",
      },
    },
    defaultVariants: {
      size: "sm",
      intent: "purple",
    },
  }
);

type tagVariantProps = VariantProps<typeof tagVariants>;

interface DepartmentTagProps extends tagVariantProps {
  children: React.ReactNode;
  className?: string;
}

const DepartmentTag = ({
  className,
  size,
  intent,
  children,
  ...props
}: DepartmentTagProps) => {
  return (
    <span className={tagVariants({ size, className, intent })} {...props}>
      {children}
    </span>
  );
};

export default DepartmentTag;
