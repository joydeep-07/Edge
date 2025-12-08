import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Aos from "aos";
import "aos/dist/aos.css";
import name from "../assets/images/logo.png";
import { useNavigate, useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navItems = ["Home", "Expertise", "Projects"];
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    const lenis = window.__lenisInstance;

    if (location.pathname === "/") {
      if (lenis) lenis.scrollTo(0, { duration: 1.2 });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
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

    if (window.innerWidth < 768) return;

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
    const lenis = window.__lenisInstance;

    const scrollAction = () => {
      if (section === "Home") {
        if (lenis) lenis.scrollTo(0, { duration: 1.2 });
        else window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const idMap = {
        Projects: "projects",
        Expertise: "expertise",
        Experience: "experience",
      };

      const element = document.getElementById(idMap[section]);
      if (element) {
        if (lenis) lenis.scrollTo(element, { duration: 1.2 });
        else element.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollAction(), 600);
    } else {
      scrollAction();
    }
  };

  const handleContactClick = () => {
    const lenis = window.__lenisInstance;
    navigate("/contact");
    setTimeout(() => {
      if (lenis) lenis.scrollTo(0, { duration: 1 });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const navClass =
    "top-0 left-1/2 transform -translate-x-1/2 z-50 bg-transparent border border-transparent backdrop-blur-[2px] transition-all duration-500";

  return (
    <nav
      ref={navRef}
      className={`${
        window.innerWidth < 768 ? "relative" : "fixed"
      } ${navClass}`}
      style={{ width: "100%" }}
    >
      <div className="max-w-8xl mx-auto flex justify-between items-center h-[70px] px-6 md:px-20">
        {/*Website Logo */}
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

        {/* Nav Links */}
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

          <li
            data-aos="fade-up"
            data-aos-delay={navItems.length * 50}
            onClick={handleContactClick}
            className="relative group h-7 leading-7 overflow-hidden cursor-pointer select-none"
          >
            <span className="block text-sm transition-transform duration-500 ease-out group-hover:-translate-y-full group-hover:text-gray-100">
              Contact
            </span>
            <span
              className="block text-sm absolute inset-0 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 text-gray-100"
              aria-hidden="true"
            >
              Contact
            </span>
          </li>
        </ul>

        <div className="md:hidden"></div>
      </div>
    </nav>
  );
};

export default Navbar;
