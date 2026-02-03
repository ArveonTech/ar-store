import { Skeleton } from "@/components/ui/skeleton";

const ProductSkeleton = () => {
  return (
    <div className="relative max-w-63 overflow-hidden rounded-[15px] transition-all duration-300 max-[400px]:w-[90%] shadow">
      {/* Image */}
      <Skeleton className="h-32 w-full max-[400px]:h-45" />

      <div className="p-5">
        {/* Title */}
        <Skeleton className="mb-5 h-4 w-3/4" />

        {/* Bottom */}
        <div className="flex justify-between items-center">
          <Skeleton className="h-5 w-16" />

          <div className="flex items-center gap-1">
            <Skeleton className="h-4 w-4 rounded" />
            <Skeleton className="h-3 w-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
