import React from "react";
import { BackIcon } from "./Icons";
import { buttonVariants } from "./Button";
import Link from "next/link";
import { cn } from "@/app/lib/utils";

interface NavbarProps {
  title: string;
  backButton?: boolean;
}
function Navbar({ title, backButton }: NavbarProps) {
  return (
    <header className="w-full bg-white border-b-nav border-b h-14 shadow-light ">
      <div className="container flex justify-center items-center h-full relative">
        {backButton && (
          <Link
            href="/"
            className={cn(
              buttonVariants({ intent: "ghost" }),
              "absolute left-4 top-3 w-8 h-8"
            )}
          >
            <BackIcon size="sm" />
          </Link>
        )}
        <h3 className="text-primary text-xl font-bold">{title}</h3>
      </div>
    </header>
  );
}
export default Navbar;
