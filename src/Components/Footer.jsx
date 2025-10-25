import React, { useState } from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import Contact from "./Contact";
import { RxCross2 } from "react-icons/rx";
const Footer = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <footer className="bg-black text-gray-300 flex flex-col items-center justify-center pb-8 px-6 space-y-10">
        {/* Call to Action */}
        <div className="bg-gray-900/70 w-full max-w-7xl text-center py-16 rounded-3xl shadow-lg border border-gray-800 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 bg-green-600/20 px-5 py-2 rounded-full mb-6">
            <span className="h-2 w-2 rounded-full animate-pulse bg-green-500"></span>
            <span className="text-sm">Available to work</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
            Let’s create your <br /> next big idea.
          </h1>

          <button
            onClick={() => setIsContactOpen(true)}
            className="mt-8 px-8 py-2 rounded-full border border-gray-500 hover:bg-green-600/20 transition-all duration-300 text-white"
          >
            Contact
          </button>
        </div>

        {/* Bottom Section */}
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between border-t border-gray-800 pt-6">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>

          {/* Social Icons */}
          <ul className="flex gap-6 mt-4 md:mt-0 text-lg">
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors duration-300"
              >
                <FaInstagram size={22} />
              </a>
            </li>
            <li>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                <FaXTwitter size={22} />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                <FaLinkedin size={22} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors duration-300"
              >
                <FaGithub size={22} />
              </a>
            </li>
          </ul>
        </div>
      </footer>

      {/* Full-Screen Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center z-50 animate-fadeIn overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={() => setIsContactOpen(false)}
            className="absolute text-xl top-6 right-8 text-gray-400 hover:text-white font-bold z-50 transition-colors duration-300"
          >
            <RxCross2 />
          </button>

          {/* Fullscreen Contact Component */}
          <div className="w-full max-w-7xl px-6 py-10">
            <Contact />
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
