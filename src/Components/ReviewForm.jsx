import React from 'react'
import SplitText from "../../Reactbits/SplitText/SplitText";

const ReviewForm = () => {
  return (
    <div className="py-10 border">
      {/* Header */}
      <div className="  w-7xl">
        <div className="flex items-center gap-3 mb-4 lg:justify-start">
          <div className="w-8 h-0.5 bg-green-500"></div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-green-500">
            Review
          </h2>
        </div>

        <SplitText
          text="Leave your"
          className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center lg:text-left leading-[1.1]"
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

        <div className="text-green-500 mt-1 leading-[1.1]">
          <SplitText
            text=" Review"
            className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center lg:text-left leading-[1.4]"
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
        </div>
      </div>
    </div>
  );
}

export default ReviewForm