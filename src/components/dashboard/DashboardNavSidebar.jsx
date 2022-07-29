import React from "react";
import {
  MdDashboardCustomize,
  MdLocalGroceryStore,
  MdReceiptLong,
  MdSettings,
} from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const dashboardMenus = [
  {
    id: 1,
    label: "Home",
    route: "/dashboard",
    icon: <MdDashboardCustomize />,
  },
  {
    id: 2,
    label: "Orders",
    route: "/orders",
    icon: <MdReceiptLong />,
  },
  {
    id: 3,
    label: "Products",
    route: "/products",
    icon: <MdLocalGroceryStore />,
  },
  {
    id: 4,
    label: "Settings",
    route: "/settings",
    icon: <MdSettings />,
  },
];

const DashboardNavSidebar = () => {
  return (
    <div className="h-full w-70 p-3">
      <Link to="/" className="flex flex-col items-center gap-1 my-3">
        <img src={Logo} className="w-8 object-cover" alt="logo" />
        <p className="text-headingColor text-xl font-bold">City</p>
      </Link>

      <div className="mt-8 flex flex-col items-center justify-center gap-3">
        {dashboardMenus &&
          dashboardMenus.map((menu) => (
            <Link
              key={menu.id}
              to={menu.route}
              className="group w-10 h-10 relative flex items-center justify-start gap-1 text-2xl text-gray-600 p-2 rounded-md hover:bg-orange-500 hover:text-white transition-all duration-100 ease-in-out"
            >
              {menu.icon}
              <p className="hidden group-hover:block absolute left-12 top-1/2 -translate-y-1/2 bg-orange-500 rounded-md text-white py-1 px-2 text-sm before:block before:absolute before:w-3 before:h-3 before:bg-orange-500 before:-left-1 before:top-1/2 before:-translate-y-1/2 before:rotate-45 before:-z-10 before:transition-all">
                {menu.label}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default DashboardNavSidebar;
