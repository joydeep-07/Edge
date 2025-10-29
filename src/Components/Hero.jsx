import React from "react";
import { ArrowUp } from "lucide-react";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col justify-center text-white min-h-[700px]  md:pt-20 w-full"
    >
      <div className="w-full max-w-8xl h-full pb-5 mx-auto">
        {/* Header Section */}
        <div className="lg:pt-[2vh] px-4 sm:px-8 md:px-12 lg:px-[70px]">
          <h2 className="text-sm uppercase flex items-center gap-3 w-full">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse flex-shrink-0"></span>
            Hey, it's me Paul
          </h2>

          {/* Main Heading */}
          <h1 className="pt-5 font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            Crafting{" "}
            <span className="text-green-500 block sm:inline mr-0 sm:mr-4">
              purpose driven <br className="hidden sm:block" /> experiences
            </span>{" "}
            that inspire <br className="hidden sm:block" /> & engage.
          </h1>
        </div>

        {/* Description Section with Border Line */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center mt-6 sm:mt-8">
          <div className="hidden sm:block border-b border-gray-700 mx-4 sm:mx-0 sm:ml-[70px] w-full sm:w-2xl flex-grow sm:flex-grow-0"></div>

          <p className="px-4 sm:px-8 md:px-10 py-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl  sm:text-left mx-auto">
            I work with brands globally to build pixel-perfect, engaging, and
            accessible digital <br className="hidden sm:block" />
            experiences that drive results and achieve business goals.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-8 md:px-12 lg:px-[70px] gap-6 sm:gap-0">
          {/* Social Links */}
          <div className="flex flex-wrap gap-3 sm:gap-5 py-2 sm:py-5 w-full sm:w-fit px-2 sm:px-3 group justify-center sm:justify-start">
            {[
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/joydeep-paul-06b37926a",
              },
              { name: "Github", url: "https://github.com/joydeep-07" },
              {
                name: "Instagram",
                url: "https://www.instagram.com/mr.paul_16",
              },
              { name: "Gmail", url: "mailto:joydeeprnp8821@gmail.com" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => window.open(item.url, "_blank")}
                className="flex items-center gap-2 text-white text-[10px] sm:text-xs md:text-sm font-medium uppercase transition-opacity duration-300 hover:opacity-100 group-hover:opacity-50 flex-shrink-0"
              >
                <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 rotate-45 flex-shrink-0" />
                <span>{item.name}</span>
              </button>
            ))}
          </div>

          {/* About Me Button */}
          <div className="w-full sm:w-auto flex justify-center sm:justify-end">
            <button className="px-8 sm:px-10 py-3 sm:py-4 bg-transparent border-2 border-white/30 text-white font-medium tracking-widest rounded-full hover:border-white/70 transition-all duration-700 group relative overflow-hidden w-full sm:w-auto max-w-xs sm:max-w-none">
              {/* Sliding gradient overlay */}
              <span className="absolute inset-0 bg-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-0"></span>

              {/* Text wrapper */}
              <span className="relative w-full sm:w-36 md:w-40 flex items-center justify-center">
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

      <HeroSlider />
    </div>
  );
};

export default Hero;
