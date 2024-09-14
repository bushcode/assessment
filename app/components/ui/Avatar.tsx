import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";
import AvatarImage from "@assets/avatar.png";

const avatarVariants = cva("rounded-full aspect-square object-fit", {
  variants: {
    size: {
      sm: "h-10 w-10",
      lg: "h-32 w-32",
    },
    outline: {
      true: "border-[5px] border-white p-[0.5px]",
      false: "",
    },
    hasLink: {
      true: "hover:opacity-50 transition-opacity duration-300 cursor-pointer",
    },
  },
  defaultVariants: {
    size: "sm",
    outline: false,
  },
});

export type AvatarVariantProps = VariantProps<typeof avatarVariants>;
interface AvatarProps extends AvatarVariantProps {
  className?: string;
}

const Avatar = ({
  className,
  size,
  outline,
  hasLink,
  ...props
}: AvatarProps) => {
  return (
    <Image
      {...props}
      src={AvatarImage}
      alt="profile picture"
      className={avatarVariants({ size, className, outline, hasLink })}
    />
  );
};
export { Avatar, avatarVariants };
