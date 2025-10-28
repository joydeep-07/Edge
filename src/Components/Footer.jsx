import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Footer = () => {
   const navigate = useNavigate();
  return (
    <>
      <footer className="bg-black text-gray-300 flex flex-col items-center justify-center pb-8 px-6 space-y-10">
        {/* Call to Action */}

        {/* Bottom Section */}
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between border-t border-gray-800 pt-6">
          <p
            // onClick={() => navigate("/messages")}
            className="text-sm text-gray-400"
          >
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
    </>
  );
};

export default Footer;
