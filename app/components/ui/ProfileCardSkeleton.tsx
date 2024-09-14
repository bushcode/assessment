import React from "react";
import Card from "./Card";

function ProfileCardSkeleton() {
  return (
    <Card className="overflow-visible sm:overflow-hidden">
      <div className="bg-background h-16 rounded-t-2xl"></div>
      <div className="relative px-6 pb-6 pt-0 sm:pt-6">
        <div className="absolute -top-24 sm:-top-8 left-1/2 sm:left-8 transform -translate-x-1/2 sm:transform-none">
          <div className="shadow-sm rounded-full h-32 w-32 border-4 border-white bg-skeleton-gradient shine-box" />
        </div>

        <div className="pt-12 sm:pt-0 sm:pl-40">
          <div className="h-5 bg-skeleton-gradient rounded-lg w-full md:w-3/4 mb-2 shine-box"></div>
          <div className="h-4 bg-skeleton-gradient rounded-lg w-full md:w-2/4 mb-2 shine-box"></div>
          <div className="h-4 bg-skeleton-gradient rounded-lg w-full md:w-1/4 mb-6 shine-box"></div>
          <div className="flex justify-center sm:justify-start mb-4 text-sm gap-x-4">
            <div className="mr-4 flex flex-col sm:justify-start justify-center">
              <div className="h-5 bg-skeleton-gradient rounded-lg w-16 mb-1 shine-box"></div>
              <div className="h-5 bg-skeleton-gradient rounded-lg w-10 mb-1 shine-box"></div>
            </div>
            <div className="mr-4 flex flex-col sm:justify-start justify-center">
              <div className="h-5 bg-skeleton-gradient rounded-lg w-16 mb-1 shine-box"></div>
              <div className="h-5 bg-skeleton-gradient rounded-lg w-10 mb-1 shine-box"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-4 space-x-3 sm:justify-start justify-center">
        <div className="h-5 bg-skeleton-gradient rounded-lg w-20 mb-1 shine-box"></div>
        <div className="h-5 bg-skeleton-gradient rounded-lg w-20 mb-1 shine-box"></div>
      </div>
    </Card>
  );
}

export default ProfileCardSkeleton;
