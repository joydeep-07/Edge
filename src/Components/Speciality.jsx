import React, { useState } from "react";

const Speciality = () => {
  const [active, setActive] = useState("web");
  const [imageLoaded, setImageLoaded] = useState(false);

  const specialities = {
    web: {
      title: "Web Development",
      desc: "Building fast, secure, and responsive websites using the latest technologies in the MERN stack to deliver seamless digital experiences.",
      img: "https://i.pinimg.com/1200x/ed/39/ca/ed39cac2ba4004dca1765efd804523b5.jpg",
    },
    uiux: {
      title: "UI / UX Design",
      desc: "Designing intuitive and visually engaging user interfaces with a focus on accessibility, usability, and delightful user interactions.",
      img: "https://i.pinimg.com/1200x/00/91/1e/00911e0f8ad3de29711589afb958932a.jpg",
    },
    marketing: {
      title: "Digital Marketing",
      desc: "Creating data-driven marketing campaigns that boost online visibility, engagement, and brand growth through SEO and social media strategies.",
      img: "https://i.pinimg.com/1200x/ce/3f/62/ce3f62e7bdc50c84332bbd2b0c70c8df.jpg",
    },
  };

  return (
    <section className="text-white py-24 flex justify-center relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#9ef01a] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#9ef01a] rounded-full blur-3xl opacity-5"></div>

      <div className="w-full max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-16 relative z-10">
        {/* LEFT SIDE */}
        <div className="flex-1 text-left w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#9ef01a]"></div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[#9ef01a]">
              Speciality
            </h2>
          </div>

          <h1 className="text-5xl lg:text-6xl font-medium mb-12 text-white">
            Areas of <span className="text-[#9ef01a]">Expertise</span>
          </h1>

          <div className="flex flex-col lg:flex-row gap-8 w-full">
            {/* LEFT LIST */}
            <div className="w-full lg:w-2/5 flex flex-col gap-4">
              {Object.keys(specialities).map((key) => {
                const isActive = active === key;
                const { title, desc } = specialities[key];
                return (
                  <div
                    key={key}
                    onClick={() => setActive(key)}
                    className={`group cursor-pointer p-6 rounded-2xl transition-all duration-500 ease-out border-2 ${
                      isActive
                        ? "bg-gray-900/50 border-gray-700 shadow-lg shadow-gray-500/10"
                        : "bg-gray-900/30 border-gray-800 hover:border-gray-700 hover:bg-gray-900/40"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3
                        className={`text-xl font-bold transition-colors ${
                          isActive
                            ? "text-white"
                            : "text-white]"
                        }`}
                      >
                        {title}
                      </h3>
                      <div
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-white shadow-lg shadow-[#9ef01a]/50"
                            : "bg-gray-600 "
                        }`}
                      ></div>
                    </div>

                    <div
                      className={`transition-all duration-700 ease-in-out overflow-hidden ${
                        isActive
                          ? "max-h-32 mt-4 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p
                        className={`text-sm leading-relaxed ${
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
            <div className="w-full h-[355px] lg:w-3/5 rounded-2xl overflow-hidden border-2 border-gray-800 shadow-2xl">
              <div className="bg-gray-900 w-full rounded-2xl overflow-hidden border-2 border-gray-800">
                <div className="aspect-[16/9]">
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
    </section>
  );
};

export default Speciality;
