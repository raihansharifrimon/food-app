import React from "react";
import {
  DashboardCategories,
  DashboardHomeBanner,
  DashboardProductSection,
} from "../../components";

const DashboardHome = () => {
  return (
    <div className="grid grid-cols-4 gap-10 py-4">
      <div className="col-span-4 lg:col-span-3">
        <DashboardHomeBanner />
        <DashboardCategories />
        <DashboardProductSection heading={'Popular'} highLightWord={'Dishes'} route={'/products'} />
        <DashboardProductSection heading={'Recent'} highLightWord={'orders'} route={'/products'} />
      </div>
      <div className="col-span-4 lg:col-span-1 bg-blue-400">Rimon</div>
    </div>
  );
};

export default DashboardHome;
