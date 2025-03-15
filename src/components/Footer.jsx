// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Section: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Follow Us */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-lg font-semibold uppercase">
              Follow us on:
            </h2>
            <ul className="space-y-3">
              {/* Facebook */}
              <li className="flex items-center space-x-3">
                {/* Icon Box */}
                <img
                  src="/assets/For developer/FB.png"
                  alt=""
                  className="w-6 lg:w-6 h-6 lg:h-6 rounded-md"
                />
                <span>Facebook</span>
              </li>
              {/* Instagram */}
              <li className="flex items-center space-x-3">
                <img
                  src="/assets/For developer/Insta.png"
                  alt=""
                  className="w-6 lg:w-6 h-6 lg:h-6 rounded-md"
                />
                <span>Instagram</span>
              </li>
              {/* Pinterest */}
              <li className="flex items-center space-x-3">
              <img
                  src="/assets/Pinterest.png"
                  alt=""
                  className="w-6 lg:w-6 h-6 lg:h-6 rounded-md"
                />
                <span>Pinterest</span>
              </li>
              {/* X (formerly Twitter) */}
              <li className="flex items-center space-x-3">
              <img
                  src="/assets/TWITTER.png"
                  alt=""
                  className="w-6 lg:w-6 h-6 lg:h-6 rounded-md"
                />
                <span>X</span>
              </li>
              {/* LinkedIn */}
              <li className="flex items-center space-x-3">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-[#ff0080] text-white text-sm font-bold">
                  in
                </span>
                <span>LinkedIn</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-lg font-semibold uppercase">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#what-we-do" className="hover:text-[#ff0080]">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#for-artist" className="hover:text-[#ff0080]">
                  For Artist
                </a>
              </li>
              <li>
                <a href="#from-the-founder" className="hover:text-[#ff0080]">
                  From The Founder
                </a>
              </li>
              <li>
                <a href="#privacy-policy" className="hover:text-[#ff0080]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-[#ff0080]">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-lg font-semibold uppercase">
              Newsletter
            </h2>
            <p className="text-sm leading-relaxed">
              Subscribe to be the first to hear about our exclusive offers and
              latest arrivals
            </p>
            <form className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter your e-mail address"
                className="
                  flex-1
                  bg-black
                  border
                  border-[#ff0080]
                  text-white
                  placeholder-gray-400
                  px-3 py-2
                  text-sm
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#ff0080]
                "
              />
              <button
                type="submit"
                className="
                  bg-[#ff0080]
                  hover:bg-pink-700
                  text-white
                  font-semibold
                  uppercase
                  px-4
                  py-2
                  text-sm
                "
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Divider & Copyright */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; Qprya Quatra. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
