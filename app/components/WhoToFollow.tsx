import React from "react";
import UserData from "@components/UserData";
import Card from "@ui/Card";
import ErrorBoundary from "@ui/ErrorBoundary";
import { fetchUsersWithMostPosts } from "@lib/data";

async function WhoToFollow() {
  const profiles = await fetchUsersWithMostPosts(4);
  if (!profiles) {
    return (
      <section className="flex flex-col gap-y-4">
        <h3 className="text-xl text-primary font-bold">Who to Follow</h3>
        <ErrorBoundary
          title="Error Loading Posts"
          description="We’re so sorry but it’s for the test."
        />
      </section>
    );
  }
  return (
    <section>
      <p className="text-xl text-primary font-bold mb-4">Who to follow</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {profiles.map((profile) => (
          <Card key={profile.id}>
            <UserData user={profile} />
          </Card>
        ))}
      </div>
    </section>
  );
}

export default WhoToFollow;
