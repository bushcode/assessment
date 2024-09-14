import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import { cn } from "@lib/utils";
import "./globals.css";

const robotoFlex = Roboto_Flex({
  weight: ["500", "800"],
  subsets: ["latin"],
  display: "optional",
});

export const metadata: Metadata = {
  title: "Metaversal Frontend App",
  description: "Social feed and user profile app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          robotoFlex.className,
          "antialiased min-h-screen bg-background"
        )}
      >
        {children}
      </body>
    </html>
  );
}
