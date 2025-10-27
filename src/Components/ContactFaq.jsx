import React, { useState } from "react";
import SplitText from "../../Reactbits/SplitText/SplitText";
import { faqData } from "../utils/data/Questions";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const ContactFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex justify-center items-start py-16">
      <div className="w-7xl max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* LEFT: Sticky Header */}
        <div className="lg:w-1/2 sticky top-20 pt-15 h-fit self-start">
          {/* Small header line */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-green-500"></div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-green-500">
              Questions
            </h2>
          </div>

          {/* Title */}
          <SplitText
            text="Frequently"
            className="text-5xl lg:text-4xl font-medium text-left leading-[1.1] text-white"
            delay={100}
            duration={0.4}
            ease="power2.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />

          <div className="text-green-500 mt-1 leading-[1.1]">
            <SplitText
              text="Asked Questions"
              className="text-5xl lg:text-4xl font-medium text-left leading-[1.4]"
              delay={100}
              duration={0.4}
              ease="power2.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
            />
          </div>
        </div>

        {/* RIGHT: FAQ List */}
        <div className="lg:w-1.5/2 flex  pt-15 flex-col gap-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-700/20 rounded-2xl bg-gray-700/15 overflow-hidden transition-all duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <h3 className="text-lg md:text-[15px] text-gray-200">
                  {item.question}
                </h3>
                {openIndex === index ? (
                  <IoChevronUp className="text-gray-100 text-sm transition-transform duration-300" />
                ) : (
                  <IoChevronUp className="text-gray-500 rotate-180 text-sm transition-transform ease-in duration-300" />
                )}
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-48 opacity-100 p-6 pt-0"
                    : "max-h-0 opacity-0 p-0"
                }`}
              >
                <p className="text-gray-400 text-lg md:text-[15px] leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactFaq;
