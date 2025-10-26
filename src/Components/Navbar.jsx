import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Aos from "aos";
import "aos/dist/aos.css";
import name from "../assets/images/logo.png";
import { useNavigate, useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navItems = ["Home", "Expertise", "Projects", "Experience"];
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Click logo → navigate home or scroll smoothly to top
  const handleLogoClick = () => {
    const lenis = window.__lenisInstance;

    if (location.pathname === "/") {
      // already on home → just smooth scroll to top
      if (lenis) lenis.scrollTo(0, { duration: 1.2 });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // navigate to home
      navigate("/");

      // after navigation, start smooth scroll to top (slight delay to allow render)
      setTimeout(() => {
        if (lenis) lenis.scrollTo(0, { duration: 1.2 });
        else window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  useEffect(() => {
    Aos.init({
      duration: 400,
      easing: "ease-in-out",
      once: true,
    });

    // GSAP navbar animation
    const ctx = gsap.context(() => {
      gsap.to(navRef.current, {
        width: "75%",
        borderRadius: "50px",
        margin: "20px auto",
        border: "1px solid rgba(200,200,200,0.3)",
        backgroundColor: "rgba(30,30,30,0.4)",
        backdropFilter: "blur(8px)",
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

    return () => ctx.revert();
  }, []);

  const scrollToSection = (section) => {
    if (section === "Home") {
      const lenis = window.__lenisInstance;
      if (lenis) lenis.scrollTo(0, { duration: 1.2 });
      else window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const idMap = {
      Projects: "projects",
      Expertise: "expertise",
      Qualification: "about",
    };

    const element = document.getElementById(idMap[section]);
    if (element) {
      const lenis = window.__lenisInstance;
      if (lenis) lenis.scrollTo(element, { duration: 1.2 });
      else element.scrollIntoView({ behavior: "smooth" });
    }
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
        {/* ✅ Logo with smooth scroll + route change */}
        <div
          onClick={handleLogoClick}
          className="flex items-center justify-center cursor-pointer navbar-logo"
        >
          <img
            className="h-10 contrast-200 transition-transform duration-300"
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
              <span className="block text-sm transition-transform duration-500 ease-out group-hover:-translate-y-full group-hover:text-gray-100">
                {item}
              </span>
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
