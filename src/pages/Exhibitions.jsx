import React, { useState } from "react";
import { events, exhibitons } from "../constants/data";

const Exhibitions = () => {
  const [showVideos, setShowVideos] = useState(true);

  const handleShowVideos = () => {
    setShowVideos(true);
  };

  const handleShowImages = () => {
    setShowVideos(false);
  };

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="max-w-8xl mx-auto px-8 py-12">
        <h1 className="text-5xl font-bold text-center text-[#e4005e] mb-24 uppercase">
          Exhibitions
        </h1>

        <div className="mb-8">
          <div className="flex gap-4 py-2 justify-center ">
            <button
              onClick={handleShowVideos}
              className={`${
                showVideos ? "bg-[#ff0080]" : "bg-gray-600"
              } px-16 py-3 text-white text-md font-semibold rounded-sm cursor-pointer hover:bg-[#e4005e] transition`}
            >
              Videos
            </button>
            <button
              onClick={handleShowImages}
              className={`${
                !showVideos ? "bg-[#ff0080]" : "bg-gray-600"
              } px-16 py-3 text-white text-md font-semibold rounded-sm cursor-pointer hover:bg-[#e4005e] transition`}
            >
              Images
            </button>
          </div>
          <div className="h-[1.5px] bg-[#ff0080] w-full"></div>
        </div>

        {/* For Videos */}
        {showVideos && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-black rounded-xl border border-gray-700 shadow-md mt-4 hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-80 object-cover rounded-t-xl"
                />
                <div className="p-4 h-24 flex flex-col justify-center text-center">
                  {event.title}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* For Images */}
        {!showVideos && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exhibitons.images.map((imageData, index) => (
              <div
                key={index}
                className="bg-black rounded-xl border border-gray-700 shadow-md mt-4 hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
              >
                <img
                  src={imageData.image}
                  alt={imageData.title}
                  className="w-full h-80 object-cover rounded-t-xl"
                />
                <div className="p-4 h-24 flex flex-col justify-center">
                  {imageData.title}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Exhibitions;
