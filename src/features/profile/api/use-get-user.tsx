import { apiRequest } from "@/services/auth/api-request";
import { type User } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

interface PropsUseGetUser {
  accessToken: string | null;
}

const useGetUser = ({ accessToken }: PropsUseGetUser) => {
  return useQuery<User>({
    queryKey: ["get-user"],
    retry: 0,
    queryFn: () => {
      return apiRequest("GET", "auth/me", null, "", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
      });
    },
    enabled: !!accessToken,
  });
};

export default useGetUser;
