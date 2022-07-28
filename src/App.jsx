import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Dashboard, Home } from "./pages";

export default function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-14 p-8">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/create-item"} element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}
