import { Navigate } from "react-router-dom";
import type React from "react";

import isTokenCheck from "./is-token-check";

type Props = {
  children: React.ReactNode;
};

const GuestRoute = ({ children }: Props) => {
  const accessToken = localStorage.getItem("access-token");

  if (accessToken && isTokenCheck({ accessToken })) {
    return <Navigate to="/app" replace />;
  }

  return children;
};

export default GuestRoute;
