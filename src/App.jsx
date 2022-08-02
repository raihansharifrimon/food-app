import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { DashboardLayout, DefaultLayout } from "./layouts";
import { Home, About } from "./pages";
import { DashboardHome, DashboardProducts} from "./pages/dashboard";

export default function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes>
        {/* Website */}
        <Route path={"/"} element={<DefaultLayout />}>
          <Route path="" element={<Home />} />
          <Route path="about-us" element={<About />} />
        </Route>

        {/* Dashboard */}
        <Route path={"/dashboard"} element={<DashboardLayout />}>
          <Route path="" element={<DashboardHome />} />
          <Route path="products" element={<DashboardProducts />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
