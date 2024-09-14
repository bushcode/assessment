import { Suspense } from "react";
import Navbar from "@ui/Navbar";
import RecentPosts from "@components/RecentPosts";
import WhoToFollow from "@components/WhoToFollow";
import SuggestedPosts from "@components/SuggestedPosts";
import Loading from "./loading";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar title="Feed" />
      <div className="container flex max-w-[43.75rem] flex-col gap-12 py-8 px-4">
        <Suspense fallback={<Loading />}>
          <SuggestedPosts />
          <WhoToFollow />
          <RecentPosts />
        </Suspense>
      </div>
    </div>
  );
}
