import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { DashboardLayout, DefaultLayout } from "./layouts";
import { Dashboard, Home } from "./pages";

export default function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route
          path={"/"}
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route
          path={"/dashboard"}
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
