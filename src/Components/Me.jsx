import React from "react";
import me from '../assets/images/full.jpg'
const Me = () => {
  return (
    <section className="flex justify-center items-center pb-5 pt-26 bg-black text-white">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-20 px-6 md:px-12">
        {/* IMAGE SIDE */}
        <div className=" flex">
          <div className="relative group">
            <img
              className="h-130 w-100 object-cover rounded-b-full transition-all duration-500 "
              src={me}
              alt="Joydeep Paul"
            />
           
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
            <button
              className="px-8 py-3 border border-[#9ef01a] rounded-full text-sm font-medium
                         hover:bg-[#9ef01a] hover:text-black transition-all duration-300 shadow-[0_0_15px_#9ef01a30]"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Me;
