import { apiRequest } from "@/services/auth/api-request";
import { useMutation } from "@tanstack/react-query";
import type { LoginFormType } from "../types";

interface PropsUseLoginWithCredentials {
  formLogin: LoginFormType;
  handleLoading: (value: boolean) => void;
}

const useLoginWithCredentials = ({
  formLogin,
  handleLoading,
}: PropsUseLoginWithCredentials) => {
  return useMutation({
    mutationKey: ["loginWithCredentials"],
    retry: 0,
    onMutate: () => {
      handleLoading(true);
    },
    mutationFn: () => {
      return apiRequest(
        "POST",
        "auth/login",
        {
          username: formLogin.username,
          password: formLogin.password,
          expiresInMins: 1080,
        },
        "",
        {
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        },
      );
    },
    onSuccess: () => {
      handleLoading(false);
    },
    onError: () => {
      handleLoading(false);
    },
  });
};

export default useLoginWithCredentials;
