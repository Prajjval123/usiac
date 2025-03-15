import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const About = () => {
  const { aboutData, loading, error } = useContext(GlobalContext);

  if (loading || error) {
    return (
      <div class="text-center absolute top-[50%] left-[50%]">
        <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-500 mx-auto"></div>
        <h2 class="text-zinc-900 dark:text-white mt-4">Loading...</h2>
      </div>
    );
  }
  return (
    <>
      {aboutData ? (
        <div className="pb-20">
          <div className="pt-40 px-4 lg:px-20">
            <section className="p-2 flex flex-col gap-6 lg:p-4 lg:py-8 animate-fade-in-later border rounded-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-center mt-4">
                {aboutData.title}
              </h1>
              <p className="text-lg leading-relaxed px-2 text-justify">
                {aboutData.description1[0].children[0].text} <br /> <br />{" "}
                {aboutData.description2[0].children[0].text}
              </p>
            </section>
          </div>

          <div className="pt-10 px-4 lg:px-20 relative">
            <section className="p-2 flex flex-col gap-6 lg:p-4 lg:py-8 animate-fade-in-later border rounded-xl backdrop-blur-lg">
              <h1 className="text-4xl font-bold text-center mt-4">
                {aboutData.teamSectionTitle}
              </h1>
              <p className="text-justify text-lg leading-relaxed px-4">
                {aboutData.teamSectionDescription1[0].children[0].text}
                <br />
                <br />
                {aboutData.teamSectionDescription2[0].children[0].text}
                <br />
                <br />
                {aboutData.teamSectionDescription2[0].children[0].text}
              </p>
            </section>
            <img
              src="assets/For developer/Red_Dot.png"
              className="absolute top-8 ml-16 opacity-40 "
            />
          </div>
          <div className="pt-10 px-4 lg:px-20  relative">
            <section className="p-2 flex flex-col gap-12 lg:p-4 lg:py-8 animate-fade-in-later border rounded-xl backdrop-blur-lg">
              <div className="flex flex-col gap-12">
                <h1 className="text-4xl font-bold text-center mt-4">
                  Meet Our Team
                </h1>
                <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
                  {aboutData.teamMembers.map((person, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer border rounded-xl shadow-lg"
                    >
                      <div className="p-4 rounded-xl">
                        <img
                          src={person.image.asset.url}
                          alt={person.name}
                          className="rounded-xl h-52 w-52 lg:h-80 lg:w-64 "
                        />
                      </div>
                      <div className="pt-2">
                        <h2 className="text-2xl lg:text-3xl font-semibold text-center">
                          {person.name}
                        </h2>
                        <p className="text-sm lg:text-md text-center">
                          {person.designation}
                        </p>
                      </div>
                      <div className="flex items-center justify-between w-full p-4 px-6">
                        <p className="text-sm uppercase">{person.country}</p>
                        <a
                          href={person.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          <img
                            src="/assets/linkedin-icon.png"
                            alt="LinkedIn"
                            className="w-4 h-4 "
                          />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <img
              src="assets/For developer/Red_Dot.png"
              className="absolute top-[460px] right-[60px] w-96 opacity-80"
            />
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default About;
