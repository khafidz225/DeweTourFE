import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRootUser = ({ dataLog }) => {
  return (
    <>{dataLog === "user" && dataLog ? <Outlet /> : <Navigate to="/" />}</>
  );
};

export default PrivateRootUser;
