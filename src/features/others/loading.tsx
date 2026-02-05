import { cn } from "@/lib/utils";

const LoadingComponent = ({ classname }: { classname?: string }) => {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-3",
        classname,
      )}
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-muted border-t-black" />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  );
};

export default LoadingComponent;
