import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlobalContext } from "../context/GlobalContext";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const cardsRef = useRef([]);
  const headingRef = useRef(null);
  const { homepageData, loading, error } = useContext(GlobalContext);

  // Extract relevant data
  const homeProducts = homepageData?.homeProducts?.products;
  const productDemoHeading = homepageData?.homeProducts?.productDemoHeading;

  useEffect(() => {
    // Guard clause to ensure data is present before animating
    if (loading || error || !homeProducts) return;

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
        }
      );
    }

    // Animate cards on scroll (alternating from left/right)
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      const fromX = index % 2 === 0 ? -50 : 50; // left if even, right if odd
      gsap.fromTo(
        card,
        { opacity: 0, x: fromX },
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
  }, [loading, error, homeProducts]);

  if (loading) return <div>Loading Products...</div>;
  if (error) return <div>Error loading Products data.</div>;
  if (!homeProducts) return <div>No Products found.</div>;

  return (
    <div className="flex flex-col gap-12 min-h-screen">
      <h1
        ref={headingRef}
        className="text-4xl md:text-5xl font-semibold mb-8 text-center"
      >
        Products
      </h1>

      <div className="relative w-full lg:mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-8 lg:gap-12">
        {homeProducts.map((product, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="h-full w-full flex flex-col md:py-1 lg:py-2 justify-between rounded-xl border border-white bg-gray-900 backdrop-blur-lg bg-opacity-40 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-700 cursor-pointer"
          >
            {/* Product Title */}
            <h1 className="text-xl lg:text-2xl flex items-center justify-center font-medium text-center h-[80px] whitespace-pre-line">
              {product.title}
            </h1>

            {/* Product Image */}
            <div className="md:h-[300px] lg:h-[400px]">
              <img
                src={product.image}
                alt={product.image}
                className="w-full h-96 md:h-full object-cover"
              />
            </div>

            {/* Demo Heading */}
            <h1 className="text-xl lg:text-2xl text-center font-medium p-6 text-gray-300">
              {productDemoHeading}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
