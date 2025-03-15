import React, { useState, useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import gsap from "gsap";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);

  // Show the button when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Gentle bounce animation
  useEffect(() => {
    if (isVisible && buttonRef.current) {
      // Create an infinite yoyo bounce
      gsap.to(buttonRef.current, {
        y: -8,
        duration: 1.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  }, [isVisible]);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          ref={buttonRef}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
