import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  MdAddShoppingCart,
  MdOutlineFavorite,
  MdStar,
  MdStarBorder,
} from "react-icons/md";

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(product.is_favorite);
  const [cartItem, setCartItem] = useState(product.cart_items);

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
    <div className="relative w-full p-2 rounded-lg border hover:bg-gray-50 bg-white border-gray-200 hover:border-orange-400 transition-colors overflow-hidden shadow-sm shadow-gray-200/80">
      <motion.img
        whileHover={{ scale: 1.2 }}
        src={product.image}
        className="w-full h-28 drop-shadow-xl sm:h-full sm:aspect-video object-contain mb-2 cursor-pointer"
        alt="product"
      />
      <h5 className="text-sm sm:text-base font-medium text-headingColor truncate mb-1">
        {product.title}
      </h5>
      {/* ratting */}
      <div className="flex items-center justify-start text-orange-500 text-lg mb-2">
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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-3">
        <p className="text-lg sm:text-xl font-semibold text-black">
          <span className="text-orange-400 text-lg">$</span>
          {product.price}
        </p>

        <motion.div
          whileTap={cartItem === 0 ? { scale: .7 } : { scale: 1 }}
          onClick={cartItem === 0 && addToCart}
          className={`${
            cartItem > 0 ? "group lg:hover:w-20" : ""
          } relative w-full lg:mt-0 lg:w-10  h-8 lg:h-10 flex gap-1 items-center justify-center bg-orange-500 py-1 px-0 rounded-full text-white text-2xl outline-none transition-all duration-100 ease-linear  cursor-pointer`}
        >
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
          <MdAddShoppingCart className="hidden lg:block group-hover:hidden" />
          {cartItem > 0 && (
            <span className="hidden lg:flex group-hover:hidden w-6 h-6 font-semibold p-1 rounded-full bg-red-600 border-2 border-white items-center justify-center text-white text-xs sm:absolute -top-2 -right-2">
              {cartItem}x
            </span>
          )}
        </motion.div>
      </div>

      {product.offer && (
        <p className="px-2 sm:px-3 py-1 bg-red-500 text-white absolute top-2 sm:top-4 shadow-md shadow-red-50 left-0 rounded-tr-md rounded-br-md text-xs sm:text-sm">
          {product.offer}
        </p>
      )}
      <motion.button
        onClick={handleFavorite}
        whileTap={{ scale: 0.7 }}
        className="text-xl sm:text-2xl absolute top-2 sm:top-4 right-2 sm:right-4 outline-none"
      >
        <MdOutlineFavorite
          className={
            isFavorite ? "text-red-500" : "text-gray-300 hover:text-gray-400"
          }
        />
      </motion.button>
    </div>
  );
};

export default ProductCard;
