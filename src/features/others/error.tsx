import { cn } from "@/lib/utils";

interface PropsError {
  classname: React.React.ComponentProps<"div">;
}

const ErrorComponent = ({ classname }: PropsError) => {
  return (
    <div
      className={cn(
        ` flex h-full w-full flex-col items-center justify-center gap-4 text-center`,
        classname,
      )}
    >
      <h2 className="text-xl font-semibold">😵 Something went wrong</h2>

      <p className="text-sm text-muted-foreground">Please try again later.</p>
    </div>
  );
};

export default ErrorComponent;
