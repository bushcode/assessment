import React from "react";
import PostCardSkeleton from "@ui/PostCardSkeleton";
import ProfileCardSkeleton from "@ui/ProfileCardSkeleton";

function Loading() {
  return (
    <div className="flex min-h-screen">
      <div className="container flex max-w-[43.75rem] flex-col gap-12 py-8 px-4">
        <section className="flex flex-col gap-y-4">
          <ProfileCardSkeleton />
        </section>

        <section className="space-y-4">
          <h3 className="text-xl text-primary font-bold">Recent</h3>
          <div className="space-y-4">
            <PostCardSkeleton />
            <PostCardSkeleton />
            <PostCardSkeleton />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Loading;
