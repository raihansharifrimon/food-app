import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import Cu3 from "../../assets/images/cu3.png";
import D1 from "../../assets/images/d1.png";
import Fi4 from "../../assets/images/fi4.png";
import I4 from "../../assets/images/i4.png";
import ProductCard from "../ProductCard";

const products = [
  {
    id: 1,
    title: "Venilla Ice-cream",
    price: "5.25",
    is_favorite: false,
    cart_items: 0,
    offer: "10% Off",
    ratings: 4,
    image: I4,
  },
  {
    id: 2,
    title: "Red Bull",
    price: "6.25",
    is_favorite: false,
    cart_items: 0,
    offer: "DINNAR10",
    ratings: 4,
    image: D1,
  },
  {
    id: 3,
    title: "Prawn Fish",
    price: "15.25",
    is_favorite: false,
    cart_items: 0,
    offer: null,
    ratings: 4,
    image: Cu3,
  },
  {
    id: 4,
    title: "Sea Fish Fry",
    price: "50.05",
    is_favorite: true,
    cart_items: 0,
    offer: null,
    ratings: 4,
    image: Fi4,
  },
];

const DashboardProductSection = ({ heading, highLightWord, route }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-headingColor mb-6 py-2 after:w-14 after:h-1 after:bg-orange-500 after:absolute after:left-0 after:bottom-0 after:rounded-full relative ">
          {heading} <span className="text-orange-500">{highLightWord}</span>
        </h2>

        {route && (
          <Link
            to={route}
            className="text-base text-orange-500 hover:text-orange-600 flex items-center justify-end font-medium"
          >
            View all
            <MdNavigateNext className="text-xl ml-1" />
          </Link>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3 lg:gap-5">
        {products &&
          products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default DashboardProductSection;
