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
    <div className="w-full">
      <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 w-full border-t border-b border-gray-800 flex justify-center overflow-hidden bg-black py-1 sm:py-1.5 md:py-2 lg:py-3 relative">
        {/* Responsive fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-l from-black to-transparent z-10" />

        <ScrollVelocity
          texts={[
            "Animation Community Development Websites Designing Graphics",
          ]}
          velocity={60} // Slower for mobile, can be adjusted
          parallaxClassName="w-full overflow-hidden"
          scrollerClassName="
            custom-scroll-text 
            text-[10px] xs:text-xs sm:text-sm md:text-base 
            font-medium 
            font-mono 
            text-gray-500 
            tracking-wide sm:tracking-wider 
            whitespace-nowrap
            hover:text-gray-400 
            transition-colors 
            duration-500
            px-2 sm:px-4
          "
          numCopies={12} // Reduced for mobile, increases responsiveness
          stiffness={150} // Adjusted for smoother mobile performance
        />
      </div>
    </div>
  );
};

export default HeroSlider;
