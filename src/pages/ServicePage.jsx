import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sanityClient from "../sanityClient";
import { GlobalContext } from "../context/GlobalContext";

gsap.registerPlugin(ScrollTrigger);

const ServicePage = () => {
  const [mainServices, setMainServices] = useState(null);
  const [loading, setLoading] = useState(true);
  const [service, setService] = useState(null);
  const { serviceName } = useParams();

  // GSAP references
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const bulletRefs = useRef([]);
  const descriptionRef = useRef(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "servicePage"][0]{
          mainServices{
            IT_Services[] {
              name,
              value[] {
                name,
                route,
                points[] {
                  title,
                  points
                },
                description,
                descriptionpoints[] {
                  title,
                  points
                },
                image,
                descriptionend
              }
            },
            GIS_Services[] {
              name,
              value1[] {
                name,
                route,
                points[] { title, points },
                description,
                descriptionpoints[] { title, points },
                image,
                descriptionend
              },
              value2[] {
                name,
                route,
                points[] { title, points },
                description,
                descriptionpoints[] { title, points },
                image,
                descriptionend
              },
              value3[] {
                name,
                route,
                points[] { title, points },
                description,
                descriptionpoints[] { title, points },
                image,
                descriptionend
              }
            }
          }
        }`
      )
      .then((data) => {
        setMainServices(data.mainServices);

        const itArray = data.mainServices.IT_Services?.[0]?.value || [];
        const gis1 = data.mainServices.GIS_Services?.[0]?.value1 || [];
        const gis2 = data.mainServices.GIS_Services?.[0]?.value2 || [];
        const gis3 = data.mainServices.GIS_Services?.[0]?.value3 || [];
        const allServices = [...itArray, ...gis1, ...gis2, ...gis3];
        const foundService = allServices.find((item) =>
          item.route?.includes(serviceName)
        );

        setService(foundService || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching service data:", error);
        setLoading(false);
      });
  }, [serviceName]);

  // Animate once data is ready
  useEffect(() => {
    if (loading || !service) return; // Guard clause

    // Animate heading from top
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

    // Animate image from left
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // Animate each bullet item in a stagger from left
    bulletRefs.current.forEach((bullet, index) => {
      if (!bullet) return;
      gsap.fromTo(
        bullet,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: bullet,
            start: "top 90%",
          },
        }
      );
    });

    // Animate description from bottom
    if (descriptionRef.current) {
      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, [loading, service]);

  if (loading)
    return (
      <div class="text-center absolute top-[50%] left-[50%]">
        <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-500 mx-auto"></div>
        <h2 class="text-zinc-900 dark:text-white mt-4">Loading...</h2>
      </div>
    );
  if (!service) return <div>Service not found</div>;

  return (
    <div className="flex flex-col gap-24">
      <div className="text-gray-100 p-6 lg:p-12 min-h-screen">
        {/* Breadcrumb */}
        <nav className="text-lg text-gray-400 mb-8">
          <span>Services</span> / <span>IT Services</span> /{" "}
          <span className="text-red-500">{service.name}</span>
        </nav>

        <div className="lg:mx-8 bg-gray-900 backdrop-blur-xl bg-opacity-40 p-12">
          {/* Title */}
          <h1
            ref={headingRef}
            className="text-4xl md:text-5xl font-semibold text-gray-100 mb-24 text-center pb-2"
          >
            {service.name}
          </h1>

          {/* Image & Bullet Points */}
          <div
            className={`flex flex-col items-center ${
              service.points[0].points.length === 0 ? "lg:flex-col" : ""
            } lg:flex-row lg:items-start lg:justify-center gap-12 mb-12`}
          >
            {/* Image */}
            <div
              ref={imageRef}
              className={`w-full max-w-md md:max-w-lg lg:max-w-screen-xl ${
                service.points[0].points.length === 0
                  ? "flex justify-center border-none"
                  : ""
              } border-2 rounded-lg shadow-md border-white`}
            >
              <img
                src={service.image}
                alt={service.name}
                className={`rounded-lg shadow-md w-full ${
                  service.points[0].points.length === 0 ? "w-3/5 mx-auto" : ""
                } transform transition-transform duration-300 hover:scale-105 cursor-pointer`}
              />
            </div>

            {/* Bullet Points */}
            <div className="flex flex-col gap-8 items-center lg:items-start w-full">
              {service.points[0].title && (
                <h1 className="text-center lg:text-left font-bold text-3xl">
                  {service.points[0].title}
                </h1>
              )}
              <div>
                <ul className="text-justify lg:text-left text-gray-400 text-xl leading-relaxed pl-8 space-y-2">
                  {service.points[0].points.map((point, index) => (
                    <li
                      key={index}
                      ref={(el) => (bulletRefs.current[index] = el)}
                      className="list-disc transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Description */}
          <div
            ref={descriptionRef}
            className="text-gray-300 text-lg leading-relaxed text-center lg:text-left pb-16"
          >
            <h1 className="text-4xl font-bold pb-8 text-center">Description</h1>
            <p className="whitespace-pre-line text-justify">
              {service.description}
            </p>

            <div className="flex flex-col gap-2 py-6">
              {service?.descriptionpoints?.map((descriptionpoint, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <h2 className="text-red-500 text-2xl text-justify whitespace-pre-line">
                    {descriptionpoint.title}
                  </h2>
                  <ul
                    className={`${descriptionpoint.title === "" ? "pl-5" : ""}`}
                  >
                    {descriptionpoint?.points?.map((pt, i) => (
                      <li
                        key={i}
                        className={`${
                          descriptionpoint.title === ""
                            ? "list-disc"
                            : "list-none"
                        } whitespace-pre-line text-justify`}
                      >
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="whitespace-pre-line text-justify">
              {service.descriptionend}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16">
          <p className="text-center text-gray-400 text-sm">
            For more information, contact us today and explore the possibilities
            of the {service.name}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
