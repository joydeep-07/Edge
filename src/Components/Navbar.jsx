import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Aos from "aos";
import "aos/dist/aos.css";
import name from "../assets/images/logo.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navItems = ["Home", "Qualification", "Projects", "Experience"];
  const navRef = useRef(null);

  useEffect(() => {
    Aos.init({
      duration: 400,
      easing: "ease-in-out",
      once: true,
    });

    // GSAP animation for navbar shrink
    const ctx = gsap.context(() => {
      gsap.to(navRef.current, {
        width: "75%", // Reduced width
        borderRadius: "50px", // Rounded corners
        margin: "20px auto", // Centered position
        border: "1px solid rgba(200,200,200,0.3)", // Light gray border
        backgroundColor: "rgba(30,30,30,0.4)", // Subtle dark gray shade
        backdropFilter: "blur(8px)", // Smooth glassy blur
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "+=100",
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
      });

      // Slightly reduce logo size
      gsap.to(".navbar-logo", {
        scale: 0.9,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "+=100",
          scrub: true,
        },
      });

      // Reduce navbar height
      gsap.to(navRef.current, {
        height: "60px",
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "+=100",
          scrub: true,
        },
      });
    }, navRef);

    return () => ctx.revert(); // Cleanup GSAP context
  }, []);

  const scrollToSection = (section) => {
    if (section === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const idMap = {
      Projects: "projects",
      Experience: "experience",
      Qualification: "about",
    };

    const element = document.getElementById(idMap[section]);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 
                 bg-transparent border border-transparent backdrop-blur-[2px] 
                 transition-all duration-500"
      style={{ width: "100%" }}
    >
      <div className="max-w-8xl mx-auto flex justify-between items-center h-[70px] px-6 md:px-20">
        {/* Logo */}
        <div
          onClick={scrolltoTop}
          className="flex items-center cursor-pointer navbar-logo"
        >
          <img
            className="h-25 contrast-200 transition-transform duration-300"
            src={name}
            alt="Logo"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-12 text-gray-200 font-medium tracking-wide">
          {navItems.map((item, i) => (
            <li
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 50}
              onClick={() => scrollToSection(item)}
              className="relative group h-7 leading-7 overflow-hidden cursor-pointer select-none"
            >
              {/* Original text */}
              <span className="block text-sm transition-transform duration-500 ease-out group-hover:-translate-y-full group-hover:text-gray-100">
                {item}
              </span>
              {/* Cloned hover text */}
              <span
                className="block text-sm absolute inset-0 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 text-gray-100"
                aria-hidden="true"
              >
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Mobile Links */}
        <ul className="flex md:hidden items-center gap-6 text-gray-200 text-sm font-medium">
          {navItems.map((item, i) => (
            <li
              key={i}
              onClick={() => scrollToSection(item)}
              className="cursor-pointer hover:text-gray-100 transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
