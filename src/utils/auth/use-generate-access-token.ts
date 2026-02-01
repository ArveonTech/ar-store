import { apiRequest } from "@/services/auth/api-request";
import { useMutation } from "@tanstack/react-query";

type Props = {
  handleLoading: (args: { value: boolean }) => void;
};

const useGenerateAccessToken = ({ handleLoading }: Props) => {
  return useMutation({
    mutationKey: ["verify-otp-login"],
    retry: 0,
    onMutate: () => {
      handleLoading({ value: true });
    },
    mutationFn: () => {
      return apiRequest("POST", "auth/refresh", null, "", {
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
    },
    onSuccess: () => {
      handleLoading({ value: false });
    },
    onError: () => {
      handleLoading({ value: false });
    },
  });
};

export default useGenerateAccessToken;
