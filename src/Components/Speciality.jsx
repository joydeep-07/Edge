import React, { useState } from "react";

const Speciality = () => {
  const [active, setActive] = useState("web");
  const [imageLoaded, setImageLoaded] = useState(false);

  const specialities = {
    web: {
      title: "Web Development",
      desc: "Building fast, secure, and responsive websites using the latest technologies in the MERN stack to deliver seamless digital experiences.",
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80",
    },
    uiux: {
      title: "UI / UX Design",
      desc: "Designing intuitive and visually engaging user interfaces with a focus on accessibility, usability, and delightful user interactions.",
      img: "https://images.unsplash.com/photo-1581276879432-15a19d654956?auto=format&fit=crop&w=900&q=80",
    },
    marketing: {
      title: "Digital Marketing",
      desc: "Creating data-driven marketing campaigns that boost online visibility, engagement, and brand growth through SEO and social media strategies.",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
    },
  };

  return (
    <section className=" text-white py-24 flex justify-center relative overflow-hidden">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9ef01a]/5 to-transparent"></div> */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#9ef01a] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#9ef01a] rounded-full blur-3xl opacity-5"></div>

      <div className="w-full max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-16 relative z-10">
        {/* LEFT SIDE */}
        <div className="flex-1 text-left">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#9ef01a]"></div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[#9ef01a]">
              Speciality
            </h2>
          </div>

          <h1 className="text-5xl lg:text-6xl font-medium mb-12  text-white">
            Areas of <span className="text-[#9ef01a]">Expertise</span>
          </h1>

          <div className="flex flex-col gap-4">
            {Object.keys(specialities).map((key) => {
              const isActive = active === key;
              const { title, desc } = specialities[key];
              return (
                <div
                  key={key}
                  onClick={() => setActive(key)}
                  className={`group cursor-pointer p-6 rounded-2xl transition-all duration-500 ease-out border-2 ${
                    isActive
                      ? "bg-gray-900/50 border-gray-800 hover:border-gray-600 hover:bg-gray-800/30 backdrop-blur-sm"
                      : "bg-gray-900/50 border-gray-800 hover:border-gray-600 hover:bg-gray-800/30 backdrop-blur-sm"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3
                      className={`text-xl font-bold transition-colors ${
                        isActive
                          ? "text-white"
                          : "text-white group-hover:text-[#9ef01a]"
                      }`}
                    >
                      {title}
                    </h3>
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-black scale-125"
                          : "bg-gray-500 group-hover:bg-[#9ef01a]"
                      }`}
                    ></div>
                  </div>

                  {/* Smooth expanding description */}
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
        </div>

        
      </div>
    </section>
  );
};

export default Speciality;
