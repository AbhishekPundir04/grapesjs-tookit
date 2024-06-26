import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Dashboard from "../app/layout/dashboard";

export default function PrivateRouter() {
  const isLoggedIn = localStorage.getItem("ACCESS_TOKEN_CHITRAKOOT");
  console.log("isLoggedIn", isLoggedIn)
  return (
    <>
      {isLoggedIn ? (
        <Dashboard>
          <Outlet />
        </Dashboard>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
