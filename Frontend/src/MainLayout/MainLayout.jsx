import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router";

const MainLayout = () => {
  const location = useLocation();
  const signIn = "/sign-in";
  const signUp = "/sign-up";
  const hideNavbar =
    location.pathname === signIn || location.pathname === signUp;

  console.log(location);
  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
