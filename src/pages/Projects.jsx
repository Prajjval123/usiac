import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlobalContext } from "../context/GlobalContext";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const cardsRef = useRef([]);
  const headingRef = useRef(null);
  const underlineRef = useRef(null);

  // Access data from GlobalContext
  const { projectData, loading, error } = useContext(GlobalContext);

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
    // Guard clause to avoid animating if data isn't ready
    if (loading || error || !projectData) return;

    // Timeline for heading + underline
    const tl = gsap.timeline();

    // Fade + slide up heading
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Stagger cards
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: (index + 2) * 0.2,
          ease: "power3.out",
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
  }, [loading, error, projectData]);

  if (loading) return (
    <div class="text-center absolute top-[50%] left-[50%]">
      <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-500 mx-auto"></div>
      <h2 class="text-zinc-900 dark:text-white mt-4">Loading...</h2>
    </div>
  );
  if (error) return <h1>Error loading Projects data.</h1>;
  if (!projectData) return <h1>No Projects found.</h1>;

  return (
    <div className="p-4 lg:p-16 min-h-screen pb-0">
      {/* Heading */}
      <h1
        ref={headingRef}
        onMouseLeave={handleMouseLeave}
        className="relative text-4xl md:text-5xl font-semibold mb-10 text-center p-4"
      >
        Projects
        <div
            ref={underlineRef}
            className="absolute left-0 right-0 mx-auto bottom-0 h-[2px] bg-red-500 scale-x-0 transform origin-center w-full max-w-[220px]"
            style={{ marginTop: "4px" }}
          ></div>
      </h1>

      {projectData.map((projectArr, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="mb-24 px-4 lg:px-10"
        >
          <h1 className="text-xl lg:text-2xl font-medium px-2 py-2 rounded-xl text-center my-4 md:my-12">
            {projectArr.projects[0].title}
          </h1>

          <div className="flex flex-col mb-4 lg:h-[700px]">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative h-full">
              {/* Left Card */}
              <div className="w-full flex flex-col h-full gap-4 lg:p-2 pb-4 rounded-xl border border-white backdrop-blur-lg shadow-lg transform transition-transform duration-300 hover:scale-x-100 hover:shadow-2xl hover:shadow-red-700 cursor-pointer">
                <div className="lg:p-4 rounded-xl">
                  <img
                    src={projectArr.projects[0].imageUrl}
                    alt="Project"
                    className="rounded-xl w-full border border-white"
                  />
                </div>
                <div>
                  <ol className="text-sm md:text-base text-gray-300 px-4 space-y-2 text-left">
                    {projectArr.projects[0].points.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2 lg:text-xl">
                        <img
                          src="/assets/For_Developing/Arrow/next.png"
                          alt=""
                          className="w-2 h-2 lg:w-4 lg:h-4 invert mt-2"
                        />
                        {desc}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <img
                src="assets/For developer/Red_Dot.png"
                className="absolute z-[-1] top-[200px] right-[200px] opacity-40"
              />

              {/* Right Card */}
              <div className="w-full flex flex-col h-full gap-4 lg:p-2 pb-4 rounded-xl border border-white backdrop-blur-lg shadow-lg transform transition-transform duration-500 hover:scale-x-100 hover:shadow-2xl hover:shadow-red-700 cursor-pointer">
                <div className="lg:p-4 rounded-xl">
                  <img
                    src={projectArr.projects[1].imageUrl}
                    alt="Project"
                    className="rounded-xl w-full border border-white"
                  />
                </div>
                <div>
                  <ol className="text-sm md:text-base text-gray-300 px-4 space-y-2 text-left">
                    {projectArr.projects[1].points.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2 lg:text-xl">
                        <img
                          src="/assets/For_Developing/Arrow/next.png"
                          alt=""
                          className="w-2 h-2 lg:w-4 lg:h-4 invert mt-2"
                        />
                        {desc}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
