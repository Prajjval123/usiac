import React, { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EnquiryPopup from "../components/EnquiryPopup";
import { GlobalContext } from "../context/GlobalContext";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Refs for GSAP
  const headingContainerRef = useRef(null); // container for heading + underline
  const headingTextRef = useRef(null);
  const underlineRef = useRef(null);
  const cardsRef = useRef([]);

  // Access global data
  const { products, loading, error } = useContext(GlobalContext);

  // Animate the underline on hover
  const handleMouseEnter = () => {
    gsap.fromTo(
      underlineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: "center",
        duration: 1.5,
        ease: "power2.out",
      }
    );
  };

  const handleMouseLeave = () => {
    gsap.to(underlineRef.current, {
      scaleX: 0,
      transformOrigin: "center",
      duration: 1.5,
      ease: "power2.inOut",
    });
  };

  useEffect(() => {
    // Guard clause to prevent animations if no data yet
    if (loading || error || !products) return;

    // Timeline for heading + underline
    const tl = gsap.timeline();

    // Fade + slide up heading
    tl.fromTo(
      headingTextRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Stagger cards from bottom
    cardsRef.current.forEach((card, index) => {
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
            start: "top 90%",
          },
        }
      );
    });

    // Animate underline in after heading
    // (But we also do handleMouseEnter on mount to show it initially)
    tl.fromTo(
      underlineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: "center",
        duration: 1.5,
        ease: "power2.out",
      },
      "<0.3" // overlap with the last part of heading animation
    );

    // Show underline initially
    handleMouseEnter();
  }, [loading, error, products]);

  if (loading)
    return (
      <div class="text-center absolute top-[50%] left-[50%]">
        <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-500 mx-auto"></div>
        <h2 class="text-zinc-900 dark:text-white mt-4">Loading...</h2>
      </div>
    );
  if (error) return <h1>Error loading products data.</h1>;
  if (!products) return <h1>No products found.</h1>;

  return (
    <>
      <div className="p-8 md:p-12 lg:p-16 xl:p-20 pb-0 min-h-screen">
        {/* Heading container */}
        <div
          ref={headingContainerRef}
          onMouseLeave={handleMouseLeave}
          className="relative mb-20 text-center p-4"
        >
          <h1
            ref={headingTextRef}
            className="text-4xl md:text-5xl font-semibold"
          >
            Products
          </h1>
          {/* Underline */}
          <div
            ref={underlineRef}
            className="absolute left-0 right-0 mx-auto bottom-0 h-[2px] bg-red-500 scale-x-0 transform origin-center w-full max-w-[220px]"
            style={{ marginTop: "4px" }}
          ></div>
        </div>

        {/* Cards Grid */}
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="w-full flex flex-col justify-between rounded-xl border border-white shadow-lg transform transition-transform duration-300 hover:scale-100 hover:shadow-red-700 hover:shadow-2xl py-2"
            >
              <h1 className="text-xl lg:text-2xl flex items-center justify-center font-medium text-center h-[80px] whitespace-pre-line">
                {product.title}
              </h1>
              <img
                src={product.imageUrl}
                alt={product.image}
                className="h-64 md:h-72 lg:h-96 object-cover"
              />
              <button
                onClick={() => setShowPopup(true)}
                className="text-xl lg:text-2xl cursor-pointer hover:text-red-500 text-center font-medium p-6 text-gray-300"
              >
                Request a free demo
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Enquiry Popup */}
      {showPopup && <EnquiryPopup setShowPopup={setShowPopup} />}
    </>
  );
};

export default Products;
