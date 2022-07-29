import { motion } from "framer-motion";
import React from "react";
import { MdOutlineSearch, MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";
import { websiteMenus } from "../../utils/data";

const DashboardTopbar = () => {
  return (
    <div className="grid grid-cols-4 gap-4 py-2">
      <div className="col-span-3 flex items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="hidden lg:flex flex-1 items-center gap-8"
        >
          {websiteMenus &&
            websiteMenus.map((menu) => (
              <Link
                key={menu.id}
                to={menu.route}
                className="py-2 transition-all duration-100 ease-in-out text-textColor text-base cursor-pointer"
              >
                {menu.label}
              </Link>
            ))}
        </motion.div>
        <div className="w-full lg:w-1/2 ml-auto relative">
          <input
            type="text"
            className="w-full outline-none py-2 pl-10 pr-3 bg-gray-100 rounded-md text-textColor text-base placeholder:text-sm"
            placeholder="Jump to..."
          />
          <MdOutlineSearch className="text-2xl text-textColor absolute top-1/2 left-2 pointer-events-none -translate-y-1/2" />
        </div>
      </div>
      <div className="col-span-1 flex items-center justify-end gap-8">
        <div className="relative flex items-center justify-center bg-gray-100 rounded-md p-2">
          <MdShoppingBasket className="text-textcolor text-2xl cursor-pointer" />
          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-sm text-white font-semibold">2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopbar;
