import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const textRef = useRef(null);
  const headingRef = useRef(null);

  const splitTextToSpans = (text) => {
    return text.split("").map((char, i) => (
      <span
        key={i}
        className="inline-block opacity-60 hover:opacity-100 transition-opacity duration-200"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Text letters animation
      const letters = textRef.current.querySelectorAll("span");

      gsap.to(letters, {
        color: "#ffffff",
        opacity: 1,
        y: -5,
        rotationX: 0,
        stagger: 0.015,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 75%",
          end: "bottom 25%",
          scrub: 1.5,
        },
      });

      // Smooth moving gradient shade
      gsap.to(textRef.current, {
        backgroundPosition: "center center",
        duration: 3,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1.5,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className=" relative overflow-hidden">
      {/* Background glow layers */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-50 bg-blue-500/20 rounded-full blur-[160px]"></div>
      </div>

      <div className="relative flex flex-col justify-center items-center gap-16 py-28 px-6 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center">
          <div ref={headingRef} className="opacity-0">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-3">
              About Me
            </h2>
            <div className="w-16 h-0.5 bg-green-500 mx-auto"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full">
          <div
            ref={textRef}
            className="text-xl md:text-2xl text-gray-500 font-light text-center max-w-6xl mx-auto leading-relaxed md:leading-loose p-8  "
          >
            {splitTextToSpans(
              "I'm Joydeep Paul, a passionate developer and designer with over 5+ years of experience in crafting seamless user-centric digital experiences. My expertise spans across modern web design, full-stack development, and interactive user interfaces, with a strong focus on delivering high-quality, scalable, and impactful products. I’ve collaborated with some of the most innovative industry leaders to help bring their visions to life and build top-notch digital solutions that truly make a difference."
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
