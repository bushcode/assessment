import Card from "./Card";

export default function UserCardSkeleton() {
  return (
    <Card>
      <div className="p-4 gap-3 grid grid-cols-[auto,1fr] items-center transition-all">
        <div className="w-12 h-12 rounded-full shine-box"></div>
        <div className="flex flex-col space-y-1">
          <div className="h-4 bg-skeleton-gradient rounded-lg w-3/4 shine-box"></div>
          <div className="h-4 bg-skeleton-gradient rounded-lg w-2/4 shine-box"></div>
        </div>
      </div>
    </Card>
  );
}
