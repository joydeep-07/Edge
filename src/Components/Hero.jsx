import React from 'react'
import { ArrowUp } from "lucide-react";

const Hero = () => {
  return (
    <div className=" flex justify-center text-white min-h-[700px] pt-20">
      <div className="w-8xl h-full">
        <h2 className="pt-20 px-[70px] text-sm uppercase flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#9ef01a] animate-pulse"></span>
          Hey, it’s me Paul
        </h2>
        <h1 className="pt-5 px-[70px] font-medium text-7xl">
          Crafting{" "}
          <span className="text-[#9ef01a] mr-4">
            purpose driven <br /> experiences
          </span>
          that inspire <br /> & engage.
        </h1>

        <div className="flex items-center">
          <div className="border-b border-gray-700  ml-[70px] w-2xl "> </div>
          <p className="p-10 text-gray-300">
            I work with brands globally to build pixel-perfect, engaging, and
            accessible digital <br /> experiences that drive results and achieve
            business goals.
          </p>
        </div>

        <div className="flex justify-between px-[70px]">
          <div className="flex gap-5 py-5 w-fit px-3 group">
            {["LinkedIn", "Github", "Instagram", "Gmail"].map((item) => (
              <button
                key={item}
                className="flex items-center gap-2 text-white text-xs font-medium uppercase transition-opacity duration-300 hover:opacity-100 group-hover:opacity-50"
              >
                <ArrowUp className="w-4 h-4 rotate-45" />
                <span>{item}</span>
              </button>
            ))}
          </div>

          <button className="px-10 sm:px-4 py-4 sm:py-4 bg-transparent border-2 border-white/30 text-white font-medium tracking-widest rounded-full hover:border-white/70 transition-all duration-700 group relative overflow-hidden">
            {/* Sliding gradient overlay */}
            <span className="absolute inset-0 bg-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-0"></span>

            {/* Text wrapper */}
            <span className="relative w-36 sm:w-40 flex items-center justify-center">
              {/* Initial text */}
              <span className="opacity-100 group-hover:opacity-0 text-white translate-y-0 group-hover:-translate-y-2 transition-all duration-500 flex items-center space-x-3">
                <span className="text-xs">ABOUT ME &</span>
              </span>

              {/* Hover text */}
              <span className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center space-x-3">
                <span className="text-xs">MY WORKS</span>
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero