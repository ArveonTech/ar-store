type EmptyStateProps = {
  title?: string;
  description?: string;
};

const EmptyComponent = ({
  title = "No data found",
  description = "Try adjusting your search or filters",
}: EmptyStateProps) => {
  return (
    <div className="flex h-64 flex-col items-center justify-center gap-2 text-center">
      <p className="text-lg font-semibold text-muted-foreground">{title}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default EmptyComponent;
