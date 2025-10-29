import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import me from "../assets/images/dp.jpg";
import SplitText from "../../Reactbits/SplitText/SplitText";
import ContactFaq from "./ContactFaq";
import { supabase } from "../supabaseClient";
import { toast } from "sonner";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill all fields");
      return;
    }

    const { data, error } = await supabase
      .from("Contacts")
      .insert([{ name, email, message }]);

    if (error) {
      console.error("Supabase error:", error.message);
      toast.error("Something went wrong! Please check the console.");
    } else {
      console.log("Data inserted successfully:", data);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center pt-5 md:pt-30 text-white px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="w-full max-w-7xl">
        <div className="flex items-center gap-3 mb-4 lg:justify-start">
          <div className="w-8 h-0.5 bg-green-500"></div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-green-500">
            Contact
          </h2>
        </div>

        <SplitText
          text="Let's start a"
          className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center lg:text-left leading-[1.1]"
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

        <div className="text-green-500 mt-1 leading-[1.1]">
          <SplitText
            text="Project Together"
            className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center lg:text-left leading-[1.4]"
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
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-6 mt-8 lg:mt-12">
        {/* Left Box - Contact Form */}
        <div className="left w-full lg:w-1/2 rounded-2xl p-4 sm:p-6 lg:p-8">
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
                className="w-full px-4 py-3 sm:py-2 border-b border-gray-700 bg-transparent outline-none placeholder-gray-500 transition-all duration-300 focus:border-green-500"
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
                placeholder="Enter your email"
                className="w-full px-4 py-3 sm:py-2 border-b border-gray-700 bg-transparent outline-none placeholder-gray-500 transition-all duration-300 focus:border-green-500"
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
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-transparent outline-none placeholder-gray-500 transition-all duration-300 focus:border-green-500 resize-vertical min-h-[120px]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 text-white font-medium tracking-widest rounded-full hover:border-white/70 transition-all duration-700 group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-0"></span>
              <span className="relative flex items-center justify-center">
                <span className="opacity-100 group-hover:opacity-0 text-white translate-y-0 group-hover:-translate-y-2 transition-all duration-500 flex items-center space-x-3">
                  <span className="text-xs sm:text-sm">SEND</span>
                </span>
                <span className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center space-x-3">
                  <span className="text-xs sm:text-sm">MESSAGE</span>
                </span>
              </span>
            </button>
          </form>
        </div>

        {/* Right Box */}
        <div className="right w-full lg:w-1/2">
          <div className="w-full h-auto min-h-[330px] rounded-2xl bg-gray-900/50 flex flex-col items-center lg:items-start p-6 space-y-4">
            <div className="flex items-center gap-2 bg-green-600/30 px-4 py-2 rounded-full">
              <span className="h-2 w-2 rounded-full animate-pulse bg-green-500"></span>
              <span className="text-xs font-medium text-white">
                Available to work
              </span>
            </div>

            <div className="border border-gray-700/80 p-3 rounded-full">
              <img
                className="h-20 w-20 sm:h-24 sm:w-24 rounded-full border border-gray-500 object-cover"
                src={me}
                alt="Profile"
              />
            </div>

            <p className="text-gray-200 text-sm text-center lg:text-left">
              My inbox is always open, Whether you have a project or just want
              to say Hi. I would love to hear from you. Feel free to contact me
              and I'll get back to you.
            </p>

            <div className="flex gap-4 mt-2 justify-center lg:justify-start">
              <a
                href="https://www.instagram.com/mr.paul_16"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
              >
                <FaInstagram size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/joydeep-paul-06b37926a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <FaLinkedin size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://github.com/joydeep-07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors duration-300"
              >
                <FaGithub size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="mailto:joydeeprnp8821@gmail.com"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                <HiOutlineMail size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <ContactFaq />
    </div>
  );
};

export default Contact;