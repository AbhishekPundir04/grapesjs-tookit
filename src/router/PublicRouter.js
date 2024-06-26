import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function PublicRouter() {
  const isLoggedIn = localStorage.getItem("ACCESS_TOKEN_CHITRAKOOT");

  return <> {isLoggedIn ? <Navigate to="/dashboard" /> : <Outlet />}</>;
}
