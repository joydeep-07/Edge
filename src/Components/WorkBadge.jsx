import React from "react";
import { useNavigate } from "react-router-dom";

const WorkBadge = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="flex justify-center p-6">
      <div className="bg-gray-900/70 w-full max-w-7xl text-center py-16 rounded-3xl shadow-lg border border-gray-800 flex flex-col items-center justify-center">
        {/* Availability badge */}
        <div className="flex items-center gap-2 bg-green-600/20 px-5 py-2 rounded-full mb-6">
          <span className="h-2 w-2 rounded-full animate-pulse bg-green-500"></span>
          <span className="text-sm">Available to work</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
          Let’s create your <br /> next big idea.
        </h1>

        {/* Contact button */}
        <button
          onClick={handleContactClick}
          className="px-10 mt-5 sm:px-4 py-4 sm:py-4 bg-transparent border-2 border-white/30 text-white font-medium tracking-widest rounded-full hover:border-white/70 transition-all duration-700 group relative overflow-hidden"
        >
          {/* Sliding gradient overlay */}
          <span className="absolute inset-0 bg-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-0"></span>

          {/* Text wrapper */}
          <span className="relative w-36 sm:w-40 flex items-center justify-center">
            {/* Initial text */}
            <span className="opacity-100 group-hover:opacity-0 text-white translate-y-0 group-hover:-translate-y-2 transition-all duration-500 flex items-center space-x-3">
              <span className="text-xs">CONTACT</span>
            </span>

            {/* Hover text */}
            <span className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center space-x-3">
              <span className="text-xs">ME</span>
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default WorkBadge;
