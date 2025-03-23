import React from "react";
import { events } from "../constants/data";

const ArtWorksPage = () => {
  return (
    <div className="min-h-screen bg-black text-white bg-center" style={{ backgroundImage: "url('/assets/bg-image1.png')" }}>
      <div className="max-w-8xl mx-auto px-8 py-12">
      <h1 className="text-5xl font-bold text-center text-[#e4005e] mb-10 uppercase">
          ArtWorks
        </h1>
        {/* Filter Controls */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap items-center gap-4 py-4 px-24 rounded-lg w-full bg-gray-900">
            <select className="p-2 border border-gray-600 bg-black text-white rounded w-48 transition-all duration-300 outline-none focus:border-[#ff0080] hover:border-[#ff0080]">
              <option>Any Category</option>
              <option>SCULPTURE</option>
              <option>PAINTING</option>
              <option>STATUE</option>
              <option>MURAL</option>
              <option>OTHERS</option>
            </select>
            <select className="p-2 border border-gray-600 bg-black text-white rounded w-48 transition-all duration-300 outline-none focus:border-[#ff0080] hover:border-[#ff0080]">
              <option>Any Artists</option>
            </select>
            <select className="p-2 border border-gray-600 bg-black text-white rounded w-48 transition-all duration-300 outline-none focus:border-[#ff0080] hover:border-[#ff0080]">
              <option>Any Medium</option>
            </select>
            <select className="p-2 border border-gray-600 bg-black text-white rounded w-48 transition-all duration-300 outline-none focus:border-[#ff0080] hover:border-[#ff0080]">
              <option>Any Height</option>
            </select>
            <select className="p-2 border border-gray-600 bg-black text-white rounded w-48 transition-all duration-300 outline-none focus:border-[#ff0080] hover:border-[#ff0080]">
              <option>Any Width</option>
            </select>
            <select className="p-2 border border-gray-600 bg-black text-white rounded w-48 transition-all duration-300 outline-none focus:border-[#ff0080] hover:border-[#ff0080]">
              <option>For Sale</option>
            </select>
            <input
              type="text"
              placeholder="Search"
              className="p-2 border border-gray-600 bg-black text-white rounded flex-grow transition-all duration-300 outline-none focus:border-[#ff0080] hover:border-[#ff0080]"
            />
          </div>
        </div>

        {/* Pagination */}
        <nav className="mb-12">
          <ul className="flex items-center justify-center space-x-1">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-400 bg-gray-800 border border-gray-700 rounded-l-lg hover:bg-[#ff0080] hover:text-white transition"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-2 h-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1L1 5l4 4"
                  />
                </svg>
              </a>
            </li>
            {[1, 2, 3, 4, 5, 6, 7, 8, "...", 49, 50].map((page, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-400 bg-gray-800 border border-gray-700 hover:bg-[#ff0080] hover:text-white transition"
                >
                  {page}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-400 bg-gray-800 border border-gray-700 rounded-r-lg hover:bg-[#ff0080] hover:text-white transition"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-2 h-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl shadow-lg mt-4 hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-80 object-cover rounded-t-xl"
              />
              <div className="p-4 h-96 flex flex-col">
                <div className="flex-1 pr-2 relative overflow-hidden hover:overflow-y-auto flex flex-col gap-1 text-sm text-gray-300">
                  <p className="font-semibold text-left">{event.title}</p>
                  <div className="h-[1px] bg-gray-600 mb-4"></div>
                  <p className="flex justify-between">
                    <span className="font-semibold">Artist: </span>
                    {event.artist}
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Category: </span>
                    {event.category}
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Medium: </span>
                    {event.medium}
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Dimensions: </span> {event.dimensions}
                  </p>
                </div>
                <button className="bg-red-500 px-16 self-center text-white text-sm font-semibold rounded-full py-2 mb-8 cursor-pointer hover:bg-red-600 transition">
                  Enquiry
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtWorksPage;
