import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import name from "../assets/images/logo.png";

const Navbar = () => {
  const navItems = ["Home", "Qualification", "Projects", "Experience"];

  useEffect(() => {
    Aos.init({
      duration: 400,
      easing: "ease-in-out",
      once: true,
    });
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-[2px]">
      <div className="max-w-8xl mx-auto flex justify-between items-center h-[70px] px-6 md:px-20">
        {/* Logo */}
        <div onClick={scrolltoTop} className="flex items-center cursor-pointer">
          <img className="h-25 contrast-200" src={name} alt="Logo" />
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
              {/* original text */}
              <span className="block text-sm transition-transform duration-500 ease-out group-hover:-translate-y-full group-hover:text-gray-100">
                {item}
              </span>
              {/* clone text */}
              <span
                className="block text-sm absolute inset-0 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 text-gray-100"
                aria-hidden="true"
              >
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Mobile simplified version */}
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
