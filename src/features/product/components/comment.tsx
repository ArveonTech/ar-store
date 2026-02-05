import type { Review } from "@/types/types";

interface PropsReview {
  review: Review;
}

const CommentsComponent = ({ review }: PropsReview) => {
  return (
    <div className="rounded-lg border p-4 space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-medium">{review?.reviewerName}</span>
        <span className="text-sm text-muted-foreground">
          rating: {review?.rating}
        </span>
      </div>

      <p className="text-sm">{review?.comment}</p>

      <span className="text-xs text-muted-foreground">
        {new Date(review.date).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </span>
    </div>
  );
};

export default CommentsComponent;
