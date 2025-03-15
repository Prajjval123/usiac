// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section className="relative w-full bg-black text-white py-16 px-4 md:px-8 overflow-hidden">
      {/* Background Statue Image (right side, partially transparent) */}
      <img
        src="/path/to/statue.png"
        alt="Statue"
        className="
          hidden lg:block
          absolute top-0 right-0
          h-full
          object-cover
          opacity-30
          pointer-events-none
        "
      />

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12 relative z-10">
        <h2
          className="
            text-[#ff0080]
            text-4xl md:text-5xl
            font-bold
            uppercase
            tracking-wide
          "
        >
          Contact Us
        </h2>
      </div>

      {/* Main 2-Column Layout (Contact Info + Form) */}
      <div
        className="
          relative
          max-w-6xl
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
          z-10
        "
      >
        {/* Left Column: Contact Info & Map */}
        <div className="flex flex-col space-y-8">
          {/* Contact Info Card */}
          <div
            className="
              bg-black
              bg-opacity-90
              transparent
              border
              border-white
              rounded-md
              p-6
            "
          >
            <h3
              className="
                text-white
                text-lg md:text-xl
                font-semibold
                mb-4
                uppercase
              "
            >
              Contact Person - Mr. Arnab Paul
            </h3>
            <ul className="space-y-3 text-sm md:text-base leading-relaxed">
              {/* Single line with pink bullet */}
              <li className="flex items-start">
                <span className="text-[#ff0080] font-bold mr-2 mt-1">•</span>
                <span>
                  C7-A (FF) Indraprastha Estate Sector-30-33,<br />
                  Faridabad, Haryana-121001
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff0080] font-bold mr-2 mt-1">•</span>
                <span>+91-9810014083</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff0080] font-bold mr-2 mt-1">•</span>
                <span>+91-9351844022</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff0080] font-bold mr-2 mt-1">•</span>
                <span>usindiaartculturecenter@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Map Card */}
          <div
            className="
              bg-black
              bg-opacity-90
              border
              border-white
              rounded-md
              p-6
              h-full
            "
          >
            
            {/* Replace this <img> with your actual map embed if desired */}
            <div className="md:w-full h-full">
            <iframe
              title="Google Map"
              className="w-full h-full rounded-lg border"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094245!2d144.9537363153162!3d-37.81720997975196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577a88ef6e3db0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1611659365393!5m2!1sen!2sau"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div
          className="
            bg-black
            bg-opacity-90
            border
            border-white
            rounded-md
            p-6
            flex flex-col
          "
        >
          <h3
            className="
              text-white
              text-lg md:text-xl
              font-semibold
              mb-6
              uppercase
            "
          >
            Get In Touch
          </h3>
          <form className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-1 uppercase"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="
                  w-full
                  bg-black
                  border
                  border-white
                  text-white
                  rounded
                  px-3 py-2
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-1
                  focus:ring-[#ff0080]
                  focus:border-[#ff0080]
                "
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-1 uppercase"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="
                  w-full
                  bg-black
                  border
                  border-white
                  text-white
                  rounded
                  px-3 py-2
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#ff0080]
                  focus:border-[#ff0080]
                "
              />
            </div>

            {/* Contact Number */}
            <div>
              <label
                htmlFor="contact"
                className="block text-sm font-semibold mb-1 uppercase"
              >
                Your Contact No.
              </label>
              <input
                type="text"
                id="contact"
                placeholder="Enter your contact number"
                className="
                  w-full
                  bg-black
                  border
                  border-white
                  text-white
                  rounded
                  px-3 py-2
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#ff0080]
                  focus:border-[#ff0080]
                "
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-1 uppercase"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Type your message here..."
                className="
                  w-full
                  bg-black
                  border
                  border-white
                  text-white
                  rounded
                  px-3 py-2
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#ff0080]
                  focus:border-[#ff0080]
                "
              />
              <p className="text-gray-400 text-xs mt-1">
                Up to 200 words allowed.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="
                w-full
                py-3
                mt-2 
                /*bg-gradient-to-r
                from-[#ff0080]
                to-black*/
                bg-[#ff0080]
                hover:opacity-90
                text-white
                uppercase
                font-bold
                rounded
                transition-all
                duration-300
                cursor-pointer
              "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
