import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlobalContext } from "../context/GlobalContext";

gsap.registerPlugin(ScrollTrigger);

const HomeServices = () => {
  const aboveCardsRef = useRef([]);
  const belowCardsRef = useRef([]);
  const headingRef = useRef(null);

  const { homepageData, loading, error } = useContext(GlobalContext);
  const homeServices = homepageData?.homeServices;

  useEffect(() => {
    // Only animate if data is ready
    if (loading || error || !homepageData) return;

    // Animate heading from top with slight scale
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
          delay: 0.5,
        }
      );
    }

    // Animate "above" cards from left
    aboveCardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          delay: index * 0.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });

    // Animate "below" cards from right
    belowCardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          delay: index * 0.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });
  }, [loading, error, homepageData]);

  if (loading) return <div>Loading Home Services...</div>;
  if (error) return <div>Error loading Home Services data.</div>;
  if (!homeServices) return <div>No Home Services data found.</div>;

  return (
    <div className="relative pt-12 pb-0 flex flex-col gap-12">
      <h1
        ref={headingRef}
        className="text-4xl md:text-5xl font-semibold mb-8 text-center"
      >
        Services &amp; Domains
      </h1>

      <div className="relative mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-12">
        {/* "Above" cards */}
        {homeServices?.services?.map((service, index) => (
          <div
            key={index}
            ref={(el) => (aboveCardsRef.current[index] = el)}
            className="relative flex flex-col text-center gap-4 h-full w-full rounded-xl border border-white bg-gray-900 backdrop-blur-lg bg-opacity-40 shadow-lg px-2 py-8 lg:py-12 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-700 cursor-pointer"
          >
            <div className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 mx-auto">
              <img src={service.image} alt="" className="filter invert" />
            </div>
            <h3 className="text-xl lg:text-2xl px-1 font-bold text-red-600">
              {service.title}
            </h3>
            <p className="text-sm lg:text-md px-6 whitespace-pre-line">
              {service.description}
            </p>
          </div>
        ))}

        {/* "Below" cards */}
        {homeServices?.services_below?.map((services, index) => (
          <div
            key={index}
            ref={(el) => (belowCardsRef.current[index] = el)}
            className="w-full h-full flex flex-col text-left gap-4 rounded-xl border border-white bg-gray-900 backdrop-blur-lg bg-opacity-40 shadow-lg space-y-3 p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-700 cursor-pointer"
          >
            {services.items.map((service, i) => (
              <h6
                key={i}
                className="text-md flex gap-2 items-center whitespace-nowrap"
              >
                {service !== "" && (
                  <img
                    src="/assets/For_Developing/Arrow/next.png"
                    alt=""
                    className="w-3 h-3 invert"
                  />
                )}
                {service}
              </h6>
            ))}
          </div>
        ))}
      </div>

      {/* Decorative Dots */}
      <img
        src="/assets/For_Developing/Background/Dot.png"
        className="absolute left-[20rem] w-10 h-10 mr-52"
      />
      <img
        src="/assets/For_Developing/Background/Dot.png"
        className="absolute left-[60rem] w-20 h-20 mr-52"
      />
    </div>
  );
};

export default HomeServices;
