"use client";
import React from "react";
import { LoadingIcon } from "./Icons";

function PostLoading() {
  return (
    <div className="flex justify-center">
      <LoadingIcon size="sm" className="animate-spin h-4 w-4" />
    </div>
  );
}

export default PostLoading;
