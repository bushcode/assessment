import PostCardSkeleton from "@ui/PostCardSkeleton";
import UserCardSkeleton from "@ui/UserCardSkeleton";

export default function Loading() {
  return (
    <div className="flex min-h-screen">
      <div className="container flex max-w-[43.75rem] flex-col gap-12 py-8 px-4">
        <section className="flex flex-col gap-y-4">
          <h3 className="text-xl text-primary font-bold">Suggested Posts</h3>
          <PostCardSkeleton />
          <PostCardSkeleton />
        </section>

        <section>
          <p className="text-xl text-primary font-bold mb-4">Who to follow</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UserCardSkeleton />
            <UserCardSkeleton />
            <UserCardSkeleton />
            <UserCardSkeleton />
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl text-primary font-bold">Recent</h3>
          <div className="space-y-4">
            <PostCardSkeleton />
            <PostCardSkeleton />
            <PostCardSkeleton />
            <PostCardSkeleton />
          </div>
        </section>
      </div>
    </div>
  );
}
