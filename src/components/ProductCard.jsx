import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  MdAddShoppingCart,
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
  MdRemoveShoppingCart,
  MdStar,
  MdStarBorder,
} from "react-icons/md";
import I4 from "../assets/images/i4.png";

const ProductCard = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [cartItem, setCartItem] = useState(0);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const addToCart = () => {
    setCartItem(cartItem + 1);
  };

  const removeFromCart = () => {
    if (cartItem > 0) {
      setCartItem(cartItem - 1);
    }
  };

  return (
    <div className="relative w-full p-2 rounded-lg border border-gray-200 hover:border-orange-400 transition-colors overflow-hidden shadow-sm shadow-gray-200/80">
      <img
        src={I4}
        className="w-full h-28 sm:h-full sm:aspect-video object-contain mb-2 cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"
        alt="product"
      />
      <div className="">
        {/* ratting */}
        <div className="flex items-center justify-start text-orange-500 text-lg sm:text-xl mb-2">
          <button className="outline-none">
            <MdStar />
          </button>
          <button className="outline-none">
            <MdStar />
          </button>
          <button className="outline-none">
            <MdStar />
          </button>
          <button className="outline-none">
            <MdStar />
          </button>
          <button className="outline-none">
            <MdStarBorder />
          </button>
        </div>

        {/* info */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div className="flex flex-col gap-1 justify-center">
            <h5 className="text-sm sm:text-base font-medium text-headingColor">
              Venilla Ice-cream
            </h5>
            <p className="text-lg sm:text-xl font-semibold text-black">
              <span className="text-orange-400 text-lg">$</span>5.25
            </p>
          </div>

          {/* cart button */}
          {cartItem < 1 ? (
            <motion.button
              whileTap={{ scale: 0.7 }}
              onClick={addToCart}
              className="w-full mt-2 lg:mt-0 lg:w-10 h-8 lg:h-10 flex items-center justify-center bg-orange-500 p-2 rounded-full text-white text-2xl outline-none hover:bg-orange-600"
            >
              <MdAddShoppingCart />
            </motion.button>
          ) : (
            <div className="relative group w-full mt-2 lg:mt-0 lg:w-10 lg:hover:w-20 h-8 lg:h-10 flex gap-1 items-center justify-center bg-orange-500 py-1 px-0 rounded-full text-white text-2xl outline-none transition-all duration-100 ease-linear  cursor-pointer">
              <div className="flex lg:hidden group-hover:flex items-center justify-between gap-1">
                <button
                  onClick={removeFromCart}
                  className="px-1 h-full flex items-center justify-center w-4 select-none outline-none"
                >
                  -
                </button>
                <span className="text-sm h-full bg-white text-textColor px-1 rounded-full flex items-center justify-center select-none">
                  {cartItem}x
                </span>
                <button
                  onClick={addToCart}
                  className="px-1 h-full flex items-center justify-center w-4 select-none outline-none"
                >
                  +
                </button>
              </div>
              <MdRemoveShoppingCart className="hidden lg:block group-hover:hidden" />
              <span className="hidden lg:flex group-hover:hidden w-6 h-6 font-semibold p-1 rounded-full bg-red-600 border-2 border-white items-center justify-center text-white text-xs sm:absolute -top-2 -right-2">
                {cartItem}x
              </span>
            </div>
          )}
        </div>
      </div>

      <p className="px-2 sm:px-3 py-1 bg-red-500 text-white absolute top-2 sm:top-4 shadow-md shadow-red-50 left-0 rounded-tr-md rounded-br-md text-xs sm:text-sm">
        15% Off
      </p>
      <motion.button
        onClick={handleFavorite}
        whileTap={{ scale: 0.8 }}
        className="text-xl sm:text-2xl absolute top-2 sm:top-4 right-2 sm:right-4 outline-none"
      >
        {isFavorite ? (
          <MdOutlineFavorite className="text-red-500" />
        ) : (
          <MdOutlineFavoriteBorder className="text-gray-500" />
        )}
      </motion.button>
    </div>
  );
};

export default ProductCard;
