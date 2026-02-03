import { Navigate } from "react-router-dom";
import type React from "react";

import isTokenCheck from "./is-token-check";

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const accessToken = localStorage.getItem("access-token");

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  if (accessToken && isTokenCheck({ accessToken })) {
    return children;
  }

  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
