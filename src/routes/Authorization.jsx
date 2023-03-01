import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import Unauthorized from "../components/Unauthorized";
import { useAuth } from "../providers/AuthProvider";

const Authorization = ({ permissions }) => {
  const { user } = useAuth();
  const location = useLocation();
  if (user.userName) {
    const userPermission = user.userPermissions;
    const isAllowed = userPermission.some((allowed) =>
      userPermission.includes(allowed)
    );
    return isAllowed? <Outlet />: <Unauthorized />;
  }
  return <Navigate to="/login" state={{path: location.pathname}} replace/>;
};

export default Authorization;
