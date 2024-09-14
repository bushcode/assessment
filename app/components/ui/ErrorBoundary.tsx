"use client";
import React from "react";
import Card from "@ui/Card";
import { WarningIcon } from "@/app/components/ui/Icons";

interface ErrorProps {
  title: string;
  description: string;
}

function ErrorBoundary({ title, description }: ErrorProps) {
  return (
    <Card>
      <div className="p-4 flex flex-col justify-center items-center gap-y-4">
        <WarningIcon size="lg" className="h-12 w-12" />
        <div className="text-center space-y-3 mb-8">
          <h3 className="text-primary text-lg font-bold">{title}</h3>
          <p className="text-base">{description}</p>
        </div>
      </div>
    </Card>
  );
}

export default ErrorBoundary;
