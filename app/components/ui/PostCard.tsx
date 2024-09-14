import React from "react";
import Link from "next/link";
import PostStats from "@ui/PostStats";
import Card from "./Card";
import { Avatar } from "./Avatar";
import Tag from "./Tag";

interface PostProps {
  post: PostWithUserData;
}

function PostCard({ post }: PostProps) {
  return (
    <Card>
      <div className="p-4 gap-3 grid grid-cols-[auto,1fr]">
        <Link href={`/profile/${post.userId}`}>
          <Avatar size="sm" hasLink={true} />
        </Link>

        <div className="flex flex-col space-y-3 text-wrap sm:text-pretty">
          <div>
            <Link
              href={`/profile/${post.userId}`}
              className="font-bold text-base text-primary no-underline hover:underline transition-all duration-200"
            >
              {post.user?.firstName} {post.user?.lastName}
            </Link>
            <p className="text-xs">@{post.user?.username}</p>
          </div>
          <div>
            <p className="text-sm">{post?.body}</p>
          </div>
          <div className="space-x-2">
            {post?.tags.map((tag) => (
              <Tag key={tag} tagText={tag} />
            ))}
          </div>
        </div>
      </div>
      <PostStats
        likes={post?.reactions.likes}
        views={post?.views}
        shares={post?.reactions.dislikes}
      />
    </Card>
  );
}

export default PostCard;
