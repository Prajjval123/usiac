import React, { createContext, useState, useEffect } from "react";
import sanityClient from "../sanityClient";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [homepageData, setHomepageData] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  const [clientImages, setClientImages] = useState([]);
  const [testimonialsData, setTestimonialsData] = useState(null);
  const [mainServices, setMainServices] = useState(null);
  const [projectData, setProjectData] = useState(null);
  const [products, setProducts] = useState([]);
  const [policyData, setPolicyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    // Fetch both homepage data & client images in parallel
    Promise.all([
      sanityClient.fetch(
        `*[_type == "homepage"][0]{
          header{
            links
          },
          hero{
            typingTexts,
            serviceCards[]{
              number, industry, description, image, href
            },
            serviceCardButton,
            divisionsHeading,
            divisions[]{ name, href },
            heading,
            subheading
          },
          homeServices{
            services[]{
              title, description, image
            },
            services_below[]{
              items
            }
          },
          homeProjects{
            projects[]{
              title, description, image
            }
          },
          homeProducts{
            products[]{
              title, image
            },
            productDemoHeading
          },
          footer{
            icons[]{
              name, image, link
            },
            sitemap,
            address,
            phone,
            email
          }
        }`
      ),
      sanityClient.fetch(
        `*[_type == "clientImages"][0]{
          clients[]{
            alt,
            "imageUrl": asset->url
          }
        }`
      ),
      sanityClient.fetch(
        `*[_type == "testimonials"][0]{
          testimonialItems[]{
            name,
            designation,
            descriptions
          }
        }`
      ),
      sanityClient.fetch(
        `*[_type == "servicePage"][0]{
          mainServices{
            IT_Services[]{
              name,
              value[]{
                name,
                route,
                points[]{
                  title,
                  points
                },
                description,
                descriptionpoints[]{
                  title,
                  points
                },
                image,
                descriptionend
              }
            },
            GIS_Services[]{
              name,
              value1[]{
                name,
                route,
                points[]{
                  title,
                  points
                },
                description,
                descriptionpoints[]{
                  title,
                  points
                },
                image,
                descriptionend
              },
              value2[]{
                name,
                route,
                points[]{
                  title,
                  points
                },
                description,
                descriptionpoints[]{
                  title,
                  points
                },
                image,
                descriptionend
              },
              value3[]{
                name,
                route,
                points[]{
                  title,
                  points
                },
                description,
                descriptionpoints[]{
                  title,
                  points
                },
                image,
                descriptionend
              }
            }
          }
        }`
      ),
      sanityClient.fetch(
        `*[_type == "projectPage"][0]{
                projectGroups[]{
                  projects[]{
                    title,
                    points,
                    "imageUrl": image.asset->url,
                    description
                  }
                }
              }`
      ),
      sanityClient.fetch(
        `*[_type == "product"]{
            products[]{
              title,
              "imageUrl": image.asset->url,
              image{
                alt
              }
            }
          }`
      ),
      sanityClient.fetch(
        `*[_type == "about"][0]{
          title,
          description1,
          description2,
          teamSectionTitle,
          teamSectionDescription1,
          teamSectionDescription2,
          teamSectionDescription3,
          teamMembers[]{
            image{asset->{url}},
            name,
            designation,
            country,
            linkedin
          }
        }`
      ),
      sanityClient.fetch(
        `*[_type == "privacyPolicy"][0]{
          pageTitle,
          introParagraphs,
          sections[]{
            heading,
            paragraphs
          }
        }`
      ),
    ])
      .then(
        ([
          homeData,
          clientData,
          testimonialsData,
          servicesData,
          projectsData,
          productsData,
          aboutData,
          policyData
        ]) => {
          setHomepageData(homeData);
          setClientImages(clientData.clients || []);
          setTestimonialsData(testimonialsData.testimonialItems);
          setMainServices(servicesData);
          setProjectData(projectsData.projectGroups);
          setProducts(productsData[0].products);
          setAboutData(aboutData);
          setPolicyData(policyData);
          setLoading(false);
        }
      )
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const contextValue = {
    homepageData,
    aboutData,
    clientImages,
    testimonialsData,
    mainServices,
    projectData,
    products,
    policyData,
    loading,
    error,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
