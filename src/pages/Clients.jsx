import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlobalContext } from "../context/GlobalContext";

// Sample bullet points data (if you keep it in the same file):
const clientPoints = [
  [
    "Business Standard",
    "Sahara India Life Insurance Co. Ltd",
    "SBI Life Insurance company ltd",
    "Standard Chartered AMC",
    "Invest India Market Solution Private Limited",
    "Bharti AXA Life Insurance Company Ltd",
    "Canara Bank",
    "Citi Bank",
    "First Rand Bank Limited, South Africa",
    "HDFC AMC Limited",
    "HSBC Asset management Pvt Ltd",
  ],
  [
    "ICICI Bank Limited",
    "UTI AMC",
    "ICICI Prudential Life Insurance Co. Ltd.",
    "IDBI Fortis Life Insurance Company",
    "Indian School of Microfinance for women",
    "Investsmart Financial Services Ltd.",
    "Kotak Mahindra Bank Limited",
    "LIC Housing Finance Limited",
    "Life Insurance Council",
    "Met Life India Insurance Company Pvt. Ltd",
    "Motilal Oswal Securities Ltd",
  ],
  [
    "NSE Investor Protection Fund Trust",
    "Prudential Insurance Company of America",
    "Reliance Insurance Company",
    "Reserve Bank of India",
    "SBI Funds management private ltd.",
    "Shriram Life Insurance",
    "Standard Chartered Bank",
    "TATA AMC",
    "Western Union Services India Private Limited",
    "Tata Securities Ltd",
    "State Bank of India",
  ],
];

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
  // Refs for heading + underline
  const headingRef = useRef(null);
  const underlineRef = useRef(null);

  // Refs for client image cards
  const imageCardsRef = useRef([]);

  // Refs for bullet-point containers
  const pointsCardsRef = useRef([]);

  // Access data from GlobalContext
  const { clientImages, loading, error } = useContext(GlobalContext);

  // Animate underline on hover
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
      duration: 2,
      ease: "power2.inOut",
    });
  };

  useEffect(() => {
    // Guard clause to avoid animating if data not ready
    if (loading || error || !clientImages) return;

    // Timeline for heading + underline
    const tl = gsap.timeline();

    // Fade + slide up heading
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
    );

    // Stagger image cards
    imageCardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });

    // Animate underline after heading
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

    // Show underline initially
    handleMouseEnter();

    // Stagger bullet-point containers
    pointsCardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });
  }, [loading, error, clientImages]);

  if (loading)
    return (
      <div class="text-center absolute top-[50%] left-[50%]">
        <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-500 mx-auto"></div>
        <h2 class="text-zinc-900 dark:text-white mt-4">Loading...</h2>
      </div>
    );
  if (error) return <p>Error loading client images.</p>;
  if (!clientImages.length) {
    return <p>No client images found.</p>;
  }

  return (
    <div className="w-full flex flex-col justify-center items-center px-8 md:px-16 my-24">
      {/* Heading */}
      <h1
        ref={headingRef}
        className="relative text-4xl md:text-5xl font-semibold text-center w-full p-4"
        onMouseLeave={handleMouseLeave}
      >
        Clients
        <div
            ref={underlineRef}
            className="absolute left-0 right-0 mx-auto bottom-0 h-[2px] bg-red-500 scale-x-0 transform origin-center w-full max-w-[220px]"
            style={{ marginTop: "4px" }}
          ></div>
      </h1>

      {/* Client Images */}
      <div className="grid grid-cols-1 px-12 sm:grid-cols-3 w-full md:grid-cols-3 lg:grid-cols-4 lg:px-16 gap-8 mt-24 mb-24">
        {clientImages.map((client, index) => (
          <div
            key={index}
            ref={(el) => (imageCardsRef.current[index] = el)}
            className="bg-white shadow-lg rounded-lg flex justify-center items-center p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <img src={client.imageUrl} alt={`Client ${index}`} />
          </div>
        ))}
      </div>

      {/* Bullet-Point Containers */}
      <div className="grid md:grid-cols-2 w-full lg:grid-cols-2 xl:grid-cols-3 lg:px-16 gap-8">
        {clientPoints.map((clientArr, index) => (
          <div
            key={index}
            ref={(el) => (pointsCardsRef.current[index] = el)}
            className="bg-gray-900 backdrop-blur-lg bg-opacity-40 w-full flex flex-col gap-4 p-4 rounded-xl border border-white shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            {clientArr.map((point, pointIndex) => (
              <div key={pointIndex}>
                <ol className="text-sm md:text-base text-gray-300 px-4 space-y-2 text-left">
                  <li className="flex gap-2">
                    <div>-</div> {point}
                  </li>
                </ol>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
