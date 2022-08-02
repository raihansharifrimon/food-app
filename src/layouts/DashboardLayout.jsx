import React from "react";
import { Outlet } from "react-router-dom";
import { DashboardNavSidebar, DashboardTopbar } from "../components";

const DashboardLayout = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-between bg-dashboardBg drop-shadow-xl">
      <div className="h-[calc(100%-2rem)] w-[calc(100%-2rem)] flex items-center justify-between bg-white bg-opacity-20 backdrop-blur-lg mx-4 rounded-3xl shadow-lg overflow-hidden">
        <DashboardNavSidebar />
        <div className="flex-1 h-full rounded-3xl bg-white px-4 lg:px-8 py-2 lg:py-4 overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <DashboardTopbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
