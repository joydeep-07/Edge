import React, { useState } from "react";

const Contact = () => {
  // Step 1: Create state for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Step 2: Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Step 3: Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // ✅ Print form data to console
  };

  return (
    <div className="flex flex-col justify-center items-center text-white">
      {/* Header */}
      <div className="w-7xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-0.5 bg-green-500"></div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-green-500">
            Contact
          </h2>
        </div>

        <h1 className="text-5xl lg:text-5xl font-medium mb-12 text-center lg:text-left">
          Let's start a{" "}
          <span className="text-green-500">
            Project <br /> Together
          </span>
        </h1>
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
                className="w-full px-4 py-2 border-b border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500 transition-all duration-300"
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
                className="w-full px-4 py-2 border-b border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500 transition-all duration-300"
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
                className="w-full px-4 py-2 border-b border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500 transition-all duration-300"
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
          <div className="w-full h-[330px] rounded-2xl bg-gray-900/50"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
