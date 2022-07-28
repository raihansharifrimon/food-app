import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  MdDashboardCustomize,
  MdLogout,
  MdShoppingBasket,
} from "react-icons/md";
import { Link } from "react-router-dom";
import Avatar from "../assets/images/avatar.png";
import Logo from "../assets/images/logo.png";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { actionType } from "../contexts/reducer";
import { useStateValue } from "../contexts/StateProvider";
import { app } from "../firebase.config";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [isUserMenus, setIsUserMenus] = useState(false);

  const [{ user }, dispatch] = useStateValue();

  const login = async () => {
    if (!user) {
      const {
        user: { providerData },
      } = await signInWithPopup(firebaseAuth, provider);

      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsUserMenus(!isUserMenus);
    }
  };

  const logout = () => {
    setIsUserMenus(false);
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
    localStorage.clear();
  };

  return (
    <header className="fixed bg-primary z-50 w-screen p-3 px-4  md:p-6 md:px-16">
      {/* desktop & tablet */}
      <div className="hidden lg:flex w-full h-full justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} className="w-10 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
            <li className="px-4 py-2 flex items-center justify-start gap-3 hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base cursor-pointer">
              Home
            </li>
            <li className="px-4 py-2 flex items-center justify-start gap-3 hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base cursor-pointer">
              Menu
            </li>
            <li className="px-4 py-2 flex items-center justify-start gap-3 hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base cursor-pointer">
              About Us
            </li>
            <li className="px-4 py-2 flex items-center justify-start gap-3 hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base cursor-pointer">
              Service
            </li>
          </motion.ul>

          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textcolor text-2xl cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-sm text-white font-semibold">2</p>
            </div>
          </div>

          <div className="relative">
            <motion.img
              src={user ? user.photoURL : Avatar}
              whileTap={{ scale: 0.6 }}
              className="w-10 min-w-[40px] min-h-[40px] shadow-2xl cursor-pointer rounded-full"
              alt="userprofile"
              onClick={login}
            />

            {/* user menus */}
            {isUserMenus && (
              <motion.div
                initial={{ opacity: 0, sacle: 0.6 }}
                animate={{ opacity: 1, sacle: 1 }}
                exit={{ opacity: 0, sacle: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 overflow-hidden"
              >
                {user && user.email === "rimon7577@gmail.com" && (
                  <Link
                    to="/dashboard"
                    className="px-4 py-2 flex items-center justify-start gap-3 hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base cursor-pointer"
                  >
                    Dashboard <MdDashboardCustomize />
                  </Link>
                )}

                <p
                  onClick={logout}
                  className="px-4 py-2 flex items-center justify-start gap-3 hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base cursor-pointer"
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* mobile devices */}
      <div className="flex items-center justify-between lg:hidden w-full h-ful">
        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="text-textcolor text-2xl cursor-pointer" />
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-sm text-white font-semibold">2</p>
          </div>
        </div>

        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} className="w-10 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>

        <div className="flex items-center gap-8">
          <div className="relative">
            <motion.img
              src={user ? user.photoURL : Avatar}
              whileTap={{ scale: 0.6 }}
              className="w-10 min-w-[40px] min-h-[40px] shadow-2xl cursor-pointer rounded-full"
              alt="userprofile"
              onClick={login}
            />

            {/* user menus */}
            {isUserMenus && (
              <motion.div
                initial={{ opacity: 0, sacle: 0.6 }}
                animate={{ opacity: 1, sacle: 1 }}
                exit={{ opacity: 0, sacle: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 overflow-hidden"
              >
                {user && user.email === "rimon7577@gmail.com" && (
                  <Link
                    to="/dashboard"
                    className="px-4 py-2 flex items-center justify-start gap-3 hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base cursor-pointer"
                  >
                    Dashboard <MdDashboardCustomize />
                  </Link>
                )}
                <ul className="flex items-start flex-col justify-center">
                  <li className="px-4 py-2 flex items-center justify-start gap-3 hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base cursor-pointer w-full">
                    Home
                  </li>
                  <li className="px-4 py-2 flex items-center justify-start gap-3 hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base cursor-pointer w-full">
                    Menu
                  </li>
                  <li className="px-4 py-2 flex items-center justify-start gap-3 hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base cursor-pointer w-full">
                    About Us
                  </li>
                  <li className="px-4 py-2 flex items-center justify-start gap-3 hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base cursor-pointer w-full">
                    Service
                  </li>
                </ul>
                <p
                  onClick={logout}
                  className="m-2 p-2 rounded-md flex items-center justify-center gap-3 bg-gray-200 hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base cursor-pointer"
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
