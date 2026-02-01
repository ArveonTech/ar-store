import { Navigate } from "react-router-dom";
import type React from "react";
import useGenerateAccessToken from "./use-generate-access-token";
import { useEffect, useState } from "react";
import isTokenCheck from "./is-token-check";

type Props = {
  children: React.ReactNode;
};

const GuestRoute = ({ children }: Props) => {
  const accessToken = localStorage.getItem("access-token");
  const [isLoadingGenerateAccessToken, setIsLoadingGenerateAccessToken] =
    useState<boolean>(false);

  const handleLoadingGenerateAccessToken = ({
    value,
  }: {
    value: boolean;
  }): void => {
    setIsLoadingGenerateAccessToken(value);
  };

  const {
    isError: isErrorGenerateAccessToken,
    error: errorGenerateAccessToken,
    data: dataGenerateAccessToken,
    mutate: mutateGenerateAccessToken,
  } = useGenerateAccessToken({
    handleLoading: handleLoadingGenerateAccessToken,
  });

  useEffect(() => {
    if (!accessToken) {
      mutateGenerateAccessToken();
    }
  }, [accessToken, mutateGenerateAccessToken]);

  if (accessToken && isTokenCheck({ accessToken })) {
    return <Navigate to="/app" replace />;
  }

  if (isLoadingGenerateAccessToken) return null;

  if (isErrorGenerateAccessToken) return children;

  // localStorage.setItem("access-token", data?.tokens?.accessToken);
  // if (data) return <Navigate to="/dashboard" replace />;

  return children;
};

export default GuestRoute;
