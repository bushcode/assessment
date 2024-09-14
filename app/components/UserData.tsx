import React from "react";
import Link from "next/link";
import { Avatar } from "@ui/Avatar";
import { Button } from "@ui/Button";

interface UserDataProps {
  user: User;
}

function UserData({ user }: UserDataProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
          <Link href={`/profile/${user.id}`}>
            <Avatar size="sm" hasLink={true} />
          </Link>
        </div>
        <div>
          <Link
            href={`/profile/${user.id}`}
            className="font-bold text-base text-primary no-underline hover:underline transition-all duration-200 text-wrap"
          >
            {user.firstName} {user.lastName}
          </Link>
          <p className="text-gray-500 text-xs">@{user.username}</p>
        </div>
      </div>
      <Button intent="outline" size="default">
        Follow
      </Button>
    </div>
  );
}

export default UserData;
