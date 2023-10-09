import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
