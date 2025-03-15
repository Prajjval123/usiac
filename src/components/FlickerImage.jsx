import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const FlickerImage = ({top, right, w, h, mr}) => {
  const imageRef = useRef(null);

  useEffect(() => {
    // Create a timeline that fades out, then in, forever
    gsap.to(imageRef.current, {
      opacity: 0,
      duration: 1,
      repeat: -1,    // infinite
      yoyo: true,    // reverse the animation each repeat
      ease: "power2.inOut",
    });
  }, []);

  return (
    <img
      ref={imageRef}
      src="/assets/For_Developing/Background/Dot.png"
      className={`absolute top-[${top}rem] right-[${right}rem] w-[${w}] h-[${h}] mr-[${mr}]`}
    />
  );
};

export default FlickerImage;
