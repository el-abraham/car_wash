import React, { useContext } from "react";
import { RoleContext } from "./ContextProvider";
import { Navigate } from "react-router";

export default function ProtectedRoute({ children, roles }) {
  const { role, auth } = useContext(RoleContext);

  if (!auth) {
    return <Navigate to="/login" />;
  }

  console.log(roles)
  if (!roles.include(role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
}
