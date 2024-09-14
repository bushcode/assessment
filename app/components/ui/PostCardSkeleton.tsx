import Card from "./Card";

export default function PostCardSkeleton() {
  return (
    <Card>
      <div className="p-4 gap-3 grid grid-cols-[auto,1fr] transition-all">
        <div className="w-12 h-12 rounded-full shine-box"></div>

        <div className="flex flex-col">
          <div className="h-4 bg-skeleton-gradient rounded-lg w-3/4 mb-1 shine-box"></div>
          <div className="h-4 bg-skeleton-gradient rounded-lg w-2/4 shine-box"></div>

          <div>
            <div className="h-4 bg-skeleton-gradient rounded-lg w-full mt-4 mb-1 shine-box"></div>
            <div className="h-4 bg-skeleton-gradient rounded-lg w-3/4 shine-box"></div>
          </div>
          <div className="mt-4 flex space-x-2">
            <div className="h-4 bg-skeleton-gradient rounded-lg w-10 shine-box"></div>
            <div className="h-4 bg-skeleton-gradient rounded-lg w-10 shine-box"></div>
            <div className="h-4 bg-skeleton-gradient rounded-lg w-10 shine-box"></div>
          </div>
        </div>
      </div>
      <div className="p-4 flex space-x-3">
        <div className="h-4 bg-skeleton-gradient rounded-lg w-10 shine-box"></div>
        <div className="h-4 bg-skeleton-gradient rounded-lg w-10 shine-box"></div>
        <div className="h-4 bg-skeleton-gradient rounded-lg w-10 shine-box"></div>
      </div>
    </Card>
  );
}
