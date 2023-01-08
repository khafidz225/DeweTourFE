import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRootAdmin = ({ dataLog }) => {
  return (
    <>{dataLog === "admin" && dataLog ? <Outlet /> : <Navigate to="/" />}</>
  );
};

export default PrivateRootAdmin;
