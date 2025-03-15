import React, { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlobalContext } from "../context/GlobalContext";

gsap.registerPlugin(ScrollTrigger);

const HomeClients = () => {
  const headingRef = useRef(null);

  const { clientImages, loading, error } = useContext(GlobalContext);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: -50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.inOut",
        }
      );
    }
  }, []);

  return (
    <>
      <div className="hidden md:block">
        <div className="w-full flex flex-col justify-center items-center mt-12">
          <h1 ref={headingRef} className="text-5xl font-semibold text-center">
            Clients
          </h1>
          <div className="relative flex items-center w-full pt-20 overflow-hidden">
            {/* Sliding container */}
            <div className="flex sm:animate-slide space-x-4 hover:shadow-2xl ">
              {clientImages.concat(clientImages).map((client, index) => (
                <img
                  key={index}
                  src={client.imageUrl}
                  alt={`Client ${index}`}
                  className="h-full w-auto object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="w-full flex flex-col justify-center items-center md:px-0 mt-24">
          <h1
            ref={headingRef}
            className="text-4xl md:text-5xl font-semibold text-center"
          >
            Clients
          </h1>
          <div className="grid grid-cols-1 w-full md:grid-cols-3 xl:grid-cols-4  lg:px-16 gap-8 mt-24 mb-12">
            {clientImages.map((client, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg flex justify-center items-center p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img src={client.imageUrl} alt={`Client ${index}`} className="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeClients;
