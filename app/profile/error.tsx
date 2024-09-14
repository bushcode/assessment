"use client";
import ErrorBoundary from "@ui/ErrorBoundary";

export default function Error() {
  return (
    <div className="container flex max-w-[43.75rem] flex-col gap-12 py-8 px-4">
      <ErrorBoundary
        title="User not found"
        description="We’re so sorry but it’s for the test."
      />
    </div>
  );
}
