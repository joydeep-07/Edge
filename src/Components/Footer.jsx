import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <footer className="bg-black text-gray-300 flex flex-col items-center justify-center pb-6 sm:pb-8 px-4 xs:px-6 space-y-8 sm:space-y-10">
        {/* Bottom Section */}
        <div className="w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between border-t border-gray-800 pt-4 sm:pt-6">
          {/* Copyright Text (visible on all screens) */}
          <p className="text-xs xs:text-sm text-gray-400 text-center sm:text-left mb-3 sm:m-1 order-2 sm:order-1">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>

          {/* Social Icons (hidden on mobile) */}
          <ul className="hidden sm:flex gap-4 xs:gap-5 sm:gap-5 text-base xs:text-lg order-1 sm:order-2">
            {/* Instagram */}
            <li>
              <a
                href="https://www.instagram.com/mr.paul_16"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors duration-300 block p-1"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5 xs:w-6 xs:h-6" />
              </a>
            </li>

            {/* Twitter (X) */}
            <li>
              <a
                href="https://x.com/Paul__here"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-300 block p-1"
                aria-label="Twitter"
              >
                <FaXTwitter className="w-5 h-5 xs:w-6 xs:h-6" />
              </a>
            </li>

            {/* LinkedIn */}
            <li>
              <a
                href="https://www.linkedin.com/in/joydeep-paul-06b37926a"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-300 block p-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5 xs:w-6 xs:h-6" />
              </a>
            </li>

            {/* GitHub */}
            <li>
              <a
                href="https://github.com/joydeep-07"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors duration-300 block p-1"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5 xs:w-6 xs:h-6" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
