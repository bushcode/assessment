import React from "react";
import {
  LikeIconWithText,
  ShareIconWithText,
  ViewIconWithText,
} from "@ui/Icons";

interface PostStatsProps {
  likes: number;
  views: number;
  shares: number;
}

function PostStats({ likes, views, shares }: PostStatsProps) {
  return (
    <div className="p-4 flex space-x-6 items-center">
      <LikeIconWithText size="sm" intent="default" value={likes} />
      <ShareIconWithText size="sm" intent="default" value={shares} />
      <ViewIconWithText size="sm" intent="default" value={views} />
    </div>
  );
}

export default PostStats;
