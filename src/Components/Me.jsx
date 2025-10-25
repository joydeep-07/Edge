import React from "react";
import me from "../assets/images/full.jpg";
import CircularText from "../../Reactbits/CircularText/CircularText";

const Me = () => {
  return (
    <section className="flex justify-center items-center pb-5 pt-26 bg-black text-white">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-20 px-6 md:px-12">
        {/* IMAGE SIDE */}
        <div className="flex relative">
          <div className="relative group">
            <img
              className="h-130 w-100 object-cover rounded-b-full transition-all duration-500"
              src={me}
              alt="Joydeep Paul"
            />

            {/* CIRCULAR TEXT IN BOTTOM-RIGHT */}
            <div className="absolute -bottom-10 -right-10">
              <CircularText
                text="LET'S TALK • LET'S TALK • LET'S TALK • "
                radius={40}
                fontSize={10}
                rotateSpeed={40}
                direction="clockwise"
                textColor="#9ef01a"
              />
            </div>
          </div>
        </div>

        {/* TEXT SIDE */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            A creative <span className="text-[#9ef01a]">developer</span> &
            digital designer
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto md:mx-0">
            I collaborate with brands globally to design impactful,
            mission-focused websites that drive results and achieve business
            goals.
          </p>

          <div>
            <button className="px-10 sm:px-4 py-4 sm:py-4 bg-transparent border-2 border-white/30 text-white font-medium tracking-widest rounded-full hover:border-white/70 transition-all duration-700 group relative overflow-hidden">
              {/* Sliding gradient overlay */}
              <span className="absolute inset-0 bg-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-0"></span>

              {/* Text wrapper */}
              <span className="relative w-36 sm:w-40 flex items-center justify-center">
                {/* Initial text */}
                <span className="opacity-100 group-hover:opacity-0 text-white translate-y-0 group-hover:-translate-y-2 transition-all duration-500 flex items-center space-x-3">
                  <span className="text-xs">RESUME</span>
                </span>

                {/* Hover text */}
                <span className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center space-x-3">
                  <span className="text-xs">DOWNLOAD</span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Me;
