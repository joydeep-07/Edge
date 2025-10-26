import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar at top */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
};

export default Root;
