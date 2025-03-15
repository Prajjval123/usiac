import React, { useState, useEffect, useContext, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlobalContext } from "../context/GlobalContext";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const { testimonialsData, loading, error } = useContext(GlobalContext);

  // Refs for GSAP
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const underlineRef = useRef(null);

  const handleMouseLeave = () => {
    gsap.to(underlineRef.current, {
      scaleX: 0,
      transformOrigin: "center",
      duration: 2,
      ease: "power2.inOut",
    });
  };

  useEffect(() => {
    // Only animate if data is present
    if (loading || error || !testimonialsData) return;
    const tl = gsap.timeline();
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
    tl.fromTo(
      underlineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: "center",
        duration: 0.1,
        ease: "power2.out",
      },
      "<0.3" // overlap the last part of heading animation
    );

    // Animate each testimonial card in a stagger
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: card,
          },
        }
      );
    });
  }, [loading, error, testimonialsData]);

  if (loading) return (
    <div class="text-center absolute top-[50%] left-[50%]">
      <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-500 mx-auto"></div>
      <h2 class="text-zinc-900 dark:text-white mt-4">Loading...</h2>
    </div>
  );
  if (error) return <div>Error loading testimonials data.</div>;
  if (!testimonialsData) return <div>No testimonials found.</div>;

  return (
    <div className="text-gray-100 lg:py-16">
      <div className="container mx-auto px-8 lg:px-16 text-center lg:text-left">
        {/* Heading */}
        <h1
        ref={headingRef}
        onMouseLeave={handleMouseLeave}
        className="relative text-4xl md:text-5xl font-semibold mb-10 text-center p-4"
      >
        Testimonials
        <div
            ref={underlineRef}
            className="absolute left-0 right-0 mx-auto bottom-0 h-[2px] bg-red-500 scale-x-0 transform origin-center w-full max-w-[220px]"
            style={{ marginTop: "4px" }}
          ></div>
      </h1>

        {/* Testimonial Cards */}
        <div className="space-y-12">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl duration-300 transform transition-transform hover:scale-105 cursor-pointer"
            >
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-teal-400">
                  {testimonial.name}
                </h2>
                <p className="text-sm text-gray-400">
                  {testimonial.designation}
                </p>
              </div>

              <div className="space-y-4 text-gray-300">
                {testimonial.descriptions.map((description, idx) => (
                  <p key={idx} className="leading-relaxed text-justify">
                    {description}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
