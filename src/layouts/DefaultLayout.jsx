import React from "react";
import { Header } from "../components";

const DefaultLayout = ({ children }) => {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />
      <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
        {children}
      </main>
    </div>
  );
};

export default DefaultLayout;