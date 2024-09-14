"use client";
import React, { useEffect, useRef, useState } from "react";
import { useIntersection } from "@mantine/hooks";
import PostCard from "@ui/PostCard";
import ErrorBoundary from "@ui/ErrorBoundary";
import PostLoading from "@ui/PostLoading";
import { fetchPosts, fetchUserPostsById } from "@lib/data";

interface InfiniteScrollProps {
  initialData: PostWithUserData[];
  userId?: number;
}

function InfiniteScroll({ initialData, userId }: InfiniteScrollProps) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<PostWithUserData[]>(initialData);
  const [hasMore, setHasMore] = useState(true);
  const [hasError, setHasError] = useState(false);

  const lastItemRef = useRef<HTMLDivElement>(null);

  const { ref, entry } = useIntersection({
    root: lastItemRef.current,
    threshold: 1,
  });

  async function fetchMorePosts() {
    const nextPage = page + 1;
    let newPosts: PostWithUserData[] = [];
    try {
      if (!userId) {
        newPosts = (await fetchPosts(nextPage)) ?? [];
      } else {
        newPosts = (await fetchUserPostsById(userId, nextPage)) ?? [];
      }
      if (newPosts && newPosts.length > 0) {
        setPage(nextPage);
        setData((prevData) => [...prevData, ...newPosts]);
        setHasError(false);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching more posts:", error);
      setHasMore(false);
      setHasError(true);
    }
  }

  useEffect(() => {
    console.log(entry?.isIntersecting);
    if (entry && entry.isIntersecting) {
      fetchMorePosts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry]);

  return (
    <div className="space-y-4">
      {data.map((post, i) => {
        if (i === data.length - 1) {
          return (
            <div key={post.id} ref={ref}>
              <PostCard post={post} />
            </div>
          );
        }
        return <PostCard key={post.id} post={post} />;
      })}
      {hasMore && entry?.isIntersecting && <PostLoading />}
      {hasError && (
        <ErrorBoundary
          title="Error loading posts"
          description="We’re so sorry but it’s for the test."
        />
      )}
    </div>
  );
}

export default InfiniteScroll;
