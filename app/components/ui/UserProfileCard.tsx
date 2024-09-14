import React from "react";
import Card from "./Card";
import { Avatar } from "@components/ui/Avatar";
import DepartmentTag from "./DepartmentTag";
import { MapPinIcon } from "./Icons";
import { Button } from "./Button";

interface UserProfileCardProps {
  userData: User;
  totalLikes: number;
  postCount: number;
}

function UserProfileCard({
  userData,
  totalLikes,
  postCount,
}: UserProfileCardProps) {
  return (
    <Card className="overflow-visible sm:overflow-hidden">
      <div className="bg-profile-card-gradient h-16 rounded-t-2xl"></div>
      <div className="relative px-6 pb-6 pt-0 sm:pt-6">
        <div className="absolute -top-24 sm:-top-8 left-1/2 sm:left-8 transform -translate-x-1/2 sm:transform-none">
          <Avatar size="lg" outline={true} className="shadow-sm" />
        </div>
        <div className="pt-12 sm:pt-0 sm:pl-40">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl text-primary font-bold mb-2 font-heading">
              {userData?.firstName} {userData?.lastName}
            </h3>
            <div className="flex items-center justify-center sm:justify-start text-sm mb-3">
              <span className="mr-2">@{userData?.username}</span>

              <div className="flex gap-1">
                <MapPinIcon size="sm" className="h-4 w-4" />
                {userData?.address.city}, {userData?.address.country}
              </div>
            </div>
            <div className="mb-6">
              <DepartmentTag size="sm" intent="blue">
                {userData?.company.department}
              </DepartmentTag>
            </div>
            <div className="flex justify-center sm:justify-start mb-4 text-sm gap-x-4">
              <div className="mr-4 flex flex-col sm:justify-start justify-center">
                <span className="font-bold text-2xl text-primary">
                  {postCount}
                </span>
                <span className="text-sm">POSTS</span>
              </div>

              <div className="mr-4 flex flex-col sm:justify-start justify-center">
                <span className="font-bold text-2xl text-primary">
                  {totalLikes}
                </span>
                <span className="text-sm">LIKES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-4 space-x-3 bg-light-profile-card-gradient sm:justify-start justify-center rounded-b-2xl">
        <Button intent="gradient" size="default">
          Follow
        </Button>

        <Button intent="outline" size="default">
          Message
        </Button>
      </div>
    </Card>
  );
}

export default UserProfileCard;
