import React from "react";
import PostCard from "@ui/PostCard";
import ErrorBoundary from "@ui/ErrorBoundary";
import { fetchTopPosts } from "@lib/data";

export const dynamic = "force-dynamic";

async function SuggestedPosts() {
  const posts = await fetchTopPosts(2);

  if (!posts) {
    return (
      <section className="flex flex-col gap-y-4">
        <h3 className="text-xl text-primary font-bold">Suggested Posts</h3>
        <ErrorBoundary
          title="Error Loading Posts"
          description="We’re so sorry but it’s for the test."
        />
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-y-4">
      <h3 className="text-xl text-primary font-bold">Suggested Posts</h3>
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}

export default SuggestedPosts;
