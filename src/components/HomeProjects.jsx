import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlobalContext } from "../context/GlobalContext";

gsap.registerPlugin(ScrollTrigger);

const HomeProjects = () => {
  const cardsRef = useRef([]);
  const headingRef = useRef(null);
  const { homepageData, loading, error } = useContext(GlobalContext);
  const homeProjects = homepageData?.homeProjects?.projects;

  useEffect(() => {
    // Only animate if data is present
    if (loading || error || !homeProjects) return;

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
  }, [loading, error, homeProjects]);

  if (loading) return <div>Loading Projects...</div>;
  if (error) return <div>Error loading Projects data.</div>;
  if (!homeProjects) return <div>No Projects found.</div>;

  return (
    <div className="pt-12 flex flex-col gap-12 min-h-screen">
      <h1
        ref={headingRef}
        className="text-4xl md:text-5xl font-semibold mb-8 text-center"
      >
        Projects
      </h1>

      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-8 lg:gap-12">
        {homeProjects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="w-full relative flex flex-col h-full gap-4 p-1 pb-4 rounded-xl border border-white bg-gray-900 backdrop-blur-lg bg-opacity-40 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-700 cursor-pointer"
          >
            <div className="md:p-2 lg:p-4 rounded-xl">
              <img
                src={project.image}
                alt="Project"
                className="w-full rounded-xl"
              />
            </div>
            <div>
              <h1 className="md:text-xl lg:text-2xl font-medium px-4 md:mb-2 lg:mb-4 whitespace-pre-line">
                {project.title}
              </h1>
              <ol className="text-sm md:text-base text-gray-300 px-4 md:space-y-1 lg:space-y-2 text-left">
                {project.description.map((desc, i) => (
                  <li key={i} className="flex gap-2">
                    <img
                      src="/assets/For_Developing/Arrow/next.png"
                      alt=""
                      className="w-3 h-3 mt-2 invert"
                    />
                    {desc}
                  </li>
                ))}
              </ol>
            </div>

            {/* Decorative Dot */}
            <img
              src="/assets/For_Developing/Background/Dot.png"
              className="hidden lg:block absolute top-80 w-80 h-80 bg-blue-800 opacity-10 rounded-full blur-[70px] mix-blend-lighten"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <Link to="/projects">
          <button className="bg-red-700 text-sm w-24 rounded hover:bg-red-500">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeProjects;
