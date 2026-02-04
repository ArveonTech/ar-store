import { apiRequest } from "@/services/auth/api-request";
import { type ProductsResponse } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

interface QueryFilter {
  limit: number;
  skip: number;
  search: string;
}

interface PropsUseGetUser {
  query: QueryFilter;
  accessToken: string | null;
}

const useGetProducts = ({ query, accessToken }: PropsUseGetUser) => {
  return useQuery<ProductsResponse>({
    queryKey: ["get-products",query],
    retry: 0,
    queryFn: () => {
      return apiRequest(
        "GET",
        "products/search",
        null,
        `q=${query.search}&limit=${query.limit}&skip=${query.skip}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        },
      );
    },
    enabled: !!accessToken,
  });
};

export default useGetProducts;
