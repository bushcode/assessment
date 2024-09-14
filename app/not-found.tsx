import Link from "next/link";
import Error from "@ui/ErrorBoundary";
import { buttonVariants } from "@ui/Button";
import { cn } from "@lib/utils";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center">
      <div className="w-[43.75rem] space-y-3 flex flex-col item-center">
        <Error
          title="Page Not Found"
          description="The page you requested could not be found."
        />
        <Link
          href="/"
          className={cn(buttonVariants({ intent: "outline", size: "default" }))}
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
