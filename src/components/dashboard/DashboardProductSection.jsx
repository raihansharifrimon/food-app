import React from "react";
import ProductCard from "../ProductCard";

const DashboardProductSection = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-headingColor mb-4 py-2 after:w-14 after:h-1 after:bg-orange-500 after:absolute after:left-0 after:bottom-0 after:rounded-full relative ">Popular <span className="text-orange-500">Foods</span></h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3 lg:gap-5">
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardProductSection;
