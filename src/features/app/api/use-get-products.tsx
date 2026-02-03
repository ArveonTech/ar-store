import { apiRequest } from "@/services/auth/api-request";
import { type ProductsResponse } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

interface PropsUseGetUser {
  limit: number;
  skip: number;
}

const useGetProducts = ({ limit, skip }: PropsUseGetUser) => {
  return useQuery<ProductsResponse>({
    queryKey: ["get-products"],
    retry: 0,
    queryFn: () => {
      return apiRequest(
        "GET",
        "products",
        null,
        `limit=${limit}&skip=${skip}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        },
      );
    },
  });
};

export default useGetProducts;
