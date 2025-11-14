import React, { useState } from "react";
import ScrollVelocity from "../../Reactbits/ScrollVelocity/ScrollVelocity";
import SplitText from "../../Reactbits/SplitText/SplitText";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
} from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import { FaPenNib } from "react-icons/fa";

const Speciality = () => {
  const [active, setActive] = useState("web");
  const [imageLoaded, setImageLoaded] = useState(false);

  const specialities = {
    web: {
      title: "Web Development",
      desc: "Building fast, secure, and responsive websites using the latest technologies in the MERN stack to deliver seamless digital experiences.",
      img: "https://i.pinimg.com/736x/7b/fd/87/7bfd875e85fbbed980e9df59bcde8579.jpg",
    },
    uiux: {
      title: "UI / UX Design",
      desc: "Designing intuitive and visually engaging user interfaces with a focus on accessibility, usability, and delightful user interactions.",
      img: "https://i.pinimg.com/736x/7b/fd/87/7bfd875e85fbbed980e9df59bcde8579.jpg",
    },
    marketing: {
      title: "Digital Marketing",
      desc: "Creating data-driven marketing campaigns that boost online visibility, engagement, and brand growth through SEO and social media strategies.",
      img: "https://i.pinimg.com/736x/7b/fd/87/7bfd875e85fbbed980e9df59bcde8579.jpg",
    },
  };

  return (
    <section
      id="expertise"
      className="text-white pt-30 flex flex-col justify-center items-center relative overflow-visible"
    >
      {/* Background glow effects */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#9ef01a] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#9ef01a] rounded-full blur-3xl opacity-5"></div>

      {/* Main content */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 relative z-10">
        {/* LEFT SIDE */}
        <div className="flex-1 text-left w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-green-500"></div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-green-500">
              Speciality
            </h2>
          </div>

          <SplitText
            text="Areas of Expertise"
            className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-8 lg:mb-12 text-white text-center lg:text-left leading-[1.1]"
            delay={100}
            duration={0.4}
            ease="power2.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full">
            {/* LEFT LIST */}
            <div className="w-full lg:w-2/5 flex flex-col gap-4">
              {Object.keys(specialities).map((key) => {
                const isActive = active === key;
                const { title, desc } = specialities[key];
                return (
                  <div
                    key={key}
                    onClick={() => setActive(key)}
                    className={`group cursor-pointer p-4 sm:p-6 rounded-2xl transition-all duration-500 ease-out border-[1.5px] ${
                      isActive
                        ? "bg-gray-900/50 border-gray-700 shadow-lg shadow-gray-500/10"
                        : "bg-gray-900/30 border-gray-800 hover:border-gray-700 hover:bg-gray-900/40"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3
                        className={`text-sm sm:text-md flex gap-3 items-center justify-center font-medium transition-colors ${
                          isActive ? "text-white" : "text-gray-300"
                        }`}
                      >
                        <FaPenNib className="text-sm" /> <span>{title}</span>
                      </h3>
                      <div
                        className={`transition-all duration-300 ${
                          isActive ? "shadow-lg rotate-180" : "text-gray-400"
                        }`}
                      >
                        <IoIosArrowDown />
                      </div>
                    </div>

                    <div
                      className={`transition-all duration-700 ease-in-out overflow-hidden ${
                        isActive
                          ? "max-h-32 mt-4 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p
                        className={`text-xs sm:text-sm leading-relaxed ${
                          isActive ? "text-gray-300" : "text-gray-400"
                        }`}
                      >
                        {desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* IMAGE SIDE */}
            <div className="w-full h-[280px] sm:h-[320px] lg:h-[355px] lg:w-3/5 rounded-2xl overflow-hidden border-[1.5px] border-gray-800 shadow-2xl">
              <div className="bg-gray-900 w-full h-full rounded-2xl overflow-hidden">
                <div className="w-full h-full">
                  <img
                    src={specialities[active].img}
                    alt={specialities[active].title}
                    className={`w-full h-full object-cover object-center transition-all duration-700 ease-in-out ${
                      imageLoaded
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ScrollVelocity BELOW the main content, centered */}
      <div className="relative mt-8 lg:mt-10 w-full flex justify-center overflow-hidden bg-black py-4 lg:py-5">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-[150px] lg:w-[300px] bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-[150px] lg:w-[300px] bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <ScrollVelocity
          texts={[
            <span className="flex items-center gap-2 sm:gap-4 whitespace-nowrap">
              <span className="text-gray-400 font-medium flex items-center gap-1 px-3 sm:px-4 py-1 sm:py-2 bg-gray-500/20 rounded-full text-xs sm:text-sm">
                <SiMongodb color="#4DB33D" size={12} className="sm:w-[15px]" />{" "}
                Mongo
              </span>
              <span className="text-gray-400 font-medium flex items-center gap-1 px-3 sm:px-4 py-1 sm:py-2 bg-gray-500/20 rounded-full text-xs sm:text-sm">
                <SiExpress color="yellow" size={12} className="sm:w-[15px]" />{" "}
                Express
              </span>
              <span className="text-gray-400 font-medium flex items-center gap-1 px-3 sm:px-4 py-1 sm:py-2 bg-gray-500/20 rounded-full text-xs sm:text-sm">
                <SiReact color="#61DBFB" size={12} className="sm:w-[15px]" />{" "}
                React
              </span>
              <span className="text-gray-400 font-medium flex items-center gap-1 px-3 sm:px-4 py-1 sm:py-2 bg-gray-500/20 rounded-full text-xs sm:text-sm">
                <SiNodedotjs
                  color="#8CC84B"
                  size={12}
                  className="sm:w-[15px]"
                />{" "}
                Node
              </span>
              <span className="text-gray-400 font-medium flex items-center gap-1 px-3 sm:px-4 py-1 sm:py-2 bg-gray-500/20 rounded-full text-xs sm:text-sm">
                <SiHtml5 color="#E34F26" size={12} className="sm:w-[15px]" />{" "}
                HTML
              </span>
              <span className="text-gray-400 font-medium flex items-center gap-1 px-3 sm:px-4 py-1 sm:py-2 bg-gray-500/20 rounded-full text-xs sm:text-sm">
                <SiCss3 color="#1572B6" size={12} className="sm:w-[15px]" /> CSS
              </span>
              <span className="text-gray-400 font-medium m-1 sm:m-2 flex items-center gap-1 px-3 sm:px-4 py-1 sm:py-2 bg-gray-500/20 rounded-full text-xs sm:text-sm">
                <SiTailwindcss
                  color="#38BDF8"
                  size={12}
                  className="sm:w-[15px]"
                />{" "}
                Tailwind
              </span>
            </span>,
          ]}
          velocity={100}
          parallaxClassName="w-full overflow-hidden"
          scrollerClassName="flex items-center text-xs sm:text-sm lg:text-sm tracking-widest drop-shadow-lg"
          numCopies={10}
          stiffness={200}
        />
      </div>
    </section>
  );
};

export default Speciality;
