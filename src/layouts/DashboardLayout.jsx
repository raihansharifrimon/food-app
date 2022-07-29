import React from "react";
import { DashboardNavSidebar, DashboardTopbar } from "../components";

const DashboardLayout = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-between bg-dashboardBg drop-shadow-xl">
      <div className="h-[calc(100%-2rem)] w-[calc(100%-2rem)] flex items-center justify-between bg-white bg-opacity-20 backdrop-blur-lg mx-4 rounded-3xl shadow-lg overflow-hidden">
        <DashboardNavSidebar />
        <div className="flex-1 h-full rounded-3xl bg-white px-4 lg:px-8 py-2 lg:py-4">
          <DashboardTopbar />
          <h1>dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
