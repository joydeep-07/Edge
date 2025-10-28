import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import me from '../assets/images/dp.jpg'
import SplitText from "../../Reactbits/SplitText/SplitText";
import ContactFaq from "./ContactFaq";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); 
     setFormData({
       name: "",
       email: "",
       message: "",
     });
  };

  return (
    <div className="flex flex-col justify-center items-center pt-30 text-white">
      {/* Header */}
      <div className="w-7xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-0.5 bg-green-500"></div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-green-500">
            Contact
          </h2>
        </div>

        <SplitText
          text="Let's start a"
          className="text-5xl lg:text-5xl font-medium text-center lg:text-left leading-[1.1]" 
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

        {/* Green second line */}
        <div className="text-green-500 mt-1 leading-[1.1]">
          <SplitText
            text="Project Together"
            className="text-5xl lg:text-5xl font-medium text-center lg:text-left leading-[1.4]"
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

      {/* Contact Section */}
      <div className="w-7xl flex items-center gap-6">
        {/* Left Box - Contact Form */}
        <div className="left w-1/2 rounded-2xl p-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-2 border-b border-gray-700 outline-none placeholder-gray-500 transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border-b border-gray-700 outline-none placeholder-gray-500 transition-all duration-300"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="w-full px-4 py-2 rounded-lg border border-gray-700 outline-none placeholder-gray-500 transition-all duration-300"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-10 mt-5 sm:px-4 py-4 sm:py-4 bg-transparent border-2 border-white/30 text-white font-medium tracking-widest rounded-full hover:border-white/70 transition-all duration-700 group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-0"></span>
              <span className="relative w-36 sm:w-40 flex items-center justify-center">
                <span className="opacity-100 group-hover:opacity-0 text-white translate-y-0 group-hover:-translate-y-2 transition-all duration-500 flex items-center space-x-3">
                  <span className="text-xs">SEND</span>
                </span>
                <span className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center space-x-3">
                  <span className="text-xs">MESSAGE</span>
                </span>
              </span>
            </button>
          </form>
        </div>

        {/* Right Box - Decorative / Equal Height */}
        <div className="right w-1/2">
          <div className="w-full h-[330px] rounded-2xl bg-gray-900/50 flex flex-col items-start p-6 space-y-4">
            {/* Batch */}
            <div className="flex items-center gap-2 bg-green-600/30 px-4 py-2 rounded-full">
              <span className="h-2 w-2 rounded-full animate-pulse bg-green-500"></span>
              <span className="text-xs font-medium text-white">
                Available to work
              </span>
            </div>

            {/* Profile Image */}
            <div className="border border-gray-700/80 p-3 rounded-full">
              <img
                className="h-24 w-24 rounded-full border border-gray-500 object-cover"
                src={me}
                alt="Profile"
              />
            </div>

            {/* Description */}
            <p className="text-gray-200 text-sm">
              My inbox is always open, Whether you have a project or just want
              to say Hi. I would love to hear from you. Feel free to contact me
              and I'll get back to you.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors duration-300"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="mailto:example@email.com"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                <HiOutlineMail size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <ContactFaq/>
    </div>
  );
};

export default Contact;
