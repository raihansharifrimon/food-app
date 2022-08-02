import React from "react";
import ProductCard from "../ProductCard";

const DashboardProductSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3 lg:gap-5">
      <div className="">
        <ProductCard />
      </div>
      <div className="">
        <ProductCard />
      </div>
      <div className="">
        <ProductCard />
      </div>
      <div className="">
        <ProductCard />
      </div>
      <div className="">
        <ProductCard />
      </div>
      <div className="">
        <ProductCard />
      </div>
      <div className="">
        <ProductCard />
      </div>
      <div className="">
        <ProductCard />
      </div>
    </div>
  );
};

export default DashboardProductSection;
