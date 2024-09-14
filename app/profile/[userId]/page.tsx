import { Suspense } from "react";
import { fetchUserPostsById, fetchUserById, fetchtUserStats } from "@lib/data";
import InfiniteScroll from "@components/InfiniteScroll";
import UserProfileCard from "@ui/UserProfileCard";
import ErrorBoundary from "@ui/ErrorBoundary";
import Loading from "./loading";

export default async function Page({ params }: { params: { userId: string } }) {
  const userId = Number(params.userId);
  const user = await fetchUserById(userId);
  const posts = await fetchUserPostsById(userId, 1);
  const userStats = await fetchtUserStats(userId);

  if (user && !posts) {
    return (
      <div className="space-y-12">
        <section className="mt-4 sm:mt-0">
          <UserProfileCard
            userData={user}
            totalLikes={userStats.totalLikes}
            postCount={userStats.totalPosts}
          />
        </section>
        <section className="flex flex-col gap-y-4">
          <h3 className="text-xl text-primary font-bold">Recent Posts</h3>
          <ErrorBoundary
            title="Error Loading Posts"
            description="We’re so sorry but it’s for the test."
          />
        </section>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <Suspense fallback={<Loading />}>
        <section className="mt-4 sm:mt-0">
          <UserProfileCard
            userData={user}
            totalLikes={userStats.totalLikes}
            postCount={userStats.totalPosts}
          />
        </section>
        <section className="space-y-4">
          <h3 className="text-xl text-primary font-bold">Recent</h3>
          <InfiniteScroll initialData={posts} userId={userId} />
        </section>
      </Suspense>
    </div>
  );
}
