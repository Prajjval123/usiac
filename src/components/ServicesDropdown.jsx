import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import sanityClient from "../sanityClient";

function ServicesDropdown({ isServiceDropdownOpen, handleServiceDropdown }) {
  const [mainServices, setMainServices] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    sanityClient
      .fetch(
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
      )
      .then((data) => {
        setMainServices(data.mainServices);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching service data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading services...</div>;

  if (!mainServices) {
    return <div>No service data found.</div>;
  }

  const handleServiceClick = (route) => {
    navigate(route);
  };

  return (
    <div className="relative">
      {isServiceDropdownOpen && (
        <div
          className="absolute border border-white bg-black mt-2 rounded shadow-lg w-[1000px]  p-4 animate-popup"
          onClick={handleServiceDropdown}
        >
          <div className="grid grid-cols-4 gap-4">
            {/* IT Services */}
            <div className="grid-col-1">
              {mainServices.IT_Services.map((service) => (
                <div key={service.name}>
                  <h4 className="font-semibold border-b pb-2 mb-2">
                    {service.name}
                  </h4>
                  <ul className="space-y-1">
                    {service.value.map((value) => (
                      <li
                        key={value.name}
                        className="hover:text-red-500 cursor-pointer"
                        onClick={() => handleServiceClick(value.route)}
                      >
                        {value.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* GIS Services */}
            <div className="flex">
              <div className=" whitespace-nowrap">
                {mainServices.GIS_Services.map((service) => (
                  <div key={service.name}>
                    <h4 className="font-semibold border-b pb-2 mb-2">
                      {service.name}
                    </h4>
                    <div className="flex gap-4">
                      <ul className="flex gap-2 w-full max-w-[180px] whitespace-nowrap overflow-hidden text-ellipsis">
                        <li className="space-y-1">
                          {service.value1.map((value) => (
                            <li
                              key={value.name}
                              className="hover:text-red-500 cursor-pointer"
                              onClick={() => handleServiceClick(value.route)}
                            >
                              {value.name}
                            </li>
                          ))}
                        </li>
                      </ul>
                      <ul className="flex gap-2 w-full">
                        <li className="space-y-1">
                          {service.value2.map((value) => (
                            <li
                              key={value.name}
                              className="hover:text-red-500 cursor-pointer"
                              onClick={() => handleServiceClick(value.route)}
                            >
                              {value.name}
                            </li>
                          ))}
                        </li>
                      </ul>
                      <ul className="flex gap-2 w-full">
                        <li className="space-y-1">
                          {service.value3.map((value) => (
                            <li
                              key={value.name}
                              className="hover:text-red-500 cursor-pointer"
                              onClick={() => handleServiceClick(value.route)}
                            >
                              {value.name}
                            </li>
                          ))}
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesDropdown;
