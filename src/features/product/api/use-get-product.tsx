import { apiRequest } from "@/services/auth/api-request";
import { type Product } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

interface PropsUseGetUser {
  productId?: number;
  accessToken: string | null;
}

const useGetProduct = ({ productId, accessToken }: PropsUseGetUser) => {
  return useQuery<Product>({
    queryKey: ["get-product"],
    retry: 0,
    queryFn: () => {
      return apiRequest("GET", `products/${productId}`, null, "", {
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
    },
    enabled: !!accessToken && typeof productId === "number",
  });
};

export default useGetProduct;
