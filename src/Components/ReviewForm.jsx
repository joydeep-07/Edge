import React from 'react'
import SplitText from "../../Reactbits/SplitText/SplitText";

const ReviewForm = () => {
  return (
    <div className="py-10 flex flex-col justify-center items-center border">
      {/* Header */}
      <div className="  w-7xl border">
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
      <form action="">
        <div className="mt-8 w-full max-w-2xl px-4">
          <textarea
            className="w-full h-32 p-4 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"   

            placeholder="Write your review here..."
          ></textarea>
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm