import React from "react";
import ScrollVelocity from "../../Reactbits/ScrollVelocity/ScrollVelocity";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
} from "react-icons/si";

const HeroSlider = () => {
  return (
    <div>
      <div className="mt-10 w-full border-t border-b pb-3 border-gray-800 flex justify-center overflow-hidden bg-black py-2 relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />

        <ScrollVelocity
          texts={[
            "Animation Community Development Websites Designing Graphics",
          ]}
          velocity={80}
          parallaxClassName="w-full overflow-hidden"
          scrollerClassName="
      custom-scroll-text 
      text-xs md:text-sm 
      font-medium 
      font-mono 
      text-gray-500 
      tracking-wider 
      whitespace-nowrap
      hover:text-gray-400 
      transition-colors 
      duration-500
    "
          numCopies={18}
          stiffness={180}
        />
      </div>
    </div>
  );
};

export default HeroSlider;
