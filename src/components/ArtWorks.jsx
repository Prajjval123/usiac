// src/components/ArtWorks.jsx
import React from "react";
import { artcards as cards } from "../constants/utils";

const ArtWorks = () => {
  return (
    <section className="w-screen bg-[#26272B] text-white py-16 px-4 md:px-8">
      {/* Heading & Subheading */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-pink-800 text-4xl md:text-5xl font-bold uppercase">
          Art Works
        </h2>
        <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed mx-auto">
          Check out our online gallery for range of art works created by our
          registered artists. The artworks we create are inspired by culture and
          creativity followed by the passion to provide different interior and
          exterior spaces a majestic look and feel! We work hard to make sure
          that our art speaks for itself and provide our customers with 100%
          satisfaction and peace of mind. Explore our artwork gallery now!
        </p>
      </div>

      <div className="flex flex-col">
        {/* Upper Cards Container */}
        <div className="max-w-6xl mx-auto mt-12 relative overflow-visible">
          {/* Again, four cards in a row */}
          <div className="flex justify-center gap-8">
            {cards.map((item, idx) => (
              <div
                key={idx}
                className="
        border border-white rounded-lg 
         pb-0 text-center
        w-68 bg-[#1E1F21]
      "
              >
                {/* Image with white border */}
                <div className="p-2 mb-2">
                  <div className="border border-white rounded-lg overflow-hidden ">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Card text: white and left-aligned */}
                <ul className="text-left text-white whitespace-nowrap text-sm px-2">
                  <li>Title - {item.title}</li>
                  <li>Artist - {item.artist}</li>
                  <li>Category - {item.Category}</li>
                  <li>Medium - {item.Medium}</li>
                  <li>Dimensions - {item.Dimension}</li>
                  <li>City - </li>
                  <li>Country - </li>
                </ul>

                {/* Pink button with white text */}
                <button className="bg-gradient-to-r from-[#b3004b] to-[#3d0f21]  hover:bg-pink-800 rounded-b-lg text-white w-full py-3 mt-4 uppercase font-md">
                  Enquiry
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Lower Cards Container */}
        <div className="max-w-6xl mx-auto mt-12 relative overflow-visible">
          {/* Again, four cards in a row */}
          <div className="flex justify-center gap-8">
            {cards.map((item, idx) => (
              <div
                key={idx}
                className="
        border border-white rounded-lg bg-[#1E1F21]
         pb-0 text-center
        w-68 
      "
              >
                {/* Image with white border */}
                <div className="p-2 mb-2">
                  <div className="border border-white rounded-lg overflow-hidden ">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Card text: white and left-aligned */}
                <ul className="text-left text-white whitespace-nowrap text-sm px-2">
                  <li>Title - {item.title}</li>
                  <li>Artist - {item.artist}</li>
                  <li>Category - {item.Category}</li>
                  <li>Medium - {item.Medium}</li>
                  <li>Dimensions - {item.Dimension}</li>
                  <li>City - </li>
                  <li>Country - </li>
                </ul>

                {/* Pink button with white text */}
                <button className="bg-gradient-to-r from-[#b3004b] to-[#3d0f21]

  hover:bg-pink-800 rounded-b-lg text-white w-full py-3 mt-4 uppercase font-md">
                  Enquiry
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtWorks;
