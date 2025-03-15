import React, { useRef } from "react";
import {cards} from "../constants/utils";

const ProductsProjects = () => {
  // Create separate refs for the two scrollable containers
  const upperScrollRef = useRef(null);
  const lowerScrollRef = useRef(null);

  // Scroll functions for the upper container
  const scrollLeftUpper = () => {
    upperScrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRightUpper = () => {
    upperScrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  // Scroll functions for the lower container
  const scrollLeftLower = () => {
    lowerScrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRightLower = () => {
    lowerScrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section className="w-screen bg-black text-white py-16 px-4 md:px-8">
      {/* Heading & Subheading */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className=" text-4xl md:text-5xl font-bold uppercase text-[#e4005e]  tracking-wide">
          Products &amp; Projects
        </h2>
        <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed mx-auto">
          USIAC is where creativity and quality come together! We create
          esthetically pleasing statues, sculptures, murals, paintings, wall art
          in a variety of metals and materials including but not limited to
          bronze, brass, copper, aluminum, stone, fiber, glass and more. We work
          closely and creatively with customers and design products with only
          the premium quality metal and materials.
        </p>
      </div>

      <div className="flex flex-col">
        {/* Upper Cards Container */}
        <div className="max-w-5xl mx-auto mt-12 relative overflow-visible">
          {/* Left Arrow */}
          <button
            onClick={scrollLeftUpper}
            className="absolute top-1/2 -translate-y-1/2 left-[-6rem]
              w-10 h-10 md:w-12 md:h-12 rounded-full bg-pink-700 hover:bg-pink-600
              text-black shadow-md flex items-center justify-center
              transition-colors duration-300 z-10 cursor-pointer"
            aria-label="Scroll Left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 md:w-6 md:h-6 scale-x-[-1]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.293 15.293a1 1 0 010-1.414L15.586 10 l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M4 10a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRightUpper}
            className="absolute top-1/2 -translate-y-1/2 right-[-6rem]
              w-10 h-10 md:w-12 md:h-12 rounded-full bg-pink-700 hover:bg-pink-600
              text-black shadow-md flex items-center justify-center
              transition-colors duration-300 z-10 cursor-pointer"
            aria-label="Scroll Right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 md:w-6 md:h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.293 15.293a1 1 0 010-1.414L15.586 10 l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M4 10a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Horizontal Scroll Container */}
          <div
            ref={upperScrollRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth flex space-x-8"
          >
            {cards.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-60 sm:w-80 md:w-80 border border-white rounded-lg bg-black p-2 py-2 text-center"
              >
                <div className="border border-white rounded-lg overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <h3 className="text-pink-700 text-lg md:text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-300 text-sm md:text-normal pb-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Lower Cards Container */}
        <div className="max-w-5xl mx-auto mt-12 relative overflow-visible">
          {/* Left Arrow */}
          <button
            onClick={scrollLeftLower}
            className="absolute top-1/2 -translate-y-1/2 left-[-6rem]
              w-10 h-10 md:w-12 md:h-12 rounded-full bg-pink-700 hover:bg-pink-600
              text-black shadow-md flex items-center justify-center
              transition-colors duration-300 z-10 cursor-pointer"
            aria-label="Scroll Left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 md:w-6 md:h-6 scale-x-[-1]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.293 15.293a1 1 0 010-1.414L15.586 10 l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M4 10a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRightLower}
            className="absolute top-1/2 -translate-y-1/2 right-[-6rem]
              w-10 h-10 md:w-12 md:h-12 rounded-full bg-pink-700 hover:bg-pink-600
              text-black shadow-md flex items-center justify-center
              transition-colors duration-300 z-10 cursor-pointer"
            aria-label="Scroll Right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 md:w-6 md:h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.293 15.293a1 1 0 010-1.414L15.586 10 l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M4 10a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Horizontal Scroll Container */}
          <div
            ref={lowerScrollRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth flex space-x-8"
          >
            {cards.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-60 sm:w-80 md:w-80 border border-white rounded-lg bg-black p-2 py-2 text-center"
              >
                <div className="border border-white rounded-lg overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <h3 className="text-pink-700 text-lg md:text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-300 text-sm md:text-normal pb-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsProjects;
