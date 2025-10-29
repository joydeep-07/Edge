import React from "react";
import me from "../assets/images/full.jpg";
import CircularText from "../../Reactbits/CircularText/CircularText";
import { toast } from "sonner";
const Me = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../Resume.pdf";
    link.download = "Joydeep_Paul_Resume.pdf";
    link.click();

    toast.info("Downloading Resume...")
  };

  return (
    <section className="flex justify-center items-center pb-5 pt-26 bg-black text-white">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-20 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* IMAGE SIDE */}
        <div className="flex relative w-full lg:w-auto">
          <div className="relative group mx-auto lg:mx-0">
            <img
              className="h-80 xs:h-96 sm:h-110 md:h-120 lg:h-130 w-70 xs:w-80 sm:w-90 md:w-95 lg:w-100 object-cover rounded-b-full transition-all duration-500"
              src={me}
              alt="Joydeep Paul"
            />

            {/* CIRCULAR TEXT IN BOTTOM-RIGHT */}
            <div className="absolute -bottom-3 xs:-bottom-4 sm:-bottom-5 -right-8 xs:-right-9 sm:-right-10 scale-75 xs:scale-90 sm:scale-100">
              <CircularText
                text="LET'S TALK • LET'S TALK • LET'S TALK • "
                radius={30}
                fontSize={10}
                rotateSpeed={40}
                direction="clockwise"
                textColor="white"
              />
            </div>
          </div>
        </div>

        {/* TEXT SIDE */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left space-y-4 sm:space-y-5 lg:space-y-6 w-full">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight px-2 xs:px-0">
            A creative <span className="text-green-500">developer</span> &
            digital designer
          </h1>

          <p className="text-gray-300 text-sm xs:text-base sm:text-lg max-w-xl mx-auto lg:mx-0 px-4 xs:px-0">
            I collaborate with brands globally to design impactful,
            mission-focused websites that drive results and achieve business
            goals.
          </p>

          <div className="flex justify-center lg:justify-start">
            <button onClick={handleDownload} className="px-8 xs:px-10 sm:px-12 py-3 xs:py-4 bg-transparent border-2 border-white/30 text-white font-medium tracking-widest rounded-full hover:border-white/70 transition-all duration-700 group relative overflow-hidden min-w-32 xs:min-w-36">
              {/* Sliding gradient overlay */}
              <span className="absolute inset-0 bg-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-0"></span>

              {/* Text wrapper */}
              <span className="relative w-full flex items-center justify-center">
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
