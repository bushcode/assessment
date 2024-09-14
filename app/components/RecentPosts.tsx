import { fetchPosts } from "@lib/data";
import InfiniteScroll from "@components/InfiniteScroll";
import ErrorBoundary from "@ui/ErrorBoundary";

async function RecentPosts() {
  const posts = await fetchPosts(1);
  if (!posts) {
    return (
      <section className="flex flex-col gap-y-4">
        <h3 className="text-xl text-primary font-bold">Recent Posts</h3>
        <ErrorBoundary
          title="Error Loading Posts"
          description="We’re so sorry but it’s for the test."
        />
      </section>
    );
  }

  return (
    <section className="space-y-4">
      <h3 className="text-xl text-primary font-bold">Recent</h3>
      <InfiniteScroll initialData={posts} />
    </section>
  );
}

export default RecentPosts;
